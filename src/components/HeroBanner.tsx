export default function HeroBanner() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg,#6D28D9,#8B5CF6)",
        color: "white",
        padding: "24px",
        borderRadius: "16px",
        marginTop: "16px",
        textAlign: "center",
      }}
    >
      <h2>Bem-vindo ao KEOPS</h2>
      <p>O marketplace inteligente para comprar e vender.</p>

      <button
        style={{
          marginTop: "16px",
          padding: "12px 24px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Explorar Agora
      </button>
    </section>
  );
            }
