import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Footer.css";

export default function Footer() {
  return (
    <Container className="Footer">
      <Row className="text-center">
        <Col>Copyright © 2020 by Joan Parnell</Col>
      </Row>
    </Container>
  );
}
