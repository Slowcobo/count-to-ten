import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import zowen from "./zowen.png";
import Showcase from "../showcase/Showcase";
import Activities from "../activities/Activities";
import "./Home.css";

class Content extends Component {
  render() {
    return (
      <div className="Home">
        {/* Header/Title */}
        <Row className="justify-content-center">
          <Col sm={3} className="d-none d-sm-flex zowen-img-container">
            <Image className="zowen-img" src={zowen} fluid />
          </Col>
          <Col sm={3} className="title-container">
            <div className="title">
              <h1>
                And <p>Zowen</p> Makes 10!
              </h1>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {/* Book Showcase */}
          <Col sm={3}>
            <Showcase />
          </Col>

          <Col sm={3}>
            {/* Activities */}
            <Activities />
          </Col>
        </Row>

        {/* Footer */}
        <Row>
          <Col>
            <div className="footer">
              <h1>Footer to go here</h1>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Content;
