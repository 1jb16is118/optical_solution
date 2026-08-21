import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const services = [
  { icon: "◉", title: "Optical Design", text: "Custom optical system design for precision, performance and manufacturability." },
  { icon: "◈", title: "Optical Consulting", text: "Expert guidance for optical products, technology choices and engineering challenges." },
  { icon: "◎", title: "Product Development", text: "From concept to prototype, we help transform optical ideas into practical products." }
];

const products = [
  { name: "Precision Lens Systems", tag: "OPTICS" },
  { name: "Imaging Solutions", tag: "IMAGING" },
  { name: "Custom Optical Modules", tag: "CUSTOM" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
  <div className="nav-container">

    {/* Logo */}
    <button
      className="brand"
      onClick={() => goTo("home")}
      aria-label="Go to home"
    >
      <span className="logo-icon">
        <span className="logo-circle"></span>
        <span className="logo-dot"></span>
      </span>

      <span className="logo-text">
        OPTI<span>VISION</span>
        <small>OPTICAL CONSULTING</small>
      </span>
    </button>


    {/* Desktop Navigation */}
    <nav className={menuOpen ? "nav-links open" : "nav-links"}>
      {["Home", "About", "Services", "Products"].map((item) => (
        <button
          key={item}
          onClick={() =>
            goTo(item === "Home" ? "home" : item.toLowerCase())
          }
        >
          {item}
        </button>
      ))}

      <button
        className="nav-contact-btn"
        onClick={() => goTo("contact")}
      >
        Contact Us
        <span>→</span>
      </button>
    </nav>


    {/* Mobile Menu */}
    <button
      className="menu-btn"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation menu"
    >
      <span className={menuOpen ? "hamburger active" : "hamburger"}>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>

  </div>
</header>
      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">PRECISION • INNOVATION • CLARITY</p>
            <h1>Engineering the<br/><span>Future of Light.</span></h1>
            <p className="hero-text">
              Optical design and consulting solutions that turn complex ideas into high-performance products.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => goTo("contact")}>Start a Project →</button>
              <button className="text-btn" onClick={() => goTo("services")}>Explore Services</button>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="lens">
              <div className="lens-inner"></div>
            </div>
            <div className="light-beam"></div>
            <span className="visual-label">OPTICAL<br/>PRECISION</span>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <p className="eyebrow">ABOUT US</p>
            <h2>Clear thinking.<br/>Precise solutions.</h2>
          </div>
          <div className="about-copy">
            <p>We help businesses solve optical engineering challenges with a practical combination of design expertise, technical analysis and product-focused consulting.</p>
            <p>Whether you are developing a new optical product or improving an existing system, our approach is built around measurable performance and real-world results.</p>
            <div className="stats">
              <div><strong>01</strong><span>Focused<br/>Expertise</span></div>
              <div><strong>02</strong><span>Custom<br/>Solutions</span></div>
              <div><strong>03</strong><span>End-to-End<br/>Support</span></div>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>Services built around<br/><span>your vision.</span></h2>
          <div className="cards">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span className="card-number">0{index + 1}</span>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <button onClick={() => goTo("contact")}>Discuss your needs →</button>
              </article>
            ))}
          </div>
        </section>

        <section id="products" className="section products">
          <div className="products-top">
            <div>
              <p className="eyebrow">OUR PRODUCTS</p>
              <h2>Designed for<br/><span>performance.</span></h2>
            </div>
            <p>Explore our range of optical solutions. As your business grows, this section can easily connect to a product API or backend database.</p>
          </div>
          <div className="product-grid">
            {products.map((product, i) => (
              <article className={`product-card p${i + 1}`} key={product.name}>
                <span>{product.tag}</span>
                <div className="product-shape"></div>
                <h3>{product.name}</h3>
                <button onClick={() => goTo("contact")}>Learn More →</button>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div>
            <p className="eyebrow">LET'S WORK TOGETHER</p>
            <h2>Have an optical<br/><span>challenge?</span></h2>
            <p>Tell us about your project and we will help you find the right solution.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your message has been received."); }}>
            <div className="form-row">
              <input placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <input placeholder="Company / Organization" />
            <textarea rows="5" placeholder="Tell us about your project" required></textarea>
            <button className="primary-btn" type="submit">Send Inquiry →</button>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark">◉</span> OPTI<span>VISION</span></div>
        <p>© 2026 OptiVision. Optical Design & Consulting.</p>
        <button onClick={() => goTo("home")}>Back to top ↑</button>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
