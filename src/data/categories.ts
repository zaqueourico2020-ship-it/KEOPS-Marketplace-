export interface CategorySeed {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  level: number;
  order: number;
  active: boolean;
}

export const categories: CategorySeed[] = [
  {
    id: "eletronicos",
    name: "Eletrônicos",
    slug: "eletronicos",
    parentId: null,
    level: 1,
    order: 1,
    active: true,
  },

  {
    id: "celulares",
    name: "Celulares",
    slug: "celulares",
    parentId: "eletronicos",
    level: 2,
    order: 1,
    active: true,
  },

  {
    id: "smartphones",
    name: "Smartphones",
    slug: "smartphones",
    parentId: "celulares",
    level: 3,
    order: 1,
    active: true,
  },

  {
    id: "iphone",
    name: "iPhone",
    slug: "iphone",
    parentId: "smartphones",
    level: 4,
    order: 1,
    active: true,
  },

  {
    id: "android",
    name: "Android",
    slug: "android",
    parentId: "smartphones",
    level: 4,
    order: 2,
    active: true,
  },
];
