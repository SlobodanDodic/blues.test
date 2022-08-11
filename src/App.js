import "./styles.css";
import Topbar from "./components/Topbar";
import Homepage from "./components/Homepage";
import Middle from "./components/Middle";
import Services from "./components/Services";
import References from "./components/References";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Homepage />
      <Middle />
      <Services />
      <References />
      <About />
    </div>
  );
}

export default App;
