"use client";

import AddToCartButton from "@/components/cart/AddToCartButton";

export default function ProductPage() {
  const product = {
    productId: "galaxy-premium",
    sellerId: "seller-demo",
    name: "Smartphone Galaxy Premium",
    image: "https://placehold.co/600x600?text=Galaxy+Premium",
    price: 1299.9,
    quantity: 1,
    stock: 20,
  };

  return (
    <section className="mt-8">
      <div className="rounded-2xl bg-slate-800 p-5 text-white">

        <div className="flex h-72 items-center justify-center rounded-2xl bg-slate-900 text-8xl">
          📱
        </div>

        <h1 className="mt-5 text-3xl font-bold">
          Smartphone Galaxy Premium
        </h1>

        <p className="mt-2">⭐⭐⭐⭐⭐ 4.9 (2.548 avaliações)</p>

        <h2 className="mt-4 text-4xl font-bold text-green-500">
          R$ 1.299,90
        </h2>

        <p className="mt-2">
          ou 12x de R$ 108,32 sem juros
        </p>

        <p className="mt-3 text-green-400">
          ✔ Estoque disponível
        </p>

        <button className="mt-6 w-full rounded-xl bg-purple-700 py-4 text-lg font-semibold transition hover:bg-purple-800">
          Comprar Agora
        </button>

        <div className="mt-3">
          <AddToCartButton product={product} />
        </div>

        <h2 className="mt-8 text-2xl font-bold">
          Descrição
        </h2>

        <p className="mt-3 text-gray-300">
          Smartphone com tela AMOLED de 6.7", câmera de 108MP,
          processador Octa-Core, 256GB de armazenamento,
          12GB de RAM e bateria de longa duração.
        </p>

      </div>
    </section>
  );
}
