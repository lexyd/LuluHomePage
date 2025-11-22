import { useEffect, useRef, useState } from "react";
import "./ProductGrid.css";

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Women's Tennis Collection",
    image: "/images/tennis-3up-women.jpg",
  },
  {
    id: 2,
    name: "Men's Tennis Collection",
    image: "/images/tennis-3up-men.jpg",
  },
  {
    id: 3,
    name: "Tennis Accessories",
    image: "/images/tennis-3up-accessories.jpg",
  },
];

const ProductGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / window.innerHeight)
      );

      // Apply parallax transform
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const translateY = (1 - scrollProgress) * 100;
        sectionRef.current.style.transform = `translateY(${translateY}px)`;
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
      // Wait for animation to complete (420ms) + brief pause (200ms)
      timer = setTimeout(() => {
        setShowText(true);
      }, 620);
    } else if (!isExpanded && showText) {
      // On hover out, trigger closing animation first
      setIsClosing(true);
      // Wait for closing animation (420ms) before collapsing
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
    <section ref={sectionRef} className="product-grid-section">
      <div className="section-header-wrapper">
        <div className="section-header">
          <div className="section-header-content">
            <h2>Trending Now</h2>
          </div>
          <div className="header-actions">
            <a href="/new" className="section-cta">
              <span className="cta-text">Shop All New</span>
            </a>
            <div className="expandable-shop-button">
              <button
                className={`shop-icon-button ${isHovered ? "hovered" : ""} ${
                  showText || isExpanded ? "show-text" : ""
                } ${isExpanded ? "expanded" : ""} ${
                  isClosing ? "closing" : ""
                }`}
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
                  <span className="expanded-text">Shop Products</span>
                )}
              </button>
              <div
                className={`product-cards-dropdown ${isExpanded ? "open" : ""}`}
              >
                <div className="dropdown-card">
                  <img
                    src="/images/tennis-3up-women.jpg"
                    alt="Women's Tennis"
                  />
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
        </div>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-wrapper">
        <div className="view-all">
          <a href="#" className="btn">
            <span className="btn-text">Shop All Products</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
