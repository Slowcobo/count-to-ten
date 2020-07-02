import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import zowen from "./zowen.png";
import Showcase from "../showcase/Showcase";
import Activities from "../activities/Activities";
import Footer from "../footer/Footer";
import "./Home.css";

class Content extends Component {
  render() {
    return (
      <div className="Home">
        {/* Header */}
        <header className="Home-header">
          <Container>
            <Row className="justify-content-center">
              <Col md={4} lg={3} className="zowen-img-container ">
                <Image className="zowen-img mb-3" src={zowen} />
              </Col>
              <Col md={7} lg={5} className="title-container">
                <div className="page-header">
                  And <p>Zowen</p> Makes 10!
                </div>
              </Col>
            </Row>
          </Container>
        </header>

        {/* Main Content */}
        <main className="Home-content">
          <Container>
            <Row>
              <Col md={6}>
                {/* Activities */}
                <Activities />
              </Col>

              {/* Book Showcase */}
              <Col xs={{ order: "first" }} md={{ span: 6, order: "last" }}>
                <Showcase />
              </Col>
            </Row>
          </Container>
        </main>

        {/* Footer */}
        <div className="Home-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Content;
