import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Products from "./sections/Products/Products";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;