import {
  addDoc,
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Order, OrderStatus } from "@/types/order";

export async function createOrder(order: Order) {
  const docRef = await addDoc(collection(db, "orders"), order);
  return docRef.id;
}

export async function getOrders() {
  const snapshot = await getDocs(collection(db, "orders"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Order[];
}

export async function getOrderById(id: string) {
  const snapshot = await getDoc(doc(db, "orders", id));

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Order;
}

export async function getOrdersByUser(userId: string) {
  const q = query(
    collection(db, "orders"),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Order[];
}

export async function updateOrderStatus(
  id: string,
  status: OrderStatus
) {
  await updateDoc(doc(db, "orders", id), {
    status,
  });
}
