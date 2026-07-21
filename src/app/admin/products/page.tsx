export default function AdminProductsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">
          Painel de Produtos
        </h1>

        <p className="text-gray-400 mb-8">
          Gerencie todos os produtos do KEOPS Marketplace.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-gray-400">Produtos</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-gray-400">Em estoque</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-gray-400">Promoções</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-gray-400">Sem estoque</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

        </div>

        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-semibold">
              Lista de Produtos
            </h2>

            <button className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl font-semibold transition">
              + Novo Produto
            </button>

          </div>

          <div className="text-center text-gray-500 py-20">
            Nenhum produto cadastrado.
          </div>

        </div>

      </div>
    </main>
  );
}
