import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./Activities.css";

class Activities extends Component {
  render() {
    return (
      <div className="Activities">
        <Image className="Activity-preview" src="" fluid />
        <Button>Meet the Characters</Button>

        <Image className="Activity-preview" src="" fluid />
        <Button>Play the Game</Button>
      </div>
    );
  }
}

export default Activities;
