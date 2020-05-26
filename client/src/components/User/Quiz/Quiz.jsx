import React, { Component } from "react";
import { Button, Form, Pagination } from "react-bootstrap";
import ConnectedNavbars from "components/templates/nav/ConnectedNavbars";

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_question: 0,
            questionsQuizz: [""],
        };
    }
    componentWillMount() {
        fetch("http://localhost:8000/quizz")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    questionsQuizz: data,
                });
            });
    }

    componentDidMount() {
        var question1 = document.getElementById("questionnaire0");
        question1.classList.remove("d-none");
    }
    question(num) {
        var lis = [];
        var resultats = (
            this.state.questionsQuizz[num]["resultats"] || ""
        ).split(",");
        for (let i = 0; i < 4; i++) {
            lis.push(
                <Form.Check
                    type="radio"
                    label={this.state.questionsQuizz[num]["reponse" + i]}
                    value={resultats[i]}
                    name={"formHorizontalRadios" + num}
                    id={"formHorizontalRadios" + i}
                />
            );
        }
        return (
            <Form.Group
                controlId="formBasicCheckbox"
                id={"questionnaire" + num}
                className="d-none"
            >
                <Form.Label>{this.state.questionsQuizz[num].nom}</Form.Label>

                {lis}
            </Form.Group>
        );
    }

    prev = () => {
        document
            .getElementById("next")
            .parentElement.classList.remove("disabled");
        this.state.current_question--;

        document
            .getElementById("questionnaire" + (this.state.current_question + 1))
            .classList.add("d-none");
        document
            .getElementById("questionnaire" + this.state.current_question)
            .classList.remove("d-none");

        if (this.state.current_question == 0) {
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
            .getElementById("questionnaire" + (this.state.current_question - 1))
            .classList.add("d-none");

        document
            .getElementById("questionnaire" + this.state.current_question)
            .classList.remove("d-none");
        if (this.state.current_question == this.state.questionsQuizz.length) {
            document
                .getElementById("next")
                .parentElement.classList.add("disabled");
        }
    };

    render() {
        var questions = [];
        for (let i = 0; i < this.state.questionsQuizz.length; i++) {
            questions.push(this.question(i));
        }
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
                            {questions}
                            <Button
                                className="d-none"
                                id={
                                    "questionnaire" +
                                    this.state.questionsQuizz.length
                                }
                                variant="primary"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export { Quiz };
