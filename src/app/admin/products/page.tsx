import { ProductProvider } from "@/context/ProductContext";
import ProductWizard from "@/components/products/ProductWizard";
import ProductList from "@/components/products/ProductList";

export default function AdminProductsPage() {
  return (
    <ProductProvider>
      <main className="min-h-screen bg-gray-950 p-8">
        <div className="max-w-7xl mx-auto space-y-8">

          <div>
            <h1 className="text-4xl font-bold text-white">
              Painel de Produtos
            </h1>

            <p className="text-gray-400 mt-2">
              Gerencie todos os produtos do KEOPS Marketplace.
            </p>
          </div>

          <ProductWizard />

          <ProductList />

        </div>
      </main>
    </ProductProvider>
  );
}
