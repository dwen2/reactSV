import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MyCarousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import V1 from "../Pages/Indicator/V1.js";
import V2 from "../Pages/Indicator/V2.js";

export default class MyCarousel extends React.Component {
  render() {
    return (
      <div className="myContainer">
        <Carousel>
          <Carousel.Item>
            <div className="carouselVis">
              <V1 />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carouselVis">
              <V2 />
            </div>
            <Carousel.Caption>
              <h3>this is two</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselImages"
              src="images/imageThree.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
