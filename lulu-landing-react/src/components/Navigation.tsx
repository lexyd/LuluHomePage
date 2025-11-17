import { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <a href="/">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
              <path d="M29.4 0L10.6 40h8.1L37.5 0h-8.1zM10.6 0L2.5 20 10.6 40h8.1L10.6 0z" />
            </svg>
          </a>
        </div>

        {/* Main Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="/women" className="nav-link">
            Women
          </a>
          <a href="/men" className="nav-link">
            Men
          </a>
          <a href="/accessories" className="nav-link">
            Accessories
          </a>
          <a href="/activities" className="nav-link">
            Activities
          </a>
          <a href="/featured" className="nav-link">
            Featured
          </a>
        </div>

        {/* Right Side Actions */}
        <div className="nav-actions">
          <button className="nav-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button className="nav-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <button className="nav-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
          <button
            className="nav-icon mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
