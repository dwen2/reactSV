import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { Accordion, Card } from "react-bootstrap";
import Api from "api";

function IndicatorList(props) {
  const [indicators, setIndicators] = useState([]);

  useEffect(() => {
    async function fetchIndicators() {
      const res = await Api.getIndicators();
      setIndicators(res.data);
    }
    fetchIndicators();
  }, []);

  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          TODO: Categories
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <ListGroup variant="flush">
              {indicators.map((i) => (
                <ListGroup.Item action as={Link} to={`/indicator/${i.id}`}>
                  {i.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default IndicatorList;
