import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getDashboardStats() {
  const products = await getDocs(collection(db, "products"));
  const sellers = await getDocs(collection(db, "sellers"));
  const orders = await getDocs(collection(db, "orders"));

  let revenue = 0;

  orders.forEach((doc) => {
    const data = doc.data();
    revenue += Number(data.total || 0);
  });

  return {
    products: products.size,
    sellers: sellers.size,
    orders: orders.size,
    revenue,
  };
}
