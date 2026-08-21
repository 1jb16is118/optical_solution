import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div className="footer-brand">
            OPTI<span>VISION</span>
          </div>

          <p className="footer-text">
            © {new Date().getFullYear()} OPTIVISION.
            Optical Design & Consulting.
          </p>
        </div>

        <button
          className="footer-button"
          onClick={scrollToTop}
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;