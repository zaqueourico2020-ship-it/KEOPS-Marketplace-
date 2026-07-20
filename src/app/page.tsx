import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Login from "../components/Login";
import BottomNavigation from "../components/BottomNavigation";

export default function Home() {
  return (
    <main
      style={{
        paddingBottom: "90px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Header />
      <SearchBar />
      <HeroBanner />
      <Categories />
      <FeaturedProducts />

      <div style={{ marginTop: "40px" }}>
        <Login />
      </div>

      <BottomNavigation />
    </main>
  );
}
