"use client";

import { useProduct } from "@/context/ProductContext";

export default function ProductShipping() {
  const { product, setProduct } = useProduct();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value, type, checked } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : Number(value),
    }));
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
        value={product.weight}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        name="height"
        placeholder="Altura (cm)"
        value={product.height}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        name="width"
        placeholder="Largura (cm)"
        value={product.width}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        name="length"
        placeholder="Comprimento (cm)"
        value={product.length}
        onChange={handleChange}
      />
    </div>
  );
}
