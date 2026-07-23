"use client";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        padding: "18px",
        background:
          "linear-gradient(180deg,#0b0716 0%,rgba(11,7,22,.85) 100%)",
        backdropFilter: "blur(22px)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              color: "#b388ff",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 3,
            }}
          >
            MARKETPLACE 2035
          </div>

          <h1
            style={{
              margin: 0,
              color: "#fff",
              fontSize: 34,
              fontWeight: 900,
            }}
          >
            KEOPS
          </h1>
        </div>

        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#7C3AED,#A855F7,#C084FC)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 24,
            boxShadow: "0 0 30px rgba(168,85,247,.6)",
          }}
        >
          🤖
        </div>
      </div>

      <div
        style={{
          marginTop: 18,
          borderRadius: 22,
          padding: 18,
          background:
            "linear-gradient(135deg,#6D28D9,#8B5CF6,#A855F7)",
          color: "#fff",
          boxShadow: "0 15px 40px rgba(124,58,237,.35)",
        }}
      >
        <div
          style={{
            fontSize: 13,
            opacity: .9,
          }}
        >
          Carteira KEOPS
        </div>

        <h2
          style={{
            marginTop: 8,
            marginBottom: 6,
            fontSize: 30,
          }}
        >
          R$ 2.540,85
        </h2>

        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 15,
          }}
        >
          <button
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 14,
              border: "none",
              background: "#fff",
              color: "#6D28D9",
              fontWeight: "bold",
            }}
          >
            PIX
          </button>

          <button
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,.25)",
              background: "transparent",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Cashback
          </button>
        </div>
      </div>

      <div
        style={{
          marginTop: 18,
          background: "#171324",
          borderRadius: 18,
          padding: "15px 18px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        🔍

        <input
          placeholder="Pesquisar produtos..."
          style={{
            flex: 1,
            border: "none",
            background: "transparent",
            color: "#fff",
            outline: "none",
            fontSize: 16,
          }}
        />

        🎙️
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 18,
        }}
      >
        {[
          ["❤️", "Favoritos"],
          ["🛒", "Carrinho"],
          ["🔔", "Alertas"],
          ["👤", "Perfil"],
        ].map(([icon, text]) => (
          <div
            key={text}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <div
              style={{
                width: 55,
                height: 55,
                borderRadius: 18,
                background: "#171324",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 24,
              }}
            >
              {icon}
            </div>

            <span
              style={{
                marginTop: 6,
                fontSize: 12,
                color: "#bdbdbd",
              }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </header>
  );
}
