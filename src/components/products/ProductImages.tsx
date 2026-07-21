"use client";

import { uploadProductImage } from "@/services/storageService";
import { useProduct } from "@/context/ProductContext";

export default function ProductImages() {
  const { product, setProduct } = useProduct();

  async function handleImage(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const files = event.target.files;

    if (!files) return;

    try {
      const uploadedImages: string[] = [];

      for (const file of Array.from(files)) {
        const url = await uploadProductImage(file);
        uploadedImages.push(url);
      }

      setProduct((prev) => ({
        ...prev,
        images: [...prev.images, ...uploadedImages],
      }));
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar imagem.");
    }
  }

  function removeImage(index: number) {
    setProduct((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Imagens do Produto
      </h2>

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImage}
        className="mb-6 text-white"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {product.images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Imagem ${index + 1}`}
              className="rounded-xl h-40 w-full object-cover border border-gray-700"
            />

            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white w-7 h-7 rounded-full"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
