"use client";

import { useState } from "react";
import { uploadProductImage } from "@/services/storageService";

export default function ProductImages() {
  const [images, setImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  async function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (!files) return;

    setUploading(true);

    try {
      const uploadedImages: string[] = [];

      for (const file of Array.from(files)) {
        const imageUrl = await uploadProductImage(file);
        uploadedImages.push(imageUrl);
      }

      setImages((prev) => [...prev, ...uploadedImages]);
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar imagem.");
    } finally {
      setUploading(false);
    }
  }

  function removeImage(index: number) {
    setImages((prev) => prev.filter((_, i) => i !== index));
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
        disabled={uploading}
        className="mb-6 text-white"
      />

      {uploading && (
        <p className="text-purple-400 mb-4">
          Enviando imagens...
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Imagem ${index + 1}`}
              className="rounded-xl h-40 w-full object-cover border border-gray-700"
            />

            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-7 h-7"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
