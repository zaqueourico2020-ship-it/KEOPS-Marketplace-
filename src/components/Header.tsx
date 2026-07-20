export default function Header() {
  return (
    <header
      style={{
        background: "rgba(20,20,30,0.8)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        KEOPS
      </h1>

      <button
        style={{
          background: "#7c3aed",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          padding: "10px 14px",
          cursor: "pointer",
        }}
      >
        🔍
      </button>
    </header>
  );
}
