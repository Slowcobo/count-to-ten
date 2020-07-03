import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Error.css";

export default function Error() {
  return (
    <Container className="Error">
      <Row>
        <Col>
          <h1>Oops! </h1>
          <h2>This page doesn't exist!</h2>
        </Col>
      </Row>
    </Container>
  );
}
