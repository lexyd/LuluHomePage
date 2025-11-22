import { useState } from "react";
import "./PopularCategories.css";

const categories = {
  women: [
    { id: 1, name: "Shorts", image: "/images/shorts.png" },
    {
      id: 2,
      name: "Hoodies & Sweatshirts",
      image: "/images/hoodies-sweatshirts.png",
    },
    { id: 3, name: "Bags", image: "/images/bags.png" },
    { id: 4, name: "Pants", image: "/images/pants.png" },
    { id: 5, name: "Shirts", image: "/images/shirts.png" },
    { id: 6, name: "Coats & Jackets", image: "/images/coats-jackets.png" },
  ],
  men: [
    {
      id: 7,
      name: "Shorts",
      image: "/images/pace-breaker-linerless-short-7.png",
    },
    {
      id: 8,
      name: "Hoodies & Sweatshirts",
      image: "/images/heavyweight-fleece-pullover-tennis-club.png",
    },
    {
      id: 9,
      name: "Shirts",
      image: "/images/evolution-short-sleeve-polo-shirt.png",
    },
    {
      id: 10,
      name: "Pants",
      image: "/images/license-to-train-linerless-short-7.png",
    },
    { id: 11, name: "Joggers", image: "/images/pants.png" },
    { id: 12, name: "Shoes", image: "/images/shoes.png" },
  ],
};

const PopularCategories = () => {
  const [activeTab, setActiveTab] = useState<"women" | "men">("women");

  return (
    <section className="popular-categories-section">
      <div className="categories-container">
        <div className="categories-header">
          <h2>Popular categories</h2>
          <div className="tab-controls">
            <button
              className={`tab-button ${activeTab === "women" ? "active" : ""}`}
              onClick={() => setActiveTab("women")}
            >
              Women
            </button>
            <button
              className={`tab-button ${activeTab === "men" ? "active" : ""}`}
              onClick={() => setActiveTab("men")}
            >
              Men
            </button>
          </div>
        </div>
        <div className="categories-grid">
          {categories[activeTab].map((category) => (
            <a
              key={category.id}
              href={`/${activeTab}/${category.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="category-card"
            >
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <h3 className="category-name">{category.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
