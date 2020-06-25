import React, { Component } from "react";
import Container from "react-bootstrap/Container";
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
        {/* Header */}
        <header className="Home-header">
          <Container>
            <Row>
              <Col sm={6} className="zowen-img-container">
                <Image className="zowen-img" src={zowen} />
              </Col>
              <Col sm={6} className="title-container">
                <div className="title">
                  <h1>
                    And <p>Zowen</p> Makes 10!
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </header>

        {/* Main Content */}
        <main className="Home-content">
          <Container>
            <Row>
              {/* Book Showcase */}
              <Col sm={6}>
                <Showcase />
              </Col>

              <Col sm={6}>
                {/* Activities */}
                <Activities />
              </Col>
            </Row>
          </Container>
        </main>

        {/* Footer */}
        <div className="Home-footer">
          <Container>
            <Row className="justify-content-center">
              <Col>Copyright © 2020 by Joan Parnell</Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Content;
