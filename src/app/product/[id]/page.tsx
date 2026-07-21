"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import AddToCartButton from "@/components/cart/AddToCartButton";
import { getProductById } from "@/services/productService";

export default function ProductPage() {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
const router = useRouter();
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

<h1 className="mt-3 text-4xl font-bold">
  {product.name}
</h1>

<div className="mt-5 flex items-center gap-3">
  <span className="text-yellow-500 text-xl">
    ★★★★★
  </span>

  <span className="text-gray-600">
    4.9 (2.548 avaliações)
  </span>
</div>

<div className="mt-8">

  <p className="text-2xl text-gray-400 line-through">
    R$ {(Number(product.price) * 1.2).toFixed(2)}
  </p>

  <h2 className="text-5xl font-bold text-green-600">
    R$ {Number(product.price).toFixed(2)}
  </h2>

  <p className="mt-2 text-gray-600">
    ou <strong>12x sem juros</strong>
  </p>

</div>

<div className="mt-8 rounded-2xl bg-white p-6 shadow">

  <div className="flex justify-between">
    <span>Marca</span>
    <strong>{product.brand || "KEOPS"}</strong>
  </div>

  <div className="mt-4 flex justify-between">
    <span>Categoria</span>
    <strong>{product.categoryId || "Marketplace"}</strong>
  </div>
<div className="mt-8 flex flex-col gap-4">

<button
  onClick={() => {
    router.push("/checkout");
  }}
  className="w-full rounded-2xl bg-purple-600 py-4 text-lg font-bold text-white hover:bg-purple-700 transition"
>
  Comprar Agora
</button>

<AddToCartButton
  product={{
    ...product,
    quantity,
  }}
/>

  <button
    className="w-full rounded-2xl border py-4 text-lg hover:bg-gray-100 transition"
  >
    ❤️ Favoritar
  </button>

</div>
</div>
    </div>

  </div>

</div>
    </main>
  );
}
