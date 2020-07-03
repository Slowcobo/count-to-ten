import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import beverly from "./beverly-about.png";
import zowen from "./zowen-about.png";
import Footer from "../footer/Footer";
import "./Characters.css";

class Characters extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1 className="page-header">
                The <span>Characters</span>
              </h1>
            </Col>
          </Row>
        </Container>
        <div className="content">
          <Container>
            <Row>
              <Col md={6}>
                <div className="character-container">
                  <Image className="character-image" src={zowen} />
                  <h2 className="character-name">Zowen</h2>
                </div>
                <p>
                  Hi! My name is Zowen. I don’t know how I came to have that
                  name, but I’ve had it for as long as I can remember. It’s sort
                  of peculiar, but I like it all right.
                </p>
                <p>
                  I am in Miss Beverly’s Pre-K class at school. She is really
                  nice, and she makes school so much fun. I have made lots of
                  friends at school, but my best friend is Isaac. I like
                  dinosaurs and building things with blocks, but everyone that
                  knows me will tell you that one of my favorite things to do is
                  eat, especially bananas!
                </p>
              </Col>
              <Col md={6}>
                <div className="character-container">
                  <Image className="character-image" src={beverly} />
                  <h2 className="character-name">Miss Beverly</h2>
                </div>

                <p>
                  Hello. I’m Miss Beverly, Zowen’s teacher. I love teaching
                  children because they are so eager to learn new things. In my
                  class, we learn to count, we practice our ABCs, we paint and
                  do lots of crafts, and most importantly, we learn about
                  stories in the Bible.
                </p>
                <p>
                  One of my favorite things to do is to go on field trips. On
                  one trip to the Zoo, Zowen gave me quite the scare!
                  Thankfully, everything turned out alright.
                </p>
              </Col>
            </Row>
          </Container>

          <div className="Characters-footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Characters;
