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
import Contact from "../contact/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Navbar expand="sm">
            <Navbar.Brand href="#home">Count to Ten</Navbar.Brand>
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
                <NavLink
                  exact
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Container fluid>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/books" render={() => <Books />} />
            <Route exact path="/play" render={() => <Game />} />
            <Route exact path="/contact" render={() => <Contact />} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
