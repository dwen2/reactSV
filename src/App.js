import "./App.css";
import { Route } from "react-router-dom";

import About from "./Pages/About/AboutPage";
import Home from "./Pages/Home/HomePage";
import MyNavbar from "./Navbar/MyNavbar";
import Indicator from "./Pages/Indicator/IndicatorPage";
import Footer from "./Footer/FooterPage";
import Contact from "./Pages/Contact/ContactPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <body>
        <MyNavbar />
        <Route path="/about" exact component={About} />
        <Route path="/indicator" exact component={Indicator} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/" exact component={Home} />
        <Footer />
      </body>
    </div>
  );
}

export default App;
