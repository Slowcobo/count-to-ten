import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Number from "../number/Number";
import beverly from "./zowen-beverly.png";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: this.randomizeOrder(),
      prevNumber: 0,
      tryAgain: false,
      isWinner: false,
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
      <div className="Game">
        <div className="winner">
          <h1>You did it!</h1>
          <button onClick={this.newGame}>Play Again?</button>
        </div>
      </div>
    );

    //Handle game ending
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1 className="page-header">
                Count to <span>Ten</span>
              </h1>
            </Col>
          </Row>
        </Container>

        <div className="Game-content">
          <Container>
            <Row>
              <Col className="Game-description">
                <p>Miss Beverly has written some numbers down on the board.</p>
                <p>See if you can count them from 1 to 10!</p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="" lg={8}>
                <Image className="beverly-img" src={beverly} />

                <div className="Game-container">
                  {this.state.prevNumber === 10 ? gameOver : game}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Game;
