import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class JoinGame extends Component {
  render() {
    return (
      <Form className="py-3 d-flex flex-column justify-content-center">
        <Form.Group controlId="formBasicName" className="pb-1">
          <Form.Control type="name" placeholder="Code de la partie" />
        </Form.Group>
        <Button variant="success" type="submit">
          Rejoindre la partie
        </Button>
      </Form>
    );
  }
}
