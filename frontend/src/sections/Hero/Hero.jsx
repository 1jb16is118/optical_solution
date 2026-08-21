import "./Hero.css";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-tag">
            PRECISION • INNOVATION • CLARITY
          </p>

          <h1>
            Engineering the
            <br />
            <span>Future of Light.</span>
          </h1>

          <p className="hero-description">
            Advanced optical design and consulting solutions
            for businesses building high-performance products
            and precision optical systems.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-primary-button"
              onClick={() => scrollTo("contact")}
            >
              Start a Project <span>→</span>
            </button>

            <button
              className="hero-secondary-button"
              onClick={() => scrollTo("services")}
            >
              Explore Services
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>01</strong>
              <span>
                Optical
                <br />
                Expertise
              </span>
            </div>

            <div>
              <strong>02</strong>
              <span>
                Custom
                <br />
                Solutions
              </span>
            </div>

            <div>
              <strong>03</strong>
              <span>
                Product
                <br />
                Focus
              </span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-grid" />
          <div className="orb orb-large" />
          <div className="orb orb-medium" />

          <div className="optical-lens">
            <div className="lens-glow" />
            <div className="lens-core" />
          </div>

          <div className="laser-beam" />

          <div className="visual-caption">
            <span>01 / OPTICAL SYSTEM</span>
            <strong>
              PRECISION
              <br />
              ENGINEERING
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// import "./Hero.css";

// function Hero() {
//   const goToContact = () => {
//     document.getElementById("contact")
//       ?.scrollIntoView({
//         behavior: "smooth",
//       });
//   };

//   const goToServices = () => {
//     document.getElementById("services")
//       ?.scrollIntoView({
//         behavior: "smooth",
//       });
//   };

//   return (
//     <section id="home" className="hero">

//       <div className="hero-container">

//         <div className="hero-content">

//           <p className="hero-tag">
//             PRECISION • INNOVATION • CLARITY
//           </p>

//           <h1>
//             Engineering the
//             <br />

//             <span>
//               Future of Light.
//             </span>
//           </h1>

//           <p className="hero-description">
//             Advanced optical design and consulting
//             solutions for businesses building
//             high-performance products.
//           </p>

//           <div className="hero-buttons">

//             <button
//               className="hero-primary-button"
//               onClick={goToContact}
//             >
//               Start a Project
//               <span>→</span>
//             </button>

//             <button
//               className="hero-secondary-button"
//               onClick={goToServices}
//             >
//               Explore Services
//             </button>

//           </div>

//           <div className="hero-stats">
//             <div>
//               <strong>01</strong>
//               <span>
//                 Optical
//                 <br />
//                 Expertise
//               </span>
//             </div>

//             <div>
//               <strong>02</strong>
//               <span>
//                 Custom
//                 <br />
//                 Solutions
//               </span>
//             </div>

//             <div>
//               <strong>03</strong>
//               <span>
//                 Product
//                 <br />
//                 Focus
//               </span>
//             </div>
//           </div>

//         </div>

//         <div className="hero-visual">

//           <div className="visual-grid" />

//           <div className="orb orb-large" />
//           <div className="orb orb-medium" />

//           <div className="optical-lens">
//             <div className="lens-glow" />
//             <div className="lens-core" />
//           </div>

//           <div className="laser-beam" />

//           <div className="visual-caption">
//             <span>01 / OPTICAL SYSTEM</span>
//             <strong>PRECISION<br />ENGINEERING</strong>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;