import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Game from "../game/Game";
import Image from "react-bootstrap/Image";
// import zowenmain from "./zowen-main.png";
import "./Home.css";

class Content extends Component {
  render() {
    return (
      <div className="Home">
        <Row>
          <div className="title">
            <h1>
              And <span>Zowen</span> Makes 10!
            </h1>
          </div>
        </Row>
        <Game />
      </div>
    );
  }
}

export default Content;
