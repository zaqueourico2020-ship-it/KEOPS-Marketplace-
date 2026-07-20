export default function HeroBanner() {
  return (
    <section
      style={{
        margin: "20px",
        borderRadius: "24px",
        padding: "40px 24px",
        background:
          "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
        color: "#fff",
        textAlign: "center",
        boxShadow: "0 20px 40px rgba(124,58,237,.35)",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "12px",
          fontWeight: "700",
        }}
      >
        Bem-vindo ao KEOPS Marketplace
      </h2>

      <p
        style={{
          fontSize: "18px",
          opacity: 0.9,
          marginBottom: "24px",
        }}
      >
        Compre, venda e descubra milhares de produtos em um só lugar.
      </p>

      <button
        style={{
          background: "#fff",
          color: "#7c3aed",
          border: "none",
          padding: "14px 28px",
          borderRadius: "14px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Explorar Produtos
      </button>
    </section>
  );
}
