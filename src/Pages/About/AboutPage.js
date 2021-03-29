import React from "react";
import "./AboutPage.css";

function About() {
  return (
    <div>
      <div class="about_firstPart">
        <img
          id="aboutImage"
          src="images/about.svg"
          width="400"
          height="400"
          alt="Nepal Ministry of Health"
        ></img>
        <p class="about_midTitle">About</p>
        <p>
          <span class="blueWords">Nepal Health Stats</span> is a web application
          that tracks and presents the{" "}
          <span class="blueWords">health indicators</span> of the Nepalese
          population for the Ministry of Health in a{" "}
          <span class="blueWords">simple, rich and interactive</span> manner.
          All data is taken from officially-recognized sources.
        </p>
      </div>

      <hr></hr>

      <div class="about_secondPart">
        <div class="about_secondPartPara">
          <p class="about_paraTitleLeft">Mission</p>
          <p>
            Our mission is two fold. First, we wish to make it much easier for
            the officials of the Ministry of Health in Nepal to{" "}
            <span class="blueWords">track and share data</span> within their own
            body much easier to do. We want them to have access to graphs and
            tables that will allow them to make good decisions to allow the
            Nepalese people to continue to grow and better their country going
            into the coming decade. Secondly, we want to make this{" "}
            <span class="blueWords">data available to the Nepalese public</span>{" "}
            so they can better hold their politicians accountable for their
            words and actions.
          </p>
        </div>

        <div class="about_secondPartPara">
          <p class="about_paraTitleRight">Sources</p>
          <p>
            All data contained on this website comes from{" "}
            <span class="blueWords">internal studies </span>
            conducted by the Nepalese Ministry of Health as well as recognized
            international bodies such as the United Nations.
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </p>
        </div>

        <div class="about_secondPartPara">
          <p class="about_paraTitleLeft">Applications</p>
          <p>
            This website is intended to be used internally by the Ministry of
            health as a central means of tracking and viewing their country’s{" "}
            <span class="blueWords">key health indicator</span> data . The
            website is accessible from anywhere so long as there is an internet
            connection and the website can easily be viewed from a mobile
            device. Furthermore, this data will also be available to the wider
            public. This will help provide the international community with
            information on how to best help Nepal and its people as well as
            assist the people of Nepal{" "}
            <span class="blueWords">
              make educated and empowered decisions{" "}
            </span>
            when they cast their votes. We also hope it will serve as an
            educational tool for the Nepalese people.
          </p>
        </div>

        <div class="about_secondPartPara">
          <p class="about_paraTitleRight">Prospects</p>
          <p>
            It is our hope that this website will{" "}
            <span class="blueWords">continue to grow</span>, perhaps through
            further projects in partnership with BYU. We hope that one day we
            will see Provincial data brought in even better analysis of the key
            indicators in nepal. We also hope that data will be displayed in
            <span class="blueWords"> more than just numerical forms</span> to
            facilitate the use of other graph types to further enhance the
            usability of the data stored here.
          </p>
        </div>
      </div>

      <hr></hr>

      <div class="about_thirdPart">
        <p class="about_thirdTitle">Management & Partners</p>
        <p>
          This site is hosted and managed by{" "}
          <span class="about_boldWords">Nepal Ministry of Health</span>, in
          partnership with Apartment of Information Technology and Cybersecurity
          at <span class="about_boldWords">Brigham Young University</span>. It
          has been developed exclusively by Dezhang Wen, Austin Barkdull, Paul
          Kratz, Haoran Shu and Samuel H. De La O, under the overall guidance of
          Aatish Neupane, Derek Hansen and the rest of the BYU IT&C faculty.
        </p>
      </div>

      <br></br>
    </div>
  );
}

export default About;
