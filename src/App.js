import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import ProgressBar from "react-scroll-progress-bar";
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
      <ProgressBar bgcolor="#00a6ca" />
      <ScrollToTop smooth />

      <Topbar />

      <div className="astro-bkg">
        <div className="rays">
          <Homepage dataFadeRight="slide-right" />
          <div className="whiteSquare"></div>
          <Middle data="flip-down" />
          <div className="golman"></div>
          <Services dataFade="fade-up" dataZoom="zoom-in" />
        </div>
      </div>

      <div className="box2">
        <div className="astro-bkg2">
          <References />
          <About />
        </div>
      </div>

      <Blog />

      <div className="summit-bkg">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
