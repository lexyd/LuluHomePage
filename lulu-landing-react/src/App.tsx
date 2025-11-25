import "./App.css";
import Navigation from "./components/Navigation";
import HeroCarousel from "./components/HeroCarousel";
import ProductGrid from "./components/ProductGrid";
import ParallaxBanner from "./components/ParallaxBanner";
import ProductOption from "./components/ProductOption";
import BigEnergyBanner from "./components/BigEnergyBanner";
import PopularCategories from "./components/PopularCategories";
import IncomingDrops from "./components/IncomingDrops";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <HeroCarousel />
        <ProductOption />
        <ParallaxBanner />
        <IncomingDrops />
        <ProductGrid />
        <BigEnergyBanner />
        <PopularCategories />
      </main>
      <Footer />
    </div>
  );
}

export default App;
