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
      if (!numbers.some((number) => number.value === random)) {
        const newNumber = {
          value: random,
          isActive: true,
        };
        numbers.push(newNumber);
      }
    }
    return numbers;
  }

  clickNumber(clickedNumber) {
    if (clickedNumber - this.state.prevNumber !== 1) {
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
        numbers: this.state.numbers.map((number) =>
          number.value === clickedNumber
            ? { value: clickedNumber, isActive: false }
            : number
        ),
        prevNumber: clickedNumber,
        isWinner: clickedNumber === 10 && true,
      });
      //Disable the number component
    }
  }

  newGame() {
    this.setState({
      numbers: this.randomizeOrder(),
      prevNumber: 0,
      tryAgain: false,
      isWinner: false,
    });
  }

  render() {
    return (
      <div className="mt-5">
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
              <Col lg={8}>
                <Image className="beverly-img" src={beverly} />
                <div className="Game-container">
                  <div className="Game">
                    {/* Winner Pop-up */}
                    <div className={`winner ${this.state.isWinner && "show"}`}>
                      <p>You did it!</p>

                      <button onClick={this.newGame}>Play Again?</button>
                    </div>

                    {/* Try Again Pop-up */}
                    <div
                      className={`try-again ${this.state.tryAgain && "show"}`}
                    >
                      Try Again!
                    </div>

                    {/* Game */}
                    {this.state.numbers.map((number) => (
                      <Number
                        key={number.value}
                        value={number.value}
                        isActive={number.isActive}
                        handleClick={() => this.clickNumber(number.value)}
                      />
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="Game-footer">
            <Container>
              <Row className="justify-content-center">
                <Col>Copyright © 2020 by Joan Parnell</Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
