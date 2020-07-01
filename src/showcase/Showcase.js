import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import zowenmakes10 from "./zowenmakes10.png";
import "./Showcase.css";

class Showcase extends Component {
  render() {
    return (
      <div className="Showcase">
        <Image className="Showcase-book" src={zowenmakes10} />
        <Link to="/">Buy the Book</Link>
      </div>
    );
  }
}

export default Showcase;
