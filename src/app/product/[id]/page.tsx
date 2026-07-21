"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import AddToCartButton from "@/components/cart/AddToCartButton";
import { getProductById } from "@/services/productService";

export default function ProductPage() {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    loadProduct();
  }, []);

  async function loadProduct() {
    try {
      const data = await getProductById(params.id as string);

      setProduct(data);

      if (data?.images?.length) {
        setSelectedImage(data.images[0]);
      }
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">
          Carregando produto...
        </h1>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        Produto não encontrado.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">

      <div className="mx-auto max-w-7xl px-5 py-8">

  <div className="mb-8 text-sm text-gray-500">
    <Link href="/">Início</Link>
    {" / "}
    {product.name}
  </div>

  <div className="grid gap-10 lg:grid-cols-2">

    {/* GALERIA */}

    <div>

      <div className="rounded-2xl bg-white p-6 shadow">

        <Image
          src={selectedImage || "/placeholder.png"}
          alt={product.name}
          width={700}
          height={700}
          className="w-full rounded-xl object-contain"
        />

      </div>

      <div className="mt-5 flex gap-3 overflow-auto">

        {product.images?.map((img: string) => (

          <button
            key={img}
            onClick={() => setSelectedImage(img)}
            className="rounded-xl border bg-white p-2"
          >

            <Image
              src={img}
              alt=""
              width={90}
              height={90}
              className="rounded-lg"
            />

          </button>

        ))}

      </div>

    </div>

    {/* INFORMAÇÕES */}

    <div>

      <p className="font-semibold text-green-600">
        Em estoque
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        {product.name}
      </h1>

      <p className="mt-6 text-5xl font-bold text-green-600">
        R$ {Number(product.price).toFixed(2)}
      </p>

      <p className="mt-2 text-gray-500">
        ou 12x sem juros
      </p>

    </div>

  </div>

</div>
    </main>
  );
}
