import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "16px",
      }}
    >
      <Header />
      <SearchBar />
      <HeroBanner />
    </main>
  );
}
