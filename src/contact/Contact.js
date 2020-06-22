import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <Form>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    );
  }
}

export default Contact;
