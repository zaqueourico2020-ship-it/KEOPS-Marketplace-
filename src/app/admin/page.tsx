export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-8">
          Dashboard KEOPS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-gray-400">Produtos</h2>
            <p className="text-4xl font-bold text-white mt-3">0</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-gray-400">Pedidos</h2>
            <p className="text-4xl font-bold text-white mt-3">0</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-gray-400">Vendedores</h2>
            <p className="text-4xl font-bold text-white mt-3">0</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-gray-400">Faturamento</h2>
            <p className="text-4xl font-bold text-green-400 mt-3">
              R$ 0,00
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
