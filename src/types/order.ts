export type OrderStatus =
  | "pending"
  | "paid"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderItem {
  productId: string;
  sellerId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface Order {
  id?: string;
  userId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  total: number;
  paymentMethod: "pix" | "card" | "boleto";
  status: OrderStatus;
  createdAt: number;
}
