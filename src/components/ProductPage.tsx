export default function ProductPage() {
  return (
    <section style={{ marginTop: 30 }}>

      <div
        style={{
          background: "#1e293b",
          borderRadius: 20,
          padding: 20,
          color: "white"
        }}
      >

        <div
          style={{
            height: 280,
            background: "#0f172a",
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 90
          }}
        >
          📱
        </div>

        <h1 style={{ marginTop: 20 }}>
          Smartphone Galaxy Premium
        </h1>

        <p>⭐⭐⭐⭐⭐ 4.9 (2.548 avaliações)</p>

        <h2
          style={{
            color: "#22c55e",
            fontSize: 36
          }}
        >
          R$ 1.299,90
        </h2>

        <p>ou 12x de R$108,32 sem juros</p>

        <p>
          Estoque disponível ✔
        </p>

        <button
          style={{
            width: "100%",
            padding: 18,
            background: "#6D28D9",
            color: "white",
            border: "none",
            borderRadius: 12,
            marginTop: 20,
            fontSize: 18,
            cursor: "pointer"
          }}
        >
          Comprar Agora
        </button>

        <button
          style={{
            width: "100%",
            padding: 18,
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 12,
            marginTop: 12,
            fontSize: 18,
            cursor: "pointer"
          }}
        >
          Adicionar ao Carrinho
        </button>

        <h2 style={{ marginTop: 30 }}>
          Descrição
        </h2>

        <p>
          Smartphone com tela AMOLED de 6.7", câmera de 108MP,
          processador Octa-Core, 256GB de armazenamento,
          12GB de RAM e bateria de longa duração.
        </p>

      </div>

    </section>
  );
        }
