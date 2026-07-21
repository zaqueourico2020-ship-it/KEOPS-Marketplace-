"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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
        <div className="text-xl font-bold">
          Carregando produto...
        </div>
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

        <div className="mb-6 text-sm text-gray-500">

          <Link href="/">
            Início
          </Link>

          {" / "}

          <Link href="/search">
            {product.category}
          </Link>

          {" / "}

          {product.name}

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

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

          <div>

            <p className="text-green-600 font-semibold">
              Em estoque
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              {product.name}
            </h1>

            <p className="mt-4 text-5xl font-bold text-green-600">
              R$ {Number(product.price).toFixed(2)}
            </p>

            <p className="mt-2 text-gray-500">
              ou 12x sem juros
            </p>

            <div className="mt-8">

              <label className="font-semibold">
                Quantidade
              </label>

              <div className="mt-3 flex items-center gap-3">

                <button
                  onClick={() =>
                    setQuantity(Math.max(1, quantity - 1))
                  }
                  className="h-10 w-10 rounded border"
                >
                  -
                </button>

                <span className="text-xl">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="h-10 w-10 rounded border"
                >
                  +
                </button>

              </div>

            </div>

            <div className="mt-8">

              <AddToCartButton
                product={{
                  ...product,
                  quantity
                }}
              />

            </div> {/* Botões de ação */}

<div className="mt-6 flex gap-3">

  <button
    className="flex-1 rounded-xl bg-purple-600 py-4 text-lg font-bold text-white transition hover:bg-purple-700"
  >
    Comprar Agora
  </button>

  <button
    className="rounded-xl border bg-white px-5 text-2xl hover:bg-gray-100"
  >
    ❤️
  </button>

  <button
    className="rounded-xl border bg-white px-5 text-2xl hover:bg-gray-100"
  >
    🔗
  </button>

</div>

{/* Parcelamento */}

<div className="mt-8 rounded-2xl bg-white p-6 shadow">

  <h2 className="text-xl font-bold">
    Formas de pagamento
  </h2>

  <div className="mt-5 space-y-3">

    <div className="flex justify-between">
      <span>Pix</span>
      <strong className="text-green-600">
        R$ {(product.price * 0.95).toFixed(2)}
      </strong>
    </div>

    <div className="flex justify-between">
      <span>Cartão</span>
      <strong>
        12x de R$ {(product.price / 12).toFixed(2)}
      </strong>
    </div>

    <div className="flex justify-between">
      <span>Boleto</span>
      <strong>
        R$ {Number(product.price).toFixed(2)}
      </strong>
    </div>

  </div>

</div>

{/* Frete */}

<div className="mt-8 rounded-2xl bg-white p-6 shadow">

  <h2 className="font-bold text-xl">
    Entrega
  </h2>

  <div className="mt-5 flex gap-3">

    <input
      placeholder="Digite seu CEP"
      className="flex-1 rounded-xl border p-3 outline-none"
    />

    <button
      className="rounded-xl bg-blue-600 px-6 text-white hover:bg-blue-700"
    >
      Calcular
    </button>

  </div>

  <div className="mt-5 rounded-xl bg-green-50 p-4">

    <p className="font-semibold text-green-700">
      🚚 Frete Grátis
    </p>

    <p className="text-sm text-gray-600">
      Entrega estimada entre 2 e 5 dias úteis.
    </p>

  </div>

</div>

{/* Loja */}

<div className="mt-8 rounded-2xl bg-white p-6 shadow">

  <div className="flex items-center justify-between">

    <div>

      <h2 className="font-bold text-xl">
        Loja Oficial KEOPS
      </h2>

      <p className="mt-2 text-gray-500">
        ⭐ 99% avaliações positivas
      </p>

      <p className="text-gray-500">
        Mais de 5.000 vendas realizadas
      </p>

    </div>

    <button
      className="rounded-xl border px-5 py-3 hover:bg-gray-100"
    >
      Ver Loja
    </button>

  </div>

</div>
            

          </div>

        </div>

      </div>

    </main>
  );
}
