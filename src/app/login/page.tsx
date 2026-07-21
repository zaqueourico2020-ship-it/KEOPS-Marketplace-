"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/authService";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await login(email, password);
      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 p-6">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-white mb-2">
          Entrar no KEOPS
        </h1>

        <p className="text-gray-400 mb-8">
          Faça login para acessar o painel.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block text-gray-300 mb-2">
              E-mail
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-gray-800 border border-gray-700 px-4 py-3 text-white outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Senha
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl bg-gray-800 border border-gray-700 px-4 py-3 text-white outline-none focus:border-purple-500"
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 rounded-xl p-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-purple-600 hover:bg-purple-700 transition py-3 text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

        </form>

      </div>
    </main>
  );
}
