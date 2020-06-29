import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Books from "../books/Books";
import Game from "../game/Game";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Navbar expand="sm">
            {/* TODO: Refactor to Link */}
            <Navbar.Brand>
              Count to <span>Ten</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <NavLink
                  exact
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
                <NavLink
                  exact
                  to="/play"
                  className="nav-link"
                  activeClassName="active"
                >
                  Play
                </NavLink>
                <NavLink
                  exact
                  to="/about"
                  className="nav-link"
                  activeClassName="active"
                >
                  About
                </NavLink>
                <NavLink
                  exact
                  to="/books"
                  className="nav-link"
                  activeClassName="active"
                >
                  Books
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/books" render={() => <Books />} />
          <Route exact path="/play" render={() => <Game />} />
        </Switch>
      </div>
    );
  }
}

export default App;
