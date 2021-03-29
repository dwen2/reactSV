import logo from "../../logo.svg";
import React from "react";
import Carousel from "../../Carousel/MyCarousel";
import Grid from "Grid/Grid";

function Home() {
  return (
    <div>
      <p className="home_topPara">
        <h1 id="home_title">Nepal Health Stats</h1>
        Nepal Health Stats is a web application that tracks and presents the
        health indicators of the Nepalese population for the Nepal Ministry of
        Health in a simple, rich and interactive manner. All data is taken from
        officially-recognized sources.
      </p>

      {/* <hr /> */}

      <h1 className="titles">Indicator Categories</h1>

      <div className="home_grid">
        <Grid />
      </div>

      <hr />

      <h1 className="titles">Featured Dataset</h1>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div></div>
    </div>
  );
}

export default Home;
