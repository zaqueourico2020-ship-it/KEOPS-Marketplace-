"use client";

export default function Profile() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "25px",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 15px rgba(0,0,0,.1)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="https://placehold.co/120x120"
          alt="Foto do usuário"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginBottom: "15px",
          }}
        />

        <h2>Seu Nome</h2>
        <p style={{ color: "#666" }}>usuario@email.com</p>
      </div>

      <hr style={{ margin: "25px 0" }} />

      <button style={buttonStyle}>👤 Editar Perfil</button>

      <button style={buttonStyle}>📦 Meus Pedidos</button>

      <button style={buttonStyle}>❤️ Favoritos</button>

      <button style={buttonStyle}>💳 Carteira KEOPS</button>

      <button style={buttonStyle}>🏪 Minha Loja</button>

      <button
        style={{
          ...buttonStyle,
          background: "#dc2626",
          color: "#fff",
        }}
      >
        Sair
      </button>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  background: "#f8f8f8",
  cursor: "pointer",
  fontWeight: "bold",
};
