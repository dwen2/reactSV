import React from "react";
import IndicatorList from "./IndicatorList.js";
import "./IndicatorPage.css";

function Indicator() {
  return (
    <div>
      <div class="firstPart">
        <p class="midTitle">Indicators</p>
        <p>
          <span class="midParaFirstWords">Indicators</span> are various
          categories of{" "}
          <span class="midParaFirstWords">health statistics </span>
          throughout the nation of Nepal. They are presented here through
          different forms of{" "}
          <span class="midParaFirstWords">
            graphs, charts and visualizations
          </span>
          .
        </p>
      </div>

      <hr />

      <div class="firstPart">
        <p>
          All of indicators are separated into different categories, as shown
          below.
          <br />
          <br />
          <IndicatorList />
        </p>
      </div>
    </div>
  );
}

export default Indicator;
