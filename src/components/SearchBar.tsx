export default function SearchBar() {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Pesquisar produtos, lojas ou categorias..."
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,.1)",
          background: "rgba(255,255,255,.05)",
          color: "#fff",
          fontSize: "16px",
          outline: "none",
        }}
      />
    </div>
  );
}
