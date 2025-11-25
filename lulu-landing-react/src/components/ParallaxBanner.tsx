import { useEffect, useRef, useState } from "react";
import "./ParallaxBanner.css";

const ParallaxBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isHovered) {
      setIsClosing(false);
      timer = setTimeout(() => {
        setShowText(true);
      }, 620);
    } else if (!isExpanded && showText) {
      setIsClosing(true);
      timer = setTimeout(() => {
        setShowText(false);
        setIsClosing(false);
      }, 420);
    } else if (!isExpanded && !showText) {
      setIsClosing(false);
    }
    return () => clearTimeout(timer);
  }, [isHovered, isExpanded, showText]);

  return (
    <section ref={bannerRef} className="parallax-banner">
      <div ref={imageRef} className="parallax-banner-image">
        <img src="/images/smash-hits.png" alt="Smash Hits" />
      </div>
      <div className="parallax-banner-content">
        <h2 className="parallax-banner-title">Smash Hits</h2>
        <div className="expandable-shop-button">
          <button
            className={`shop-icon-button ${isHovered ? "hovered" : ""} ${
              showText || isExpanded ? "show-text" : ""
            } ${isExpanded ? "expanded" : ""} ${isClosing ? "closing" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
            </svg>
            {(showText || isExpanded) && (
              <span className="expanded-text">Shop Now</span>
            )}
          </button>
          <div className={`product-cards-dropdown ${isExpanded ? "open" : ""}`}>
            <div className="dropdown-card">
              <img src="/images/tennis-3up-women.jpg" alt="Women's Tennis" />
              <span>Women's Tennis</span>
            </div>
            <div className="dropdown-card">
              <img
                src="/images/tennis-3up-accessories.jpg"
                alt="Tennis Accessories"
              />
              <span>Accessories</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxBanner;
