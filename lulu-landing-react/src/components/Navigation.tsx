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
            <img
              src="/images/lululemon-logo.svg"
              alt="lululemon"
              width="120"
              height="33"
            />
          </a>
        </div>

        {/* Main Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <div className="nav-link-wrapper">
            <a href="/new" className="nav-link">
              New
            </a>
            <div className="nav-dropdown">
              <div className="dropdown-content">
                <p className="dropdown-placeholder">New dropdown content</p>
              </div>
            </div>
          </div>
          <div className="nav-link-wrapper">
            <a href="/women" className="nav-link">
              Women
            </a>
            <div className="nav-dropdown">
              <div className="dropdown-content">
                <p className="dropdown-placeholder">Women dropdown content</p>
              </div>
            </div>
          </div>
          <div className="nav-link-wrapper">
            <a href="/men" className="nav-link">
              Men
            </a>
            <div className="nav-dropdown">
              <div className="dropdown-content">
                <p className="dropdown-placeholder">Men dropdown content</p>
              </div>
            </div>
          </div>
          <div className="nav-link-wrapper">
            <a href="/accessories" className="nav-link">
              Accessories
            </a>
            <div className="nav-dropdown">
              <div className="dropdown-content">
                <p className="dropdown-placeholder">
                  Accessories dropdown content
                </p>
              </div>
            </div>
          </div>
          <div className="nav-link-wrapper">
            <a href="/activities" className="nav-link">
              Activities
            </a>
            <div className="nav-dropdown">
              <div className="dropdown-content">
                <p className="dropdown-placeholder">
                  Activities dropdown content
                </p>
              </div>
            </div>
          </div>
          <div className="nav-link-wrapper">
            <a href="/mothers-day" className="nav-link">
              Mother's Day
            </a>
            <div className="nav-dropdown">
              <div className="dropdown-content">
                <p className="dropdown-placeholder">
                  Mother's Day dropdown content
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="nav-actions">
          <div className="nav-search">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span>Search</span>
          </div>
          <button className="nav-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <button className="nav-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
              strokeWidth="2"
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
