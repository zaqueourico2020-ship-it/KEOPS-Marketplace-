export default function FeaturedProducts() {
  const produtos = [
    {
      nome: "Smartphone Galaxy",
      preco: "R$ 1.299,90",
      imagem: "📱",
      nota: "⭐ 4.8"
    },
    {
      nome: "Notebook Gamer",
      preco: "R$ 3.999,90",
      imagem: "💻",
      nota: "⭐ 4.9"
    },
    {
      nome: "Tênis Esportivo",
      preco: "R$ 249,90",
      imagem: "👟",
      nota: "⭐ 4.7"
    },
    {
      nome: "Smart TV 50\"",
      preco: "R$ 2.199,90",
      imagem: "📺",
      nota: "⭐ 4.9"
    }
  ];

  return (
    <section style={{ marginTop: 30 }}>
      <h2 style={{ marginBottom: 15 }}>Produtos em Destaque</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: 20
        }}
      >
        {produtos.map((produto) => (
          <div
            key={produto.nome}
            style={{
              background: "#1e293b",
              borderRadius: 16,
              padding: 20,
              textAlign: "center"
            }}
          >
            <div style={{ fontSize: 60 }}>{produto.imagem}</div>

            <h3>{produto.nome}</h3>

            <p>{produto.nota}</p>

            <h2 style={{ color: "#22c55e" }}>
              {produto.preco}
            </h2>

            <button
              style={{
                marginTop: 12,
                background: "#6D28D9",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: 10,
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
        }
