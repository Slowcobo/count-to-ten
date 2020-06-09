import React, { Component } from "react";
import "./Number.css";

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.props.clickNumber(this);
  }

  render() {
    // TODO: Implement rotation and translation
    // let rotation = Math.floor(Math.random() * 10);
    // let translation = Math.floor(Math.random() * 100);

    return (
      <h3
        className={this.state.isActive ? "number" : "number number-inactive"}
        onClick={this.handleClick}
        // style={{
        //   transform: `rotate(${rotation}deg) translateY(${translation}px)`,
        // }}
      >
        {this.props.number}
      </h3>
    );
  }
}

export default Number;
