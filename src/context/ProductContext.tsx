"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface ProductData {
  name: string;
  description: string;
  brand: string;
  category: string;

  price: number;
  promotionalPrice: number;
  cost: number;

  stock: number;
  minimumStock: number;
  sku: string;
  barcode: string;

  images: string[];

  weight: number;
  width: number;
  height: number;
  length: number;

  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;

  featured: boolean;
  active: boolean;
}

interface ProductContextType {
  product: ProductData;
  setProduct: React.Dispatch<React.SetStateAction<ProductData>>;
}

const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export function ProductProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [product, setProduct] = useState<ProductData>({
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

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProduct deve ser usado dentro do ProductProvider."
    );
  }

  return context;
}
