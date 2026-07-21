"use client";

import { useProduct } from "@/context/ProductContext";

export default function ProductPricing() {
  const { product, setProduct } = useProduct();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  }

  const commission = 12;
  const commissionValue = (product.price * commission) / 100;
  const estimatedProfit =
    product.price - product.cost - commissionValue;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
      <h2 className="text-2xl font-bold text-white">
        Preços
      </h2>

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        name="cost"
        placeholder="Custo do produto"
        value={product.cost}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        name="price"
        placeholder="Preço de venda"
        value={product.price}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        name="promotionalPrice"
        placeholder="Preço promocional"
        value={product.promotionalPrice}
        onChange={handleChange}
      />

      <div className="bg-gray-800 rounded-xl p-4 space-y-2 text-white">
        <p>
          Comissão (12%): <strong>R$ {commissionValue.toFixed(2)}</strong>
        </p>

        <p>
          Lucro estimado: <strong>R$ {estimatedProfit.toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
}
