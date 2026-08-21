import "./Services.css";
import { services } from "../../data/services";

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-container">
        <div className="services-header">
          <div>
            <span className="section-tag">
              WHAT WE DO
            </span>

            <h2 className="section-title">
              Optical expertise.
              <br />
              <span>Real-world solutions.</span>
            </h2>
          </div>

          <p className="section-description">
            We provide specialized consulting and engineering
            services to help transform optical concepts into
            practical solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className="service-card"
              key={service.id}
            >
              <span className="service-number">
                0{index + 1}
              </span>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button type="button">
                Learn More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;