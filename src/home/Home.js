import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Game from "../game/Game";
import Image from "react-bootstrap/Image";
import "./Home.css";

class Content extends Component {
  render() {
    return (
      <div className="Home">
        <Row>
          <Col>
            <div className="title">
              <h1>
                And <span>Zowen</span> Makes 10!
              </h1>
            </div>
            {/* <Image src="characters.png" fluid /> */}
          </Col>
        </Row>
        <Game />
      </div>
    );
  }
}

export default Content;
