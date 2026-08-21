import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="section-container about-container">
        <div className="about-content">
          <span className="section-tag">
            ABOUT OPTIVISION
          </span>

          <h2 className="section-title">
            Clarity through
            <span> engineering.</span>
          </h2>

          <p className="about-description">
            OPTIVISION is an optical design and consulting
            company focused on solving complex engineering
            challenges with precision, innovation, and
            practical expertise.
          </p>

          <p className="about-description">
            We work with businesses from early concepts
            through optical design, development, and
            product-focused solutions.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <strong>01</strong>
              <span>Design Approach</span>
            </div>

            <div className="about-stat">
              <strong>02</strong>
              <span>Engineering Focus</span>
            </div>

            <div className="about-stat">
              <strong>03</strong>
              <span>Client Solutions</span>
            </div>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-lens-large" />
          <div className="about-lens-small" />

          <span className="about-label">
            ENGINEERED FOR PRECISION
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;