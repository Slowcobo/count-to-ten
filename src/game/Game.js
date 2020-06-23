import React, { Component } from "react";
import "./Game.css";
import Number from "../number/Number";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: this.randomizeOrder(),
      prevNumber: 0,
      tryAgain: false,
    };

    this.randomizeOrder = this.randomizeOrder.bind(this);
    this.clickNumber = this.clickNumber.bind(this);
    this.newGame = this.newGame.bind(this);
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
      this.setState(
        {
          tryAgain: true,
        },
        () => {
          setTimeout(() => {
            this.setState({ tryAgain: false });
          }, 600);
        }
      );
    } else {
      //Update the previous number
      this.setState({
        prevNumber: number.props.number,
      });
      //Disable the number component
      number.setState({
        isActive: false,
      });
    }
  }

  newGame() {
    this.setState({
      numbers: this.randomizeOrder(),
      prevNumber: 0,
      tryAgain: false,
    });
  }

  render() {
    const game = (
      <div className="Game">
        <div className={`try-again ${this.state.tryAgain && "show"}`}>
          <h1>Try Again!</h1>
        </div>
        {this.state.numbers.map((number) => (
          <Number key={number} number={number} clickNumber={this.clickNumber} />
        ))}
      </div>
    );

    const gameOver = (
      <div className="winner">
        <h1>You did it!</h1>
        <button onClick={this.newGame}>Play Again?</button>
      </div>
    );

    //Handle game ending
    return (
      <div>
        <h1>Count to Ten</h1>
        <div className="Game-container">
          {this.state.prevNumber === 10 ? gameOver : game}
        </div>
      </div>
    );
  }
}

export default Game;
