"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { getProducts } from "@/services/productService";
import { Product } from "@/types/product";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const data = await getProducts();

      const featured = data.filter(
        (product) => product.active && product.featured
      );

      setProducts(featured);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">
          Produtos em Destaque
        </h2>

        <p>Carregando produtos...</p>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">
          Produtos em Destaque
        </h2>

        <p>Nenhum produto encontrado.</p>
      </section>
    );
  }

  return (
    <section className="mt-8">

      <h2 className="mb-6 text-2xl font-bold">
        Produtos em Destaque
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

        {products.map((product) => (

          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-lg"
          >

            <div className="relative h-56 w-full bg-gray-100">

              <Image
                src={
                  product.images?.length
                    ? product.images[0]
                    : "/placeholder.png"
                }
                alt={product.name}
                fill
                className="object-contain p-4"
              />

            </div>

            <div className="p-4">

              <h3 className="line-clamp-2 font-semibold">
                {product.name}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {product.brand || "KEOPS"}
              </p>

              <div className="mt-3">

                {product.promotionalPrice && (
                  <p className="text-sm text-gray-400 line-through">
                    R$ {Number(product.price).toFixed(2)}
                  </p>
                )}

                <p className="text-2xl font-bold text-green-600">
                  R$
                  {Number(
                    product.promotionalPrice ?? product.price
                  ).toFixed(2)}
                </p>

              </div>

              <button className="mt-4 w-full rounded-xl bg-purple-600 py-3 font-bold text-white hover:bg-purple-700">
                Ver Produto
              </button>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}
