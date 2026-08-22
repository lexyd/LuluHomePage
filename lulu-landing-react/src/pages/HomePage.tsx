import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";
import IncomingDrops from "../components/IncomingDrops";
import Navigation from "../components/Navigation";
import ParallaxBanner from "../components/ParallaxBanner";
import PopularCategories from "../components/PopularCategories";
import ProductOption from "../components/ProductOption";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroCarousel />
        <ProductOption />
        <ParallaxBanner />
        <IncomingDrops />
        <PopularCategories />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
