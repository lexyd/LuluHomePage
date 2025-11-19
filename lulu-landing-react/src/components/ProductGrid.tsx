import "./ProductGrid.css";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Pace Breaker Short 7"',
    image: "/images/pace-breaker-linerless-short-7.png",
    price: "$68",
    category: "Shorts",
  },
  {
    id: 2,
    name: "License To Train Tank Top",
    image: "/images/license-to-train-tank-top.png",
    price: "$58",
    category: "Tops",
  },
  {
    id: 3,
    name: 'Align™ High-Rise Pant 28"',
    image: "/images/lululemon-align-cami-strap-dress.png",
    price: "$98",
    category: "Pants",
  },
];

const ProductGrid = () => {
  return (
    <section className="product-grid-section">
      <div className="section-header-wrapper">
        <div className="section-header">
          <div className="section-header-content">
            <h2>Trending Now</h2>
            <p>Our most popular picks of the season</p>
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
              <button className="quick-add">Quick Add</button>
            </div>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
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
