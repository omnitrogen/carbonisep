import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Login extends Component {
    render() {
        return (
            <div className="p-3 d-flex justify-content-center pt-5">
                <div className="border border-dark rounded w-50">
                    <Form className="p-3">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Adresse mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Se rappeler de moi"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Connexion
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}
