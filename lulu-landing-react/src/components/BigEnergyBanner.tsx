import { useEffect, useRef } from "react";
import "./BigEnergyBanner.css";

const BigEnergyBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current || !imageRef.current) return;

      const rect = bannerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate parallax offset
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress =
          (windowHeight - rect.top) / (windowHeight + rect.height);
        const translateY = (scrollProgress - 0.5) * 100;
        imageRef.current.style.transform = `translateY(${translateY}px) scale(1.1)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={bannerRef} className="big-energy-banner">
      <div ref={imageRef} className="big-energy-banner-image">
        <img src="/images/big-energy.png" alt="Big Energy" />
      </div>
      <div className="big-energy-banner-content">
        <h2 className="big-energy-banner-title">Big Energy</h2>
        <a href="/big-energy" className="big-energy-banner-cta">
          <span className="cta-text">Shop Now</span>
        </a>
      </div>
    </section>
  );
};

export default BigEnergyBanner;
