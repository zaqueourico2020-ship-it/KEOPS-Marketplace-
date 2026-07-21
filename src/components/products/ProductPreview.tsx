"use client";

import { useProduct } from "@/context/ProductContext";

export default function ProductPreview() {
  const { product } = useProduct();

  const image =
    product.images.length > 0
      ? product.images[0]
      : "https://placehold.co/600x600?text=Sem+Imagem";

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Pré-visualização
      </h2>

      <div className="bg-white rounded-2xl overflow-hidden">

        <img
          src={image}
          alt={product.name || "Produto"}
          className="w-full h-72 object-cover"
        />

        <div className="p-5">

          <h3 className="text-xl font-bold text-gray-900">
            {product.name || "Nome do Produto"}
          </h3>

          <p className="text-gray-600 mt-2">
            {product.description || "Descrição do produto"}
          </p>

          <p className="text-3xl font-bold text-green-600 mt-5">
            R$ {product.price.toFixed(2)}
          </p>

          {product.promotionalPrice > 0 && (
            <p className="text-red-600 mt-2">
              Promoção: R$ {product.promotionalPrice.toFixed(2)}
            </p>
          )}

          <div className="mt-6 flex gap-2 flex-wrap">

            {product.featured && (
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                Destaque
              </span>
            )}

            {product.active && (
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                Ativo
              </span>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
