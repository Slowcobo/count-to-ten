import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import characters from "./zowen-characters.png";
import "./Activities.css";

class Activities extends Component {
  render() {
    return (
      <div className="Activities">
        {/* Meet Characters */}
        <div className="Activity-preview">
          <Image className="character-preview" src={characters} />
        </div>
        <Link className="button" to="/characters">
          Meet the Characters
        </Link>

        {/* Play Game */}
        <div className="Activity-preview">
          <div className="game-preview">
            <span className="game-preview-number">1</span>
            <span
              className="game-preview-number"
              style={{ transform: "translate(0, -1rem)" }}
            >
              2
            </span>
            <span
              className="game-preview-number"
              style={{ transform: "translate(0, 1rem)" }}
            >
              3
            </span>
          </div>
        </div>
        <Link className="button" to="/play">
          Play the Game
        </Link>
      </div>
    );
  }
}

export default Activities;
