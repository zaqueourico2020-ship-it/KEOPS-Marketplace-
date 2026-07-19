export default function Categories() {
  const categorias = [
    "📱 Celulares",
    "💻 Informática",
    "👕 Moda",
    "🏠 Casa",
    "🎮 Games",
    "🚗 Automotivo",
    "💄 Beleza",
    "🐶 Pets"
  ];

  return (
    <section style={{ marginTop: 30 }}>
      <h2 style={{ marginBottom: 15 }}>Categorias</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))",
          gap: 12
        }}
      >
        {categorias.map((cat) => (
          <div
            key={cat}
            style={{
              background: "#1e293b",
              padding: 18,
              borderRadius: 12,
              textAlign: "center",
              cursor: "pointer"
            }}
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
        }
