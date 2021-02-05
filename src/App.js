import "./App.css";
import { Route } from "react-router-dom";

import About from "./Pages/About/AboutPage";
import Home from "./Pages/Home/HomePage";
import MyNavbar from "./Navbar/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />      
      </header> */}

      <body>
        <MyNavbar />
        <Route path="/about" exact component={About} />
        <Route path="/" exact component={Home} />
      </body>

      <br></br>
    </div>
  );
}

export default App;
