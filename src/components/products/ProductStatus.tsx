"use client";

import { useProduct } from "@/context/ProductContext";

export default function ProductStatus() {
  const { product, setProduct } = useProduct();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;

    setProduct((prev) => ({
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
        <span>Produto Ativo</span>
        <input
          type="checkbox"
          name="active"
          checked={product.active}
          onChange={handleChange}
        />
      </label>

      <label className="flex items-center justify-between text-white">
        <span>Produto em Destaque</span>
        <input
          type="checkbox"
          name="featured"
          checked={product.featured}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
