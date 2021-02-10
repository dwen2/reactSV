import React from "react";
import "./AboutPage.css";

function About() {
  return (
    <div>
      <div class="firstPart">
        <p class="midTitle">About</p>
        <p>
          <span class="midParaFirstWords">Nepal Health Stats</span> is a web
          application that tracks and presents the{" "}
          <span class="midParaFirstWords">health indicators</span> of the
          Nepalese population for the Ministry of Health in a{" "}
          <span class="midParaFirstWords">simple, rich and interactive</span>{" "}
          manner. All data is taken from officially-recognised sources.
        </p>
      </div>

      <hr></hr>

      <div class="secondPart">
        <div class="secondPartPara">
          <p class="paraTitleLeft">Mission</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div class="secondPartPara">
          <p class="paraTitleRight">Sources</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla ut morbi tincidunt augue. Arcu risus quis varius quam
            quisque id diam. Quis vel eros donec ac odio. Malesuada proin libero
            nunc consequat interdum varius sit amet mattis. Gravida cum sociis
            natoque penatibus. Elementum tempus egestas sed sed risus pretium.
            Donec pretium vulputate sapien nec sagittis aliquam malesuada
            bibendum. Natoque penatibus et magnis dis parturient.
          </p>
        </div>

        <div class="secondPartPara">
          <p class="paraTitleLeft">Applications</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla ut morbi tincidunt augue. Arcu risus quis varius quam
            quisque id diam. Quis vel eros donec ac odio. Malesuada proin libero
            nunc consequat interdum varius sit amet mattis. Gravida cum sociis
            natoque penatibus. Elementum tempus egestas sed sed risus pretium.
            Donec pretium vulputate sapien nec sagittis aliquam malesuada
            bibendum. Natoque penatibus et magnis dis parturient.
          </p>
        </div>

        <div class="secondPartPara">
          <p class="paraTitleRight">Prospects</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla ut morbi tincidunt augue. Arcu risus quis varius quam
            quisque id diam. Quis vel eros donec ac odio. Malesuada proin libero
            nunc consequat interdum varius sit amet mattis. Gravida cum sociis
            natoque penatibus. Elementum tempus egestas sed sed risus pretium.
            Donec pretium vulputate sapien nec sagittis aliquam malesuada
            bibendum. Natoque penatibus et magnis dis parturient.
          </p>
        </div>
      </div>

      <hr></hr>

      <div class="thirdPart">
        <p class="thirdTitle">Management & Partners</p>
        <p>
          This site is hosted and managed by{" "}
          <span class="boldWords">Nepal Ministry of Health</span>, in
          partnership with Apartment of Information Technology and Cybersecurity
          at <span class="boldWords">Brigham Young University</span>. It has
          been developed exclusively by Dezhang Wen, Austin Barkdull, Paul
          Kratz, Haoran Shu and Samuel H. De La O, under the overall guidance of
          Aatish Neupane, Derek Hansen and the rest of the BYU IT&C faculty.
        </p>
      </div>

      <br></br>
      <div class="thirdPartImages"></div>
    </div>
  );
}

export default About;
