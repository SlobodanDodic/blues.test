import "./styles.css";
import Topbar from "./components/Topbar";
import Homepage from "./components/Homepage";
import Middle from "./components/Middle";
import Services from "./components/Services";
import References from "./components/References";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Homepage />
      <Middle />
      <Services />

      <div className="astro-bkg">
        <References />
        <About />
      </div>

      <Blog />
      <Contact />
    </div>
  );
}

export default App;
