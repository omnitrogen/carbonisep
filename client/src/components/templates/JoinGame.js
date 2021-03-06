import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

export default class JoinGame extends Component {
    async joinPartie(event) {
        event.preventDefault();
        var code = event.target.nomPartie.value;
        console.log("tetst");

        var gameExist = await fetch("http://localhost:8000/join?code=" + code)
            .then((res) => res.json())
            .then((res) => res.exist);
        console.log(gameExist);
        if (gameExist) {
            var url = "/join?code=" + code;
            console.log("redirect " + url);
            window.location = url;
        }
    }

    render() {
        return (
            <Form
                className="py-3 d-flex flex-column justify-content-center"
                onSubmit={this.joinPartie}
            >
                <Form.Group controlId="formBasicName" className="pb-1">
                    <Form.Control
                        type="name"
                        name="nomPartie"
                        placeholder="Code de la partie"
                    />
                </Form.Group>
                <Button variant="success" type="submit">
                    Rejoindre la partie
                </Button>
            </Form>
        );
    }
}
