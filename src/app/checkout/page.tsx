"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("pix");

  return (
    <main className="min-h-screen bg-gray-950 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-white">
          Finalizar Compra
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="space-y-6 lg:col-span-2">

            <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Dados do Comprador
              </h2>

              <div className="space-y-4">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome completo"
                  className="w-full rounded-xl bg-gray-800 border border-gray-700 px-4 py-3 text-white"
                />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  className="w-full rounded-xl bg-gray-800 border border-gray-700 px-4 py-3 text-white"
                />

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefone"
                  className="w-full rounded-xl bg-gray-800 border border-gray-700 px-4 py-3 text-white"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Endereço
              </h2>

              <div className="space-y-4">
                <input
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  placeholder="CEP"
                  className="w-full rounded-xl bg-gray-800 border border-gray-700 px-4 py-3 text-white"
                />

                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Rua, número e complemento"
                  className="w-full rounded-xl bg-gray-800 border border-gray-700 px-4 py-3 text-white"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Forma de Pagamento
              </h2>

              <div className="space-y-3">

                <label className="flex items-center gap-3 text-white">
                  <input
                    type="radio"
                    checked={paymentMethod === "pix"}
                    onChange={() => setPaymentMethod("pix")}
                  />
                  PIX
                </label>

                <label className="flex items-center gap-3 text-white">
                  <input
                    type="radio"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                  />
                  Cartão de Crédito
                </label>

                <label className="flex items-center gap-3 text-white">
                  <input
                    type="radio"
                    checked={paymentMethod === "boleto"}
                    onChange={() => setPaymentMethod("boleto")}
                  />
                  Boleto
                </label>

              </div>
            </div>

          </div>

          <div className="rounded-2xl bg-gray-900 border border-gray-800 p-6 h-fit">

            <h2 className="mb-6 text-2xl font-bold text-white">
              Resumo
            </h2>

            <div className="mb-3 flex justify-between text-gray-300">
              <span>Itens</span>
              <span>{cart.totalItems}</span>
            </div>

            <div className="mb-6 flex justify-between text-2xl font-bold text-white">
              <span>Total</span>
              <span>
                {cart.totalPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>

            <button className="w-full rounded-xl bg-green-600 py-4 text-lg font-bold text-white hover:bg-green-700">
              Confirmar Pedido
            </button>

          </div>

        </div>
      </div>
    </main>
  );
}
