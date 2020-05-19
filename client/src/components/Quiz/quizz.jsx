import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import ConnectedNavbars from "../templates/nav/ConnectedNavbars";

export default class Quizz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_question: 1,
        };
    }

    componentDidMount() {
        var question1 = document.getElementById("Question1");
        question1.classList.remove("d-none");
    }

    prev = () => {
        document
            .getElementById("next")
            .parentElement.classList.remove("disabled");
        this.state.current_question--;

        document
            .getElementById("Question" + (this.state.current_question + 1))
            .classList.add("d-none");
        document
            .getElementById("Question" + this.state.current_question)
            .classList.remove("d-none");

        if (this.state.current_question === 1) {
            document
                .getElementById("prev")
                .parentElement.classList.add("disabled");
        }
    };

    next = () => {
        document
            .getElementById("prev")
            .parentElement.classList.remove("disabled");
        this.state.current_question++;

        document
            .getElementById("Question" + (this.state.current_question - 1))
            .classList.add("d-none");
        document
            .getElementById("Question" + this.state.current_question)
            .classList.remove("d-none");

        // remplacer le 3 par le num de la last question
        if (this.state.current_question === 3) {
            document
                .getElementById("next")
                .parentElement.classList.add("disabled");
        }
    };

    render() {
        return (
            <div>
                <ConnectedNavbars />
                <div className="p-3 d-flex justify-content-center pt-5">
                    <div className="border border-dark rounded w-80 p-4">
                        <h1>Questionnaire</h1>
                        <Pagination>
                            <Pagination.Prev
                                onClick={this.prev}
                                id="prev"
                                className="disabled"
                            />
                            <Pagination.Next onClick={this.next} id="next" />
                        </Pagination>
                        <Form>
                            <Form.Group
                                controlId="formBasicCheckbox"
                                id="Question1"
                                className="d-none"
                            >
                                <Form.Label>
                                    Combien de fois mangez vous de la viande par
                                    semaine ?
                                </Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Jamais !"
                                    name="formHorizontalRadios1"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="1 � 2 fois"
                                    name="formHorizontalRadios1"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="3 � 4 fois"
                                    name="formHorizontalRadios1"
                                    id="formHorizontalRadios3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="5 fois ou plus"
                                    name="formHorizontalRadios1"
                                    id="formHorizontalRadios4"
                                />
                            </Form.Group>
                            <Form.Group
                                controlId="formBasicCheckbox"
                                id="Question2"
                                className="d-none"
                            >
                                <Form.Label>
                                    Quels d�chets triez-vous ?
                                </Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Emballages, verre"
                                    name="formHorizontalRadios2"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Mat�riel �lectronique"
                                    name="formHorizontalRadios2"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Aliments"
                                    name="formHorizontalRadios2"
                                    id="formHorizontalRadios3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Aucun"
                                    name="formHorizontalRadios2"
                                    id="formHorizontalRadios4"
                                />
                            </Form.Group>
                            <Form.Group
                                controlId="formBasicCheckbox"
                                id="Question3"
                                className="d-none"
                            >
                                <Form.Label>
                                    Combien de fois prenez vous l'avion par an?
                                </Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Jamais !"
                                    name="formHorizontalRadios3"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="1 � 2 fois"
                                    name="formHorizontalRadios3"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="3 � 4 fois"
                                    name="formHorizontalRadios3"
                                    id="formHorizontalRadios3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="5 fois ou plus"
                                    name="formHorizontalRadios3"
                                    id="formHorizontalRadios4"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
