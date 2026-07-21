"use client";

import { useState } from "react";

interface Variant {
  id: number;
  color: string;
  size: string;
  price: string;
  stock: string;
}

export default function ProductVariants() {
  const [variants, setVariants] = useState<Variant[]>([
    {
      id: 1,
      color: "",
      size: "",
      price: "",
      stock: "",
    },
  ]);

  function handleChange(
    id: number,
    field: keyof Variant,
    value: string
  ) {
    setVariants((prev) =>
      prev.map((variant) =>
        variant.id === id
          ? { ...variant, [field]: value }
          : variant
      )
    );
  }

  function addVariant() {
    setVariants((prev) => [
      ...prev,
      {
        id: Date.now(),
        color: "",
        size: "",
        price: "",
        stock: "",
      },
    ]);
  }

  function removeVariant(id: number) {
    setVariants((prev) => prev.filter((variant) => variant.id !== id));
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Variações do Produto
        </h2>

        <button
          type="button"
          onClick={addVariant}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl"
        >
          + Adicionar
        </button>
      </div>

      {variants.map((variant) => (
        <div
          key={variant.id}
          className="border border-gray-700 rounded-xl p-4 space-y-4"
        >
          <input
            className="w-full p-3 rounded-xl bg-gray-800 text-white"
            placeholder="Cor"
            value={variant.color}
            onChange={(e) =>
              handleChange(variant.id, "color", e.target.value)
            }
          />

          <input
            className="w-full p-3 rounded-xl bg-gray-800 text-white"
            placeholder="Tamanho"
            value={variant.size}
            onChange={(e) =>
              handleChange(variant.id, "size", e.target.value)
            }
          />

          <input
            className="w-full p-3 rounded-xl bg-gray-800 text-white"
            type="number"
            placeholder="Preço"
            value={variant.price}
            onChange={(e) =>
              handleChange(variant.id, "price", e.target.value)
            }
          />

          <input
            className="w-full p-3 rounded-xl bg-gray-800 text-white"
            type="number"
            placeholder="Estoque"
            value={variant.stock}
            onChange={(e) =>
              handleChange(variant.id, "stock", e.target.value)
            }
          />

          <button
            type="button"
            onClick={() => removeVariant(variant.id)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl"
          >
            Remover Variação
          </button>
        </div>
      ))}
    </div>
  );
}
