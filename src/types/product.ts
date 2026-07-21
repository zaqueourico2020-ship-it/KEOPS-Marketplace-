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

  stock: number;

  weight?: number;

  width?: number;

  height?: number;

  length?: number;

  featured: boolean;

  active: boolean;

  views: number;

  sales: number;

  rating: number;

  reviews: number;

  createdAt?: Date;

  updatedAt?: Date;
}
