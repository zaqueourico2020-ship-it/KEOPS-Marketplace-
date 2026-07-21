export interface CategorySeed {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  image?: string;
  parentId: string | null;
  level: number;
  order: number;
  active: boolean;
  featured?: boolean;
}

export const categories: CategorySeed[] = [
  {
    id: "eletronicos",
    name: "Eletrônicos",
    slug: "eletronicos",
    description: "Produtos eletrônicos em geral",
    icon: "smartphone",
    image: "",
    parentId: null,
    level: 1,
    order: 1,
    active: true,
    featured: true,
  },

  {
    id: "celulares",
    name: "Celulares",
    slug: "celulares",
    description: "Celulares e smartphones",
    icon: "smartphone",
    image: "",
    parentId: "eletronicos",
    level: 2,
    order: 1,
    active: true,
    featured: true,
  },

  {
    id: "smartphones",
    name: "Smartphones",
    slug: "smartphones",
    description: "Smartphones Android e iPhone",
    icon: "smartphone",
    image: "",
    parentId: "celulares",
    level: 3,
    order: 1,
    active: true,
    featured: true,
  },

  {
    id: "iphone",
    name: "iPhone",
    slug: "iphone",
    description: "Todos os modelos de iPhone",
    icon: "apple",
    image: "",
    parentId: "smartphones",
    level: 4,
    order: 1,
    active: true,
    featured: false,
  },

  {
    id: "android",
    name: "Android",
    slug: "android",
    description: "Smartphones Android",
    icon: "android",
    image: "",
    parentId: "smartphones",
    level: 4,
    order: 2,
    active: true,
    featured: false,
  },
];
