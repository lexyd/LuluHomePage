import { useEffect, useRef } from "react";
import "./ParallaxBanner.css";

const ParallaxBanner = () => {
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
    <section ref={bannerRef} className="parallax-banner">
      <div ref={imageRef} className="parallax-banner-image">
        <img src="/images/smash-hits.png" alt="Smash Hits" />
      </div>
      <div className="parallax-banner-content">
        <h2 className="parallax-banner-title">Smash Hits</h2>
        <a href="/smash-hits" className="parallax-banner-cta">
          <span className="cta-text">Shop Now</span>
        </a>
      </div>
    </section>
  );
};

export default ParallaxBanner;
