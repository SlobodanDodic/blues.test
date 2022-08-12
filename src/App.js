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
  return (
    <div className="App">
      <Topbar />
      <div className="astro-bkg">
        <Homepage />
        <Middle />
      </div>
      <Services />
      <References />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
