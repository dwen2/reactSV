import React from "react";
import Carousel from "../../Carousel/MyCarousel";
// import logo from "../../logo.svg";

function Home() {
  return (
    <div className="App-body">
      <p className="midPara">
        <h1 className="midTitle">Nepal Health Stats</h1>
        Nepal Health Stats is a web application that tracks and presents the
        health indicators of the Nepalese population for the Nepal Ministry of
        Health in a simple, rich and interactive manner. All data is taken from
        officially-recognized sources.
      </p>

      <div className="App-Carousel">
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
