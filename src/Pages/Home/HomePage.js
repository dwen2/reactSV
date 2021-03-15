import logo from "../../logo.svg";
import React from "react";
import Carousel from "../../Carousel/MyCarousel";

function Home() {
  return (
    <div className="App-body">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p className="midPara">
        <h1 className="midTitle">Nepal Health Stats</h1>
        Nepal Health Stats is a web application that tracks and presents the
        health indicators of the Nepalese population for the Nepal Ministry of
        Health in a simple, rich and interactive manner. All data is taken from
        officially-recognized sources.
      </p>

      <div className="AppCarousel">
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
