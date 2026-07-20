import "./globals.css";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
