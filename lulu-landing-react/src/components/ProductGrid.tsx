import { useEffect, useRef } from "react";
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

  return (
    <section ref={sectionRef} className="product-grid-section">
      <div className="section-header-wrapper">
        <div className="section-header">
          <div className="section-header-content">
            <h2>Trending Now</h2>
          </div>
          <a href="/new" className="section-cta">
            <span className="cta-text">Shop All New</span>
          </a>
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
            Shop All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
