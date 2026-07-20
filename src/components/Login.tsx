export default function Login() {
  return (
    <div
      style={{
        maxWidth: "400px",
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
          marginBottom: "25px",
          color: "#5b21b6"
        }}
      >
        Entrar no KEOPS
      </h2>

      <input
        type="email"
        placeholder="E-mail"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      <input
        type="password"
        placeholder="Senha"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

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
        Entrar
      </button>

      <p
        style={{
          marginTop: "20px",
          textAlign: "center",
          color: "#666"
        }}
      >
        Ainda não possui conta?
      </p>

      <button
        style={{
          width: "100%",
          padding: "12px",
          background: "transparent",
          color: "#6d28d9",
          border: "2px solid #6d28d9",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Criar conta
      </button>
    </div>
  );
}
