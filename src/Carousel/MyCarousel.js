import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./MyCarousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MyCarousel extends React.Component {
  render() {
      return (          
            <Carousel>
                <Carousel.Item>
                <img
                    // className="d-block w-100"
                    src="images/imageOne.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    // className="d-block w-100"
                    src="images/imageTwo.jpg"
                    alt="Second slide"
                />
            
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    // className="d-block w-100"
                    src="images/imageThree.jpg"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
