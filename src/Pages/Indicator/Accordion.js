import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { Accordion, Card } from "react-bootstrap";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Category One
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item action as={Link} to="/indicator/VOne">
                    Indicator One
                  </ListGroup.Item>
                  <ListGroup.Item action as={Link} to="/about">
                    Indicator Two
                  </ListGroup.Item>
                  <ListGroup.Item action as={Link} to="/about">
                    Indicator Three
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Category Two
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Indicator One</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
