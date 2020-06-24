import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import zowenmakes10 from "./zowenmakes10.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Showcase.css";

class Showcase extends Component {
  render() {
    return (
      <div className="Showcase">
        <Row>
          <Col sm={4}>
            <Image className="Showcase-book" src={zowenmakes10} fluid />
            <div className="Showcase-out">Out Now!</div>
            <p className="Showcase-description">
              And Zowen Makes 10! is a delightful book that children will love
              to read over and over again!
            </p>
            <Button className="Showcase-buy">Buy the Book</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Showcase;
