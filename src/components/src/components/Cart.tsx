export default function Cart() {
  return (
    <section style={{ marginTop: 30 }}>

      <h2>🛒 Meu Carrinho</h2>

      <div
        style={{
          background: "#1e293b",
          borderRadius: 20,
          padding: 20,
          color: "white",
          marginTop: 20
        }}
      >

        <h3>📱 Smartphone Galaxy</h3>

        <p>Quantidade: 1</p>

        <p style={{ color: "#22c55e", fontSize: 26 }}>
          R$ 1.299,90
        </p>

        <hr style={{ margin: "20px 0" }} />

        <h2>Total</h2>

        <h1 style={{ color: "#22c55e" }}>
          R$ 1.299,90
        </h1>

        <button
          style={{
            width: "100%",
            marginTop: 20,
            padding: 18,
            background: "#6D28D9",
            color: "white",
            border: "none",
            borderRadius: 12,
            fontSize: 18
          }}
        >
          Finalizar Compra
        </button>

      </div>

    </section>
  );
}
