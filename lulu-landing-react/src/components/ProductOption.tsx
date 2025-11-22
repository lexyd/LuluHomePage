import { useEffect, useRef, useState } from "react";
import "./ProductOption.css";

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Court Rival Track Jacket Perforated",
    image: "/images/court-rival-track-jacket-perforated.png",
  },
  {
    id: 2,
    name: 'Court Rival High-Rise Short 3"',
    image: "/images/court-rival-high-rise-short-3.png",
  },
  {
    id: 3,
    name: "Racket Bag 19L",
    image: "/images/racket-bag-19l.png",
  },
  {
    id: 4,
    name: "Lightweight Tennis Tank Top",
    image: "/images/lightweight-tennis-tank-top-medium-support.png",
  },
  {
    id: 5,
    name: "Varsity High-Rise Pleated Tennis Skirt",
    image: "/images/varsity-high-rise-pleated-tennis-skirt.png",
  },
];

const ProductOption = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
    const newScrollLeft =
      direction === "left"
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="product-option-section">
      <div className="section-header-wrapper">
        <div className="section-header">
          <div className="section-header-content">
            <h2>Leylah Fernandez approved</h2>
          </div>
          <div className="carousel-controls">
            <button
              className={`carousel-arrow ${!canScrollLeft ? "disabled" : ""}`}
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className={`carousel-arrow ${!canScrollRight ? "disabled" : ""}`}
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div ref={scrollContainerRef} className="product-carousel">
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
    </section>
  );
};

export default ProductOption;
