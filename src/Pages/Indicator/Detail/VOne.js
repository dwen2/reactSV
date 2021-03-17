import React from "react";
import {useParams} from "react-router-dom"; 
import V1 from "../V1.js";

function VOne() {
  let { id } = useParams();

  return (
    <div>
      <div class="firstPart">
        <p class="midTitle">Indicators {id}</p>
        <p>
          <span class="midParaFirstWords">Indicator {id}</span> is
          /add description here/
        </p>
      </div>

      <hr />
      <div id="vis">
        <V1 />
      </div>
    </div>
  );
}

export default VOne;
