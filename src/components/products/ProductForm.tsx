"use client";

import { FormEvent } from "react";
import { createProduct } from "@/services/productService";
import { useProduct } from "@/context/ProductContext";

export default function ProductForm() {
  const { product, setProduct } = useProduct();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]:
        name === "price" ||
        name === "promotionalPrice" ||
        name === "cost" ||
        name === "stock" ||
        name === "minimumStock"
          ? Number(value)
          : value,
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      await createProduct({
        sellerId: "admin",
        name: product.name,
        slug:
          product.slug ||
          product.name.toLowerCase().replace(/\s+/g, "-"),
        description: product.description,
        shortDescription: "",
        categoryId: product.category,
        brand: product.brand,
        sku: product.sku,
        barcode: product.barcode,
        images: product.images,
        video: "",
        price: product.price,
        promotionalPrice: product.promotionalPrice,
        stock: product.stock,
        featured: product.featured,
        active: product.active,
        views: 0,
        sales: 0,
        rating: 0,
        reviews: 0,
      });

      alert("Produto cadastrado com sucesso!");

      setProduct({
        name: "",
        description: "",
        brand: "",
        category: "",

        price: 0,
        promotionalPrice: 0,
        cost: 0,

        stock: 0,
        minimumStock: 0,
        sku: "",
        barcode: "",

        images: [],

        weight: 0,
        width: 0,
        height: 0,
        length: 0,

        slug: "",
        metaTitle: "",
        metaDescription: "",
        keywords: "",

        featured: false,
        active: true,
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar produto.");
    }
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
        type="number"
        placeholder="Preço"
        name="price"
        value={product.price}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        placeholder="Preço promocional"
        name="promotionalPrice"
        value={product.promotionalPrice}
        onChange={handleChange}
      />

      <input
        className="w-full p-3 rounded-xl bg-gray-800 text-white"
        type="number"
        placeholder="Estoque"
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
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 rounded-xl py-3 font-bold text-white"
      >
        Salvar Produto
      </button>
    </form>
  );
}
