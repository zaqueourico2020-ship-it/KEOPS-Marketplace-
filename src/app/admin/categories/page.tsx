export default function CategoriesAdminPage() {
  return (
    <main
      style={{
        padding: "24px",
        color: "white",
      }}
    >
      <h1>Gerenciar Categorias</h1>

      <p>
        Aqui será possível criar, editar e organizar todas as categorias do
        KEOPS Marketplace.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          borderRadius: "12px",
          border: "none",
          background: "#7c3aed",
          color: "white",
          cursor: "pointer",
        }}
      >
        Nova Categoria
      </button>
    </main>
  );
}
