export default function Register() {
  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "16px",
        background: "#ffffff",
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#6d28d9",
          marginBottom: "25px"
        }}
      >
        Criar Conta
      </h2>

      <input type="text" placeholder="Nome completo" style={inputStyle} />
      <input type="email" placeholder="E-mail" style={inputStyle} />
      <input type="tel" placeholder="Telefone" style={inputStyle} />
      <input type="password" placeholder="Senha" style={inputStyle} />
      <input type="password" placeholder="Confirmar senha" style={inputStyle} />

      <button
        style={{
          width: "100%",
          padding: "14px",
          background: "#6d28d9",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Criar Conta
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};
