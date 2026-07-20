export default function BottomNavigation() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "70px",
        background: "#ffffff",
        borderTop: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0 -3px 10px rgba(0,0,0,0.08)",
        zIndex: 1000,
      }}
    >
      <button style={buttonStyle}>🏠<br />Início</button>
      <button style={buttonStyle}>🔍<br />Buscar</button>
      <button style={buttonStyle}>❤️<br />Favoritos</button>
      <button style={buttonStyle}>🛒<br />Carrinho</button>
      <button style={buttonStyle}>👤<br />Conta</button>
    </nav>
  );
}

const buttonStyle = {
  background: "transparent",
  border: "none",
  fontSize: "13px",
  cursor: "pointer",
  color: "#6d28d9",
  fontWeight: "bold",
};
