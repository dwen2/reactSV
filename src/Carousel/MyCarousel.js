import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MyCarousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import V1 from "../Pages/Indicator/V1.js";
import V2 from "../Pages/Indicator/V2.js";
import V3 from "../Pages/Indicator/V3.js";

export default class MyCarousel extends React.Component {
  render() {
    return (
      <div className="myContainer">
        {/* <Carousel>
          <Carousel.Item>
            <div className="carouselVis">
              <V1 />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carouselVis">
              <V2 />
            </div>
            <br />
            <br />
            <br />
          </Carousel.Item>
          <Carousel.Item>
            <div className="carouselVis">
              <V3 />
            </div>
            <Carousel.Caption>
              <h3>Third slide label</h3>              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
        <Carousel fade>
          <Carousel.Item>
            <V1 />
            <Carousel.Caption className="captions">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <V2 />

            <Carousel.Caption className="captions">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <V3 />

            <Carousel.Caption className="captions">
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
