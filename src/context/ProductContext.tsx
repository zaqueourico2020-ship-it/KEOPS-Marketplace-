"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ProductContextData {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const ProductContext = createContext<ProductContextData | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<string[]>([]);

  return (
    <ProductContext.Provider
      value={{
        images,
        setImages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct deve ser usado dentro de ProductProvider");
  }

  return context;
}
