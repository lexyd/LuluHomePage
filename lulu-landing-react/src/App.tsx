import "./App.css";
import Navigation from "./components/Navigation";
import HeroCarousel from "./components/HeroCarousel";
import ProductGrid from "./components/ProductGrid";
import ParallaxBanner from "./components/ParallaxBanner";
import ProductOption from "./components/ProductOption";
import BigEnergyBanner from "./components/BigEnergyBanner";
import PopularCategories from "./components/PopularCategories";
import IncomingDrops from "./components/IncomingDrops";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <HeroCarousel />
        <ProductGrid />
        <ParallaxBanner />
        <ProductOption />
        <BigEnergyBanner />
        <PopularCategories />
        <IncomingDrops />
      </main>
    </div>
  );
}

export default App;
