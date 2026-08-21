import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Static website for now.
    // Later you can connect FastAPI or another backend here.
    console.log("Contact Form Data:", formData);

    alert("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container contact-container">
        <div className="contact-content">
          <span className="section-tag">
            LET'S TALK
          </span>

          <h2 className="section-title">
            Have an optical
            <br />
            challenge?
            <span> Let's solve it.</span>
          </h2>

          <p className="contact-description">
            Tell us about your project, product idea, or
            engineering challenge. Our team will help you
            explore the right optical solution.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span>EMAIL</span>
              <strong>shashank@ssoptitechsolutions.com</strong>
            </div>

            <div className="contact-detail">
              <span>MOBILE</span>
              <strong>+91 7860193863</strong>
            </div>

            <div className="contact-detail">
              <span>LOCATION</span>
              <strong>India</strong>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="contact-form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-row">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;