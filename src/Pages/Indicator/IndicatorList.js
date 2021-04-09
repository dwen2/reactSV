import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import {
  Accordion,
  Card,
  Pagination,
  Spinner,
  Badge,
  Row,
  Col,
} from "react-bootstrap";
import Api from "api";

function IndicatorList(props) {
  const [indicators, setIndicators] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchIndicators() {
      setLoading(true);
      const res = await Api.getIndicators();
      setIndicators(res.data);
      setLoading(false);
    }
    fetchIndicators();
  }, []);

  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Indicator List
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {loading && (
              <div class="d-flex justify-content-center">
                <Spinner
                  size="lg"
                  animation="border"
                  role="status"
                  className="mx-auto"
                >
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            )}
            <ListGroup variant="flush">
              {indicators.map((i) => (
                <ListGroup.Item action as={Link} to={`/indicator/${i.id}`}>
                  <Row>
                    <Col xs={1}>
                      <Badge variant="light">{i.code}</Badge>
                    </Col>
                    <Col>{i.name}</Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Accordion.Collapse>
        {!loading && (
          <Pagination className="ml-3">
            <Pagination.First disabled />
            <Pagination.Prev disabled />
            <Pagination.Item active={true}>{1}</Pagination.Item>
            <Pagination.Next disabled />
            <Pagination.Last disabled />
          </Pagination>
        )}
      </Card>
    </Accordion>
  );
}

export default IndicatorList;
