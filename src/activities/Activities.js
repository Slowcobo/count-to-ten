import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "./Activities.css";

class Activities extends Component {
  render() {
    return (
      <div className="Activities">
        {/* Meet Characters */}
        <Image className="Activity-preview" src="" />
        <Link to="/" className="Activity-link">
          Meet the Characters
        </Link>

        {/* Play Game */}
        <Image className="Activity-preview" src="" />
        <Link to="/play" className="Activity-link">
          Play the Game
        </Link>
      </div>
    );
  }
}

export default Activities;
