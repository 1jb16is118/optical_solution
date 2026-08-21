import "./Products.css";

function Products() {
  return (
    <section id="products" className="products">
      <div className="section-container">
        <span className="section-tag">OUR PRODUCTS</span>

        <h2 className="section-title">
          Optical products built for
          <span> precision.</span>
        </h2>

        <p className="section-description">
          Explore our range of optical solutions designed for performance,
          accuracy, and modern engineering applications.
        </p>

        <div className="products-grid">
          <article className="product-card">
            <div className="product-visual lens-product">
              <div className="product-lens" />
            </div>

            <div className="product-content">
              <span className="product-number">01</span>

              <h3>Precision Lenses</h3>

              <p>
                High-performance optical lenses designed for precision
                applications.
              </p>

              <button type="button">
                Learn More <span>→</span>
              </button>
            </div>
          </article>

          <article className="product-card">
            <div className="product-visual sensor-product">
              <div className="sensor-shape" />
            </div>

            <div className="product-content">
              <span className="product-number">02</span>

              <h3>Optical Sensors</h3>

              <p>
                Advanced sensing solutions for accurate optical measurement
                and analysis.
              </p>

              <button type="button">
                Learn More <span>→</span>
              </button>
            </div>
          </article>

          <article className="product-card">
            <div className="product-visual system-product">
              <div className="system-shape">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="product-content">
              <span className="product-number">03</span>

              <h3>Optical Systems</h3>

              <p>
                Custom-engineered optical systems developed for complex
                business and industrial requirements.
              </p>

              <button type="button">
                Learn More <span>→</span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Products;


// import "./Products.css";
// import { products } from "../../data/products";

// function Products() {
//   return (
//     <section id="products" className="products">
//       <div className="section-container">
//         <span className="section-tag">
//           OUR PRODUCTS
//         </span>

//         <h2 className="section-title">
//           Designed for
//           <span> precision.</span>
//         </h2>

//         <p className="section-description">
//           Explore optical products and systems developed for
//           high performance, accuracy, and modern engineering
//           applications.
//         </p>

//         <div className="products-grid">
//           {products.map((product, index) => (
//             <article
//               className={`product-card product-${index + 1}`}
//               key={product.id}
//             >
//               <div className="product-visual">
//                 <div className="product-shape">
//                   <span />
//                   <span />
//                   <span />
//                 </div>
//               </div>

//               <div className="product-content">
//                 <span className="product-number">
//                   0{index + 1}
//                 </span>

//                 <h3>{product.title}</h3>

//                 <p>{product.description}</p>

//                 <button type="button">
//                   Learn More <span>→</span>
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Products;