import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Books from "../books/Books";
import Game from "../game/Game";
import Characters from "../characters/Characters";
import Error from "../error/Error";
import "./App.css";

const RouterNavLink = ({ children, ...props }) => (
  <LinkContainer {...props}>
    <Nav.Link active={false}>{children}</Nav.Link>
  </LinkContainer>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Navbar collapseOnSelect expand="lg">
            {/* TODO: Refactor to Link */}
            <RouterNavLink
              className="navbar-brand"
              activeClassName=""
              exact
              to="/"
            >
              Count to <span>Ten</span>
            </RouterNavLink>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <RouterNavLink exact to="/">
                  Home
                </RouterNavLink>
                <RouterNavLink exact to="/play">
                  Play
                </RouterNavLink>
                <RouterNavLink exact to="/characters">
                  Characters
                </RouterNavLink>
                <RouterNavLink exact to="/books">
                  Books
                </RouterNavLink>
                <RouterNavLink exact to="/about">
                  About
                </RouterNavLink>
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
