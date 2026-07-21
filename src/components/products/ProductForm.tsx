"use client";

import { useState } from "react";

export default function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    price: "",
    promotionalPrice: "",
    stock: "",
    sku: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(product);

    alert("Produto pronto para ser salvo!");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 rounded-2xl p-6 border border-gray-800 space-y-5"
    >
      <h2 className="text-2xl font-bold text-white">
        Cadastro de Produto
      </h2>

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Nome do produto"
        name="name"
        value={product.name}
        onChange={handleChange}
      />

      <textarea
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Descrição"
        rows={5}
        name="description"
        value={product.description}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Marca"
        name="brand"
        value={product.brand}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Categoria"
        name="category"
        value={product.category}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Preço"
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Preço promocional"
        type="number"
        name="promotionalPrice"
        value={product.promotionalPrice}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="Estoque"
        type="number"
        name="stock"
        value={product.stock}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        placeholder="SKU"
        name="sku"
        value={product.sku}
        onChange={handleChange}
      />

      <button
        className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl py-3 font-bold text-white"
        type="submit"
      >
        Salvar Produto
      </button>
    </form>
  );
}
