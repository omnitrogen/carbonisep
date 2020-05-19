import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import StaticNavbar from "../../templates/nav/StaticNavbar";

const API = "http://localhost:8000/";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            result: "",
        };
    }
    connexionFunction = (event) => {
        event.preventDefault();
        fetch(API + "hello")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    };
    render() {
        return (
            <div>
                <StaticNavbar />
                <div className="p-3 d-flex justify-content-center pt-5">
                    <div className="border border-dark rounded w-50">
                        <Form onSubmit={this.connexionFunction} className="p-3">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Adresse mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={this.email}
                                    placeholder="Enter email"
                                    onChange={(event) =>
                                        this.setState({ email: event.target.value })
                                    }
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={this.password}
                                    placeholder="Password"
                                    onChange={(event) =>
                                        this.setState({
                                            password: event.target.value,
                                        })
                                    }
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Se rappeler de moi"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" value="Submit">
                                Connexion
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
