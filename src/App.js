import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import "./styles.css";
import Topbar from "./components/Topbar";
import Homepage from "./components/Homepage";
import Middle from "./components/Middle";
import Services from "./components/Services";
import References from "./components/References";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <div className="App">
      <ScrollToTop smooth />

      <Topbar />
      <div className="astro-bkg">
        <Homepage />
        <Middle data="flip-down" />
      </div>

      <div className="whiteSquare"></div>
      {/* <div className="golman-cup"></div> */}

      <Services data="fade-up" />

      <div className="box2">
        <div className="astro-bkg2">
          <References data="zoom-in" />
          <About />
        </div>
      </div>

      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
