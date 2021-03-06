import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Footer from "../footer/Footer";
import profile from "./profile.png";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <Container>
          <Row>
            <Col>
              <header className="page-header">
                About <span>Joan</span>
              </header>
            </Col>
          </Row>
        </Container>

        {/* Main Content */}
        <main className="content About-content">
          <Container>
            <Row>
              <Col className="text-center" sm={12} md={4}>
                <Image className="About-img" src={profile} fluid />
                <a className="button" href="mailto:contact@counttoten.com">
                  Email Me!
                </a>
              </Col>
              <Col className="About-text">
                <p>
                  Joan Parnell is an Early Childhood Educator and the lead
                  Pre-Kindergarten teacher at Lakeside Baptist Church in
                  Granbury, Texas. Working with young children in a classroom
                  setting gives her the inspiration for her “Zowen” books.
                </p>
                <p>
                  Joan graduated from the University of Texas at Austin with a
                  B.S. degree in Elementary Education. She was born and raised
                  in Houston, Texas, but now resides in the beautiful, peaceful
                  town of Glen Rose, Texas. She is the mother of two boys, of
                  whom she is very proud. She has two Australian Shepherds, one
                  Cairn Terrier, and a horse named Shooter.
                </p>
                <p>
                  Joan will tell you that she has been blessed in so many ways.
                  She loves her family, her job, the children that she teaches,
                  and her director and co-workers that lift her up daily. She
                  gives all the glory to her Lord and Savior, Jesus Christ!
                </p>
              </Col>
            </Row>
          </Container>
        </main>

        {/* Footer */}
        <footer className="About-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default About;
