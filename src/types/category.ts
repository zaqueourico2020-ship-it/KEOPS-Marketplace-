export interface Category {
  id?: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string | null;
  level: number;
  order: number;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
