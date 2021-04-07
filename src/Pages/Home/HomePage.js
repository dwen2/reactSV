import logo from "../../logo.svg";
import React, { Component } from "react";
import MyCarousel from "../../Carousel/MyCarousel";
import Grid from "Grid/Grid";
import V1 from "../Indicator/V1.js";

function Home() {
  return (
    <div>
      <p className="home_topPara">
        <img id="homeImage" src="images/homepage.svg" alt="homepage_icon" />
        <h1 id="home_title">Nepal Health Stats</h1>
        <div id="home_topPara_text">
          Nepal Health Stats is a web application that tracks and presents the
          <span className="blueWords"> health indicators</span> of the Nepalese
          population for the Nepal Ministry of Health in a{" "}
          <span className="blueWords">simple, rich and interactive</span>{" "}
          manner. All data is taken from{" "}
          <span className="blueWords">officially-recognized sources</span>.
        </div>
      </p>

      <hr />

      {/* <h1 className="titles">Indicator Categories</h1> */}

      <div className="home_carousel">
        <MyCarousel />
      </div>

      {/* <h1 className="titles">Featured Dataset</h1> */}

      <br />
      <div></div>
    </div>
  );
}

export default Home;
