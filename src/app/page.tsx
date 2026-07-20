import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Login from "../components/Login";

export default function Home() {
  return (
    <main>
      <Header />
      <SearchBar />
      <HeroBanner />
      <Categories />
      <FeaturedProducts />

      <div style={{ marginTop: "40px" }}>
        <Login />
      </div>
    </main>
  );
}
