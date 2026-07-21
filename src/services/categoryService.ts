import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Category } from "@/types/category";
import { categories } from "@/data/categories";

const categoryCollection = collection(db, "categories");

export async function getCategories(): Promise<Category[]> {
  const snapshot = await getDocs(categoryCollection);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  })) as Category[];
}

export async function createCategory(
  category: Omit<Category, "id">
): Promise<void> {
  await addDoc(categoryCollection, category);
}

export async function updateCategory(
  id: string,
  data: Partial<Category>
): Promise<void> {
  await updateDoc(doc(db, "categories", id), data);
}

export async function deleteCategory(id: string): Promise<void> {
  await deleteDoc(doc(db, "categories", id));
}

/**
 * Importa automaticamente as categorias padrão
 * caso a coleção esteja vazia.
 */
export async function seedCategories(): Promise<void> {
  const snapshot = await getDocs(categoryCollection);

  if (!snapshot.empty) {
    console.log("Categorias já cadastradas.");
    return;
  }

  for (const category of categories) {
    await setDoc(doc(db, "categories", category.id), {
      ...category,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  console.log("Categorias importadas com sucesso!");
}
