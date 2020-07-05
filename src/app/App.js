import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Books from "../books/Books";
import Game from "../game/Game";
import Characters from "../characters/Characters";
import Error from "../error/Error";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Navbar collapseOnSelect expand="lg">
            {/* TODO: Refactor to Link */}
            <Navbar.Brand>
              Count to <span>Ten</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer exact to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer exact to="/play">
                  <Nav.Link>Play</Nav.Link>
                </LinkContainer>
                <LinkContainer exact to="/characters">
                  <Nav.Link>Characters</Nav.Link>
                </LinkContainer>
                <LinkContainer exact to="/books">
                  <Nav.Link>Books</Nav.Link>
                </LinkContainer>
                <LinkContainer exact to="/about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/play" render={() => <Game />} />
          <Route exact path="/characters" render={() => <Characters />} />
          <Route exact path="/books" render={() => <Books />} />
          <Route exact path="/about" render={() => <About />} />
          <Route render={() => <Error />} />
        </Switch>
      </div>
    );
  }
}

export default App;
