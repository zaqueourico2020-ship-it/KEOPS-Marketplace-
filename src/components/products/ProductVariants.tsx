"use client";

import { useProduct } from "@/context/ProductContext";

export default function ProductVariants() {
  const { product, setProduct } = useProduct();

  function handleChange(index: number, field: string, value: string) {
    const variants = [...((product as any).variants || [])];

    variants[index] = {
      ...variants[index],
      [field]: value,
    };

    setProduct((prev: any) => ({
      ...prev,
      variants,
    }));
  }

  function addVariant() {
    setProduct((prev: any) => ({
      ...prev,
      variants: [
        ...(prev.variants || []),
        {
          color: "",
          size: "",
          price: 0,
          stock: 0,
        },
      ],
    }));
  }

  function removeVariant(index: number) {
    const variants = [...((product as any).variants || [])];
    variants.splice(index, 1);

    setProduct((prev: any) => ({
      ...prev,
      variants,
    }));
  }

  const variants = (product as any).variants || [];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Variações
        </h2>

        <button
          type="button"
          onClick={addVariant}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl"
        >
          + Nova Variação
        </button>
      </div>

      {variants.map((variant: any, index: number) => (
        <div
          key={index}
          className="border border-gray-700 rounded-xl p-4 space-y-4"
        >
          <input
            className="w-full p-3 rounded-xl bg-gray-800 text-white"
            placeholder="Cor"
            value={variant.color}
            onChange={(e) =>
              handleChange(index, "color", e.target.value)
            }
          />

          <input
            className="w-full p-3 rounded-xl bg-gray-800 text-white"
            placeholder="Tamanho"
            value={variant.size}
            onChange={(e) =>
              handleChange(index, "size", e.target.value)
            }
          />

          <input
            className="w-full p-3 rounded-xl bg-gray-800 text-white"
            type="number"
            placeholder="Preço"
            value={variant.price}
            onChange={(e) =>
              handleChange(index, "price", e.target.value)
            }
          />

          <input
            className="w-full p-3 rounded-xl bg-gray-800 text-white"
            type="number"
            placeholder="Estoque"
            value={variant.stock}
            onChange={(e) =>
              handleChange(index, "stock", e.target.value)
            }
          />

          <button
            type="button"
            onClick={() => removeVariant(index)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl"
          >
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}
