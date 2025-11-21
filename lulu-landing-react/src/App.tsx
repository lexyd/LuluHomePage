import "./App.css";
import Navigation from "./components/Navigation";
import HeroCarousel from "./components/HeroCarousel";
import ProductGrid from "./components/ProductGrid";
import ParallaxBanner from "./components/ParallaxBanner";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <HeroCarousel />
        <ProductGrid />
        <ParallaxBanner />
      </main>
    </div>
  );
}

export default App;
