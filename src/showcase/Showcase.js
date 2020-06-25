import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import zowenmakes10 from "./zowenmakes10.png";
import Button from "react-bootstrap/Button";
import "./Showcase.css";

class Showcase extends Component {
  render() {
    return (
      <div className="Showcase">
        <Image className="Showcase-book" src={zowenmakes10} fluid />
        <div className="Showcase-out">Out Now!</div>
        <p className="Showcase-description">
          And Zowen Makes 10! is a delightful book that children will love to
          read over and over again!
        </p>
        <Button className="Showcase-buy">Buy the Book</Button>
      </div>
    );
  }
}

export default Showcase;
