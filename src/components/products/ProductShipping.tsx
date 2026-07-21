"use client";

import { useState } from "react";

export default function ProductShipping() {
  const [shipping, setShipping] = useState({
    weight: "",
    height: "",
    width: "",
    length: "",
    originZipCode: "",
    freeShipping: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;

    setShipping({
      ...shipping,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    });
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
      <h2 className="text-2xl font-bold text-white">
        Informações de Envio
      </h2>

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        name="weight"
        placeholder="Peso (kg)"
        value={shipping.weight}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        name="height"
        placeholder="Altura (cm)"
        value={shipping.height}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        name="width"
        placeholder="Largura (cm)"
        value={shipping.width}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        name="length"
        placeholder="Comprimento (cm)"
        value={shipping.length}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="text"
        name="originZipCode"
        placeholder="CEP de origem"
        value={shipping.originZipCode}
        onChange={handleChange}
      />

      <label className="flex items-center gap-3 text-white">
        <input
          type="checkbox"
          name="freeShipping"
          checked={shipping.freeShipping}
          onChange={handleChange}
        />
        Frete grátis
      </label>
    </div>
  );
}
