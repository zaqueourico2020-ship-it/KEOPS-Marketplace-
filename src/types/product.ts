export interface ProductVariant {
  color: string;
  size: string;
  price: number;
  stock: number;
}

export interface Product {
  id?: string;

  sellerId: string;

  name: string;

  slug: string;

  description: string;

  shortDescription?: string;

  categoryId: string;

  brand?: string;

  sku?: string;

  barcode?: string;

  images: string[];

  video?: string;

  price: number;

  promotionalPrice?: number;

  cost?: number;

  stock: number;

  minimumStock?: number;

  weight?: number;

  width?: number;

  height?: number;

  length?: number;

  metaTitle?: string;

  metaDescription?: string;

  keywords?: string;

  variants?: ProductVariant[];

  featured: boolean;

  active: boolean;

  views: number;

  sales: number;

  rating: number;

  reviews: number;

  createdAt?: Date;

  updatedAt?: Date;
}
