import "./App.css";
import Navigation from "./components/Navigation";
import HeroCarousel from "./components/HeroCarousel";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <HeroCarousel />
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;
