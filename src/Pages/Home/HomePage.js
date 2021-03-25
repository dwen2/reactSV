import logo from "../../logo.svg";
import React from "react";
import Carousel from "../../Carousel/MyCarousel";
import "./HomePage.css";

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

      <hr />

      <h1>
        Indicator Categories
      </h1>

      <div>
        <div class="card bg-primary text-white text-center p-3">
          <blockquote class="blockquote mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Home;
