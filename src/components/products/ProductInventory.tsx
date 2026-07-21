"use client";

import { useState } from "react";

export default function ProductInventory() {
  const [inventory, setInventory] = useState({
    stock: "",
    minimumStock: "",
    reservedStock: "",
    sku: "",
    barcode: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInventory({
      ...inventory,
      [e.target.name]: e.target.value,
    });
  }

  const currentStock = Number(inventory.stock) || 0;
  const minimumStock = Number(inventory.minimumStock) || 0;

  const lowStock = currentStock <= minimumStock;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
      <h2 className="text-2xl font-bold text-white">
        Estoque
      </h2>

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Quantidade em estoque"
        type="number"
        name="stock"
        value={inventory.stock}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Estoque mínimo"
        type="number"
        name="minimumStock"
        value={inventory.minimumStock}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Estoque reservado"
        type="number"
        name="reservedStock"
        value={inventory.reservedStock}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="SKU"
        name="sku"
        value={inventory.sku}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Código de barras (EAN)"
        name="barcode"
        value={inventory.barcode}
        onChange={handleChange}
      />

      <div className="bg-gray-800 rounded-xl p-4 text-white">
        <p>
          Status:
          <strong className={lowStock ? "text-red-400" : "text-green-400"}>
            {" "}
            {lowStock ? "Estoque Baixo" : "Estoque Normal"}
          </strong>
        </p>
      </div>
    </div>
  );
}
