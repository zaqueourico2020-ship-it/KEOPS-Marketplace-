"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { cart } = useCart();
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold text-purple-500"
        >
          KEOPS
        </Link>

        <div className="hidden md:flex flex-1 px-8">
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-2 text-white outline-none focus:border-purple-500"
          />
        </div>

        <nav className="flex items-center gap-5">

          <Link href="/" className="text-white hover:text-purple-400">
            Início
          </Link>

          <Link href="/cart" className="relative text-white hover:text-purple-400">
            🛒

            {cart.totalItems > 0 && (
              <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                {cart.totalItems}
              </span>
            )}
          </Link>

          <Link href="/favorites" className="text-white hover:text-purple-400">
            ❤️
          </Link>

          <Link
            href={user ? "/profile" : "/login"}
            className="text-white hover:text-purple-400"
          >
            👤
          </Link>

        </nav>

      </div>
    </header>
  );
}
