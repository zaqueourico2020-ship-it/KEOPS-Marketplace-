"use client";

import { useProduct } from "@/context/ProductContext";

export default function ProductInventory() {
  const { product, setProduct } = useProduct();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]:
        name === "sku" || name === "barcode"
          ? value
          : Number(value),
    }));
  }

  const lowStock =
    product.stock <= product.minimumStock &&
    product.stock > 0;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
      <h2 className="text-2xl font-bold text-white">
        Estoque
      </h2>

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        name="stock"
        placeholder="Quantidade em estoque"
        value={product.stock}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        name="minimumStock"
        placeholder="Estoque mínimo"
        value={product.minimumStock}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        name="sku"
        placeholder="SKU"
        value={product.sku}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        name="barcode"
        placeholder="Código de barras (EAN)"
        value={product.barcode}
        onChange={handleChange}
      />

      <div className="bg-gray-800 rounded-xl p-4 text-white">
        <p>
          Status:
          <strong
            className={
              lowStock ? "text-red-400" : "text-green-400"
            }
          >
            {" "}
            {lowStock ? "Estoque Baixo" : "Estoque Normal"}
          </strong>
        </p>
      </div>
    </div>
  );
}
