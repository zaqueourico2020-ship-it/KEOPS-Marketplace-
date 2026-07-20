"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavigation() {
  const pathname = usePathname();

  const items = [
    { href: "/home", icon: "🏠", label: "Início" },
    { href: "/search", icon: "🔍", label: "Buscar" },
    { href: "/favorites", icon: "❤️", label: "Favoritos" },
    { href: "/cart", icon: "🛒", label: "Carrinho" },
    { href: "/profile", icon: "👤", label: "Conta" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "70px",
        background: "#fff",
        borderTop: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0 -2px 10px rgba(0,0,0,.08)",
        zIndex: 999,
      }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          style={{
            textDecoration: "none",
            color: pathname === item.href ? "#6d28d9" : "#666",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          <span style={{ fontSize: "22px" }}>{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
