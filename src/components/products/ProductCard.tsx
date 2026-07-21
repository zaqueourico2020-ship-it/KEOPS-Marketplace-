interface ProductCardProps {
  name: string;
  price: number;
  image?: string;
}

export default function ProductCard({
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-600 transition-all duration-300">

      <div className="h-52 bg-gray-800 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500">
            Sem imagem
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold text-lg line-clamp-2">
          {name}
        </h3>

        <p className="text-2xl font-bold text-green-400 mt-3">
          R$ {price.toFixed(2)}
        </p>

        <button
          className="mt-5 w-full bg-purple-600 hover:bg-purple-700 rounded-xl py-2 text-white font-semibold"
        >
          Editar Produto
        </button>
      </div>
    </div>
  );
}
