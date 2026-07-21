"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { Cart, CartItem } from "@/types/cart";

interface CartContextType {
  cart: Cart;
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("keops-cart");

    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("keops-cart", JSON.stringify(items));
  }, [items]);

  function addToCart(item: CartItem) {
    setItems((current) => {
      const existing = current.find(
        (p) => p.productId === item.productId
      );

      if (existing) {
        return current.map((p) =>
          p.productId === item.productId
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...current, item];
    });
  }

  function removeFromCart(productId: string) {
    setItems((current) =>
      current.filter((p) => p.productId !== productId)
    );
  }

  function increaseQuantity(productId: string) {
    setItems((current) =>
      current.map((p) =>
        p.productId === productId
          ? { ...p, quantity: p.quantity + 1 }
          : p
      )
    );
  }

  function decreaseQuantity(productId: string) {
    setItems((current) =>
      current
        .map((p) =>
          p.productId === productId
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
        .filter((p) => p.quantity > 0)
    );
  }

  function clearCart() {
    setItems([]);
  }

  const cart = useMemo<Cart>(() => {
    const totalItems = items.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    const totalPrice = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    return {
      items,
      totalItems,
      totalPrice,
    };
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart deve ser usado dentro de CartProvider");
  }

  return context;
}
