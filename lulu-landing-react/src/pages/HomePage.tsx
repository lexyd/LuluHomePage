import Footer from "../components/Footer";
import FutureNote from "../components/FutureNote";
import HeroCarousel from "../components/HeroCarousel";
import HomeIntro from "../components/HomeIntro";
import IncomingDrops from "../components/IncomingDrops";
import Navigation from "../components/Navigation";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <main>
        <HomeIntro />
        <HeroCarousel />
        <IncomingDrops />
        <FutureNote />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
