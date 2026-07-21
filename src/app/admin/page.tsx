"use client";

import { useEffect, useState } from "react";
import { getDashboardStats } from "@/services/dashboardService";

interface DashboardStats {
  products: number;
  sellers: number;
  orders: number;
  revenue: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    products: 0,
    sellers: 0,
    orders: 0,
    revenue: 0,
  });

  useEffect(() => {
    async function loadStats() {
      const data = await getDashboardStats();
      setStats(data);
    }

    loadStats();
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          Dashboard KEOPS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-gray-400">Produtos</h2>
            <p className="text-4xl font-bold text-white mt-3">
              {stats.products}
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-gray-400">Pedidos</h2>
            <p className="text-4xl font-bold text-white mt-3">
              {stats.orders}
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-gray-400">Vendedores</h2>
            <p className="text-4xl font-bold text-white mt-3">
              {stats.sellers}
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h2 className="text-gray-400">Faturamento</h2>
            <p className="text-4xl font-bold text-green-400 mt-3">
              {stats.revenue.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
