import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Grid.css";

export default class Grid extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={4}>
            <div
              class="card bg-primary text-white text-center p-3"
              id="cardOne"
            >
              <blockquote class="blockquote mb-0">
                <h3>1. Health Cost</h3>
                <br />
                <img
                  // className="d-block w-100"
                  src="images/health_cost.svg"
                  alt="Second slide"
                />
              </blockquote>
            </div>
          </Col>
          <Col md={4}>
            <div class="card bg-primary text-white text-center p-3">
              <blockquote class="blockquote mb-0">
                <h3>2. Health Accessibility</h3>
                <br />
                <img
                  // className="d-block w-100"
                  src="images/health_equipment.svg"
                  alt="Second slide"
                />
              </blockquote>
            </div>
          </Col>
          <Col md={4}>
            <div class="card bg-primary text-white text-center p-3">
              <blockquote class="blockquote mb-0">
                <h3>3. Children Health</h3>
                <br />
                <img
                  // className="d-block w-100"
                  src="images/health_cost.svg"
                  alt="Second slide"
                />
              </blockquote>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <div class="card bg-primary text-white text-center p-3">
              <blockquote class="blockquote mb-0">
                <h3>4. Adult Health</h3>
                <br />
                <img
                  // className="d-block w-100"
                  src="images/health_cost.svg"
                  alt="Second slide"
                />
              </blockquote>
            </div>
          </Col>
          <Col md={4}>
            <div class="card bg-primary text-white text-center p-3">
              <blockquote class="blockquote mb-0">
                <h3>5. Medical Opportunity</h3>
                <br />
                <img
                  // className="d-block w-100"
                  src="images/health_cost.svg"
                  alt="Second slide"
                />
              </blockquote>
            </div>
          </Col>
          <Col md={4}>
            <div class="card bg-primary text-white text-center p-3">
              <blockquote class="blockquote mb-0">
                <h3>6. Mortality </h3>
                <br />
                <img
                  // className="d-block w-100"
                  src="images/health_cost.svg"
                  alt="Second slide"
                />
              </blockquote>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
