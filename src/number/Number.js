import React, { Component } from "react";
import "./Number.css";

class Number extends Component {
  render() {
    return (
      <h3
        className={this.props.isActive ? "Number" : "Number Number-inactive"}
        onClick={this.props.handleClick}
      >
        {this.props.value}
      </h3>
    );
  }
}

export default Number;
