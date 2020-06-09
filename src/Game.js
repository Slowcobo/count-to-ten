import React, { Component } from "react";
import "./Game.css";
import Number from "./Number";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: this.randomizeOrder(),
      prevNumber: 0,
      gameOver: false,
    };

    this.randomizeOrder = this.randomizeOrder.bind(this);
    this.clickNumber = this.clickNumber.bind(this);
  }

  randomizeOrder() {
    const numbers = [];
    while (numbers.length < 10) {
      const random = Math.floor(Math.random() * 10) + 1;
      if (!numbers.includes(random)) {
        numbers.push(random);
      }
    }
    return numbers;
  }

  clickNumber(number) {
    if (number.props.number - this.state.prevNumber !== 1) {
      alert("WRONG");
    } else {
      this.setState({
        prevNumber: number.props.number,
      });
    }
  }

  render() {
    return (
      <div id="game">
        {this.state.numbers.map((number) => (
          <Number key={number} number={number} clickNumber={this.clickNumber} />
        ))}
      </div>
    );
  }
}

export default Game;
