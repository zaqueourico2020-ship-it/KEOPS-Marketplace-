"use client";

import { useState } from "react";

export default function ProductPricing() {
  const [pricing, setPricing] = useState({
    cost: "",
    price: "",
    promotionalPrice: "",
    commission: "12",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPricing({
      ...pricing,
      [e.target.name]: e.target.value,
    });
  }

  const cost = Number(pricing.cost) || 0;
  const price = Number(pricing.price) || 0;
  const commission = Number(pricing.commission) || 0;

  const commissionValue = (price * commission) / 100;
  const estimatedProfit = price - cost - commissionValue;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
      <h2 className="text-2xl font-bold text-white">
        Preços
      </h2>

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Custo do produto"
        type="number"
        name="cost"
        value={pricing.cost}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Preço de venda"
        type="number"
        name="price"
        value={pricing.price}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Preço promocional"
        type="number"
        name="promotionalPrice"
        value={pricing.promotionalPrice}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Comissão (%)"
        type="number"
        name="commission"
        value={pricing.commission}
        onChange={handleChange}
      />

      <div className="bg-gray-800 rounded-xl p-4 space-y-2 text-white">
        <p>Comissão: <strong>R$ {commissionValue.toFixed(2)}</strong></p>
        <p>Lucro estimado: <strong>R$ {estimatedProfit.toFixed(2)}</strong></p>
      </div>
    </div>
  );
}
