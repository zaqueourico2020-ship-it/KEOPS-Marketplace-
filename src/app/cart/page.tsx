"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <main className="min-h-screen bg-gray-950 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-white">
          Meu Carrinho
        </h1>

        {cart.items.length === 0 ? (
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-10 text-center">
            <p className="text-xl text-gray-300">
              Seu carrinho está vazio.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {cart.items.map((item) => (
                <div
                  key={item.productId}
                  className="flex gap-4 rounded-2xl border border-gray-800 bg-gray-900 p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-white">
                      {item.name}
                    </h2>

                    <p className="mt-2 text-purple-400 font-semibold">
                      R$ {item.price.toFixed(2)}
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.productId)}
                        className="rounded-lg bg-gray-800 px-3 py-1 text-white"
                      >
                        -
                      </button>

                      <span className="text-white">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.productId)}
                        className="rounded-lg bg-gray-800 px-3 py-1 text-white"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeFromCart(item.productId)}
                        className="ml-6 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 h-fit">
              <h2 className="text-2xl font-bold text-white mb-6">
                Resumo
              </h2>

              <div className="flex justify-between text-gray-300 mb-3">
                <span>Itens</span>
                <span>{cart.totalItems}</span>
              </div>

              <div className="flex justify-between text-xl font-bold text-white mb-8">
                <span>Total</span>

                <span>
                  {cart.totalPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>

              <input
                type="text"
                placeholder="Cupom de desconto"
                className="mb-4 w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white"
              />

              <input
                type="text"
                placeholder="CEP para calcular frete"
                className="mb-6 w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white"
              />

              <button className="mb-3 w-full rounded-xl bg-purple-600 py-3 font-bold text-white hover:bg-purple-700">
                Finalizar Compra
              </button>

              <button
                onClick={clearCart}
                className="w-full rounded-xl bg-red-600 py-3 font-bold text-white hover:bg-red-700"
              >
                Limpar Carrinho
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
