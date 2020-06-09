import React, { Component } from "react";
import "./Number.css";

class Number extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.props.clickNumber(this);
  }

  render() {
    return (
      <h1 className="number" onClick={this.handleClick}>
        {this.props.number}
      </h1>
    );
  }
}

export default Number;
