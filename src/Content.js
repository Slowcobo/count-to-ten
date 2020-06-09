import React, { Component } from "react";
import Game from "./game/Game";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Content extends Component {
  render() {
    return (
      <div className="container">
        <Navbar expand="sm">
          <Navbar.Brand href="#home">Count to Ten!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Books</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <h1>
          <span>Count</span> to <span>Ten</span>
        </h1>
        <Game />
      </div>
    );
  }
}

export default Content;
