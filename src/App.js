import React from "react";
import { Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./home/Home";
import About from "./about/About";
import Books from "./books/Books";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar expand="sm">
        <Navbar.Brand href="#home">Count to Ten</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                exact
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                exact
                to="/books"
                className="nav-link"
                activeClassName="active"
              >
                Books
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                exact
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/books" render={() => <Books />} />
        <Route exact path="/contact" render={() => <h1>Contact Page</h1>} />
      </Switch>
    </div>
  );
}

export default App;
