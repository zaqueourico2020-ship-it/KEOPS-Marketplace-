"use client";

import { useState } from "react";

export default function ProductImages() {
  const [images, setImages] = useState<string[]>([]);

  function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (!files) return;

    const previews = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setImages(previews);
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
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${index + 1}`}
            className="rounded-xl h-40 w-full object-cover border border-gray-700"
          />
        ))}
      </div>

    </div>
  );
}
