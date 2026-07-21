import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Produto de Exemplo",
    price: 199.90,
    image: "",
  },
];

export default function ProductList() {
  return (
    <div className="mt-8">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          Produtos
        </h2>

        <span className="text-gray-400">
          {products.length} produto(s)
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}

      </div>

    </div>
  );
      }
