import "./globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    default: "KEOPS Marketplace",
    template: "%s | KEOPS",
  },
  description: "Marketplace inteligente, moderno e seguro.",
  applicationName: "KEOPS Marketplace",
  keywords: [
    "marketplace",
    "compras",
    "vendas",
    "keops",
    "ecommerce",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-gray-950">
        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
