"use client";

import { useProduct } from "@/context/ProductContext";

export default function ProductSeo() {
  const { product, setProduct } = useProduct();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">
      <h2 className="text-2xl font-bold text-white">
        SEO do Produto
      </h2>

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="text"
        name="slug"
        placeholder="Slug"
        value={product.slug}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="text"
        name="metaTitle"
        placeholder="Título SEO"
        value={product.metaTitle}
        onChange={handleChange}
      />

      <textarea
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        rows={4}
        name="metaDescription"
        placeholder="Meta descrição"
        value={product.metaDescription}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="text"
        name="keywords"
        placeholder="Palavras-chave"
        value={product.keywords}
        onChange={handleChange}
      />
    </div>
  );
}
