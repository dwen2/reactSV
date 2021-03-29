import React from "react";
import IndicatorList from "./IndicatorList.js";
import "./IndicatorPage.css";

function Indicator() {
  return (
    <div>
      <div class="indicator_firstPart">
        <img
          id="aboutImage"
          src="images/data.svg"
          width="400"
          height="400"
          alt="Nepal Ministry of Health"
        ></img>
        <p class="indicator_midTitle">Indicators</p>
        <p>
          <span class="indicator_blueWords">Indicators</span> are various
          categories of{" "}
          <span class="indicator_blueWords">health statistics </span>
          throughout the nation of Nepal. They are presented here through
          different forms of{" "}
          <span class="indicator_blueWords">
            graphs, charts and visualizations
          </span>
          .
        </p>
      </div>

      <hr />

      <div class="indicator_firstPart">
        <p>
          All of indicators are separated into different categories, as shown
          below.
          <br />
          <br />
          <IndicatorList />
          {/* <IndicatorList /> */}
        </p>
      </div>
    </div>
  );
}

export default Indicator;
