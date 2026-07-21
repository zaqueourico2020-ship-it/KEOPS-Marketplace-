"use client";

import { useState } from "react";

export default function ProductSeo() {
  const [seo, setSeo] = useState({
    slug: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setSeo({
      ...seo,
      [e.target.name]: e.target.value,
    });
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
        placeholder="Slug (ex: iphone-16-pro-256gb)"
        value={seo.slug}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="text"
        name="metaTitle"
        placeholder="Título para SEO"
        value={seo.metaTitle}
        onChange={handleChange}
      />

      <textarea
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        rows={4}
        name="metaDescription"
        placeholder="Meta descrição"
        value={seo.metaDescription}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="text"
        name="keywords"
        placeholder="Palavras-chave (separadas por vírgula)"
        value={seo.keywords}
        onChange={handleChange}
      />
    </div>
  );
}
