"use client";

import { useState } from "react";

export default function ProductStatus() {
  const [status, setStatus] = useState({
    active: true,
    featured: false,
    newProduct: true,
    dailyOffer: false,
    available: true,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;

    setStatus((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
      <h2 className="text-2xl font-bold text-white">
        Status do Produto
      </h2>

      <label className="flex items-center justify-between text-white">
        <span>Produto ativo</span>
        <input
          type="checkbox"
          name="active"
          checked={status.active}
          onChange={handleChange}
        />
      </label>

      <label className="flex items-center justify-between text-white">
        <span>Produto em destaque</span>
        <input
          type="checkbox"
          name="featured"
          checked={status.featured}
          onChange={handleChange}
        />
      </label>

      <label className="flex items-center justify-between text-white">
        <span>Produto novo</span>
        <input
          type="checkbox"
          name="newProduct"
          checked={status.newProduct}
          onChange={handleChange}
        />
      </label>

      <label className="flex items-center justify-between text-white">
        <span>Oferta do dia</span>
        <input
          type="checkbox"
          name="dailyOffer"
          checked={status.dailyOffer}
          onChange={handleChange}
        />
      </label>

      <label className="flex items-center justify-between text-white">
        <span>Disponível para venda</span>
        <input
          type="checkbox"
          name="available"
          checked={status.available}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
