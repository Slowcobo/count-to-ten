import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import zowenmakes10 from "./zowenmakes10.png";
import "./Books.css";

class Books extends Component {
  render() {
    return (
      <div className="Books">
        <Col sm={6}>
          <Row>
            <h1 className="page-title">Books</h1>
          </Row>
          <Row>
            <Col md={4}>
              <Image className="Book-img" src={zowenmakes10} />
            </Col>
            <Col>
              <div>
                <h4 className="Book-title">And Zowen Makes 10!</h4>
                <p>
                  The day has finally arrived. It’s the class field trip to the
                  Zoo. The children are so excited to see all the animals, but
                  Zowen has one thing on his mind. “Will there be something to
                  eat?”
                </p>
                <p>
                  Join Zowen and his classmates as they visit all the
                  fascinating animals at the zoo. Upon leaving the reptile
                  house, Miss Beverly lines up her class to count everyone “just
                  to be sure.” Much to her dismay, she and the children discover
                  that Zowen is missing! Where could he be?
                </p>
              </div>
              <Button>Buy the Book</Button>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}

export default Books;
