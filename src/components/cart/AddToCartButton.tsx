"use client";

import { useCart } from "@/context/CartContext";
import { CartItem } from "@/types/cart";

interface AddToCartButtonProps {
  product: CartItem;
}

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  function handleAdd() {
    addToCart(product);
  }

  return (
    <button
      onClick={handleAdd}
      className="w-full rounded-xl bg-purple-600 px-4 py-3 font-semibold text-white transition hover:bg-purple-700"
    >
      Adicionar ao Carrinho
    </button>
  );
}
