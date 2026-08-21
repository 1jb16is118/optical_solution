import { useState } from "react";
import "./Header.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Products", id: "products" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <button
          className="brand"
          onClick={() => goTo("home")}
          aria-label="Go to home"
        >
          <span className="brand-icon">
            <span className="brand-lens" />
            <span className="brand-dot" />
          </span>

          <span className="brand-content">
            <strong>
              OPTI<span>VISION</span>
            </strong>
            <small>OPTICAL CONSULTING</small>
          </span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
            >
              {item.label}
            </button>
          ))}

          <button
            className="contact-nav-button"
            onClick={() => goTo("contact")}
          >
            Contact Us <span>→</span>
          </button>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${menuOpen ? "active" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;