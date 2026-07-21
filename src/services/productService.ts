import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Product } from "@/types/product";

const productCollection = collection(db, "products");

export async function getProducts(): Promise<Product[]> {
  const snapshot = await getDocs(productCollection);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  })) as Product[];
}

export async function getProductById(
  id: string
): Promise<Product | null> {
  const snapshot = await getDoc(doc(db, "products", id));

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Product;
}

export async function createProduct(
  product: Omit<Product, "id">
): Promise<void> {
  await addDoc(productCollection, {
    ...product,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

export async function updateProduct(
  id: string,
  data: Partial<Product>
): Promise<void> {
  await updateDoc(doc(db, "products", id), {
    ...data,
    updatedAt: new Date(),
  });
}

export async function deleteProduct(id: string): Promise<void> {
  await deleteDoc(doc(db, "products", id));
}
