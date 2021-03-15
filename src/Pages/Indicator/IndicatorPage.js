import React from "react";
import V1 from "./V1";
import "./IndicatorPage.css"; 

function Indicator() {
  return (
    <div>
      <div class="firstPart">
        <p class="midTitle">Indicators</p>
        <p>
          <span class="midParaFirstWords">Indicators</span> are
          various categories of <span class="midParaFirstWords">health statistics </span> 
          throughout the nation of Nepal. They are presented here through different
          forms of <span class="midParaFirstWords">graphs, charts and visualizations</span>.           
        </p>
      </div>

      <hr />
      <div id="vis">
        <V1 />
      </div>      
    </div>    
  );
}

export default Indicator;
