import "./globals.css";
export const metadata = {
  title: "Keops",
  description: "Marketplace Inteligente",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
  }
