import { ProductProvider } from "@/context/ProductContext";

import ProductForm from "@/components/products/ProductForm";
import ProductImages from "@/components/products/ProductImages";
import ProductPricing from "@/components/products/ProductPricing";
import ProductInventory from "@/components/products/ProductInventory";
import ProductShipping from "@/components/products/ProductShipping";
import ProductSeo from "@/components/products/ProductSeo";
import ProductVariants from "@/components/products/ProductVariants";
import ProductStatus from "@/components/products/ProductStatus";
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

          <ProductImages />

          <ProductForm />

          <ProductPricing />

          <ProductInventory />

          <ProductShipping />

          <ProductVariants />

          <ProductSeo />

          <ProductStatus />

          <ProductList />

        </div>
      </main>
    </ProductProvider>
  );
}
