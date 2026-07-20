import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Category } from "@/types/category";

const categoryCollection = collection(db, "categories");

export async function getCategories() {
  const snapshot = await getDocs(categoryCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Category[];
}

export async function createCategory(category: Omit<Category, "id">) {
  return await addDoc(categoryCollection, category);
}

export async function updateCategory(id: string, data: Partial<Category>) {
  return await updateDoc(doc(db, "categories", id), data);
}

export async function deleteCategory(id: string) {
  return await deleteDoc(doc(db, "categories", id));
}
