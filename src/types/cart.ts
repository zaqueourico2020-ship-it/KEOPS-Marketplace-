export interface CartItem {
  productId: string;
  sellerId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  stock: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}
