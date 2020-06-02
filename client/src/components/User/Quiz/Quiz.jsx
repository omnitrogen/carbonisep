import React, { Component } from "react";
import { Button, Form, Pagination } from "react-bootstrap";
import ConnectedNavbars from "../../Templates/nav/ConnectedNavbars";

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_question: 0,
            questionsQuizz: [""],
            answers: [],
            profile: "",
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
        var question1 = document.getElementById("q0");
        question1.classList.remove("d-none");
    }

    prev = () => {
        document
            .getElementById("next")
            .parentElement.classList.remove("disabled");
        this.state.current_question--;

        document
            .getElementById("q" + (this.state.current_question + 1))
            .classList.add("d-none");
        document
            .getElementById("q" + this.state.current_question)
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
            .getElementById("q" + (this.state.current_question - 1))
            .classList.add("d-none");

        document
            .getElementById("q" + this.state.current_question)
            .classList.remove("d-none");
        if (this.state.current_question == this.state.questionsQuizz.length) {
            document
                .getElementById("next")
                .parentElement.classList.add("disabled");
        }
    };

    handleOptionChange = (event) => {
        var resultats = this.state.questionsQuizz[this.state.current_question][
            "resultats"
        ].split(",");
        this.state.answers[this.state.current_question] =
            resultats[event.target.value];
    };

    question(num) {
        var lis = [];
        for (let i = 0; i < 4; i++) {
            lis.push(
                <Form.Check
                    required
                    type="radio"
                    label={this.state.questionsQuizz[num]["reponse" + i]}
                    value={i}
                    name={"formHorizontalRadios" + num}
                    onChange={this.handleOptionChange}
                />
            );
        }
        return (
            <Form.Group
                controlId="formBasicCheckbox"
                id={"q" + num}
                className="d-none"
            >
                <Form.Label>{this.state.questionsQuizz[num].nom}</Form.Label>

                {lis}
            </Form.Group>
        );
    }

    submitQuizz = async (event) => {
        event.preventDefault();
        console.log(this.state.answers);
        this.state.profile = await fetch(
            "http://localhost:8000/quizzResult?answers=" +
                this.state.answers.join("")
        )
            .then((res) => res.json())
            .then((res) => res.profile);
        this.forceUpdate();
        console.log(this.state.profile);
    };

    affichageQuizz() {
        var questions = [];
        for (let i = 0; i < this.state.questionsQuizz.length; i++) {
            questions.push(this.question(i));
        }
        return (
            <div>
                <h1>Questionnaire</h1>
                <Pagination>
                    <Pagination.Prev
                        onClick={this.prev}
                        id="prev"
                        className="disabled"
                    />
                    <Pagination.Next onClick={this.next} id="next" />
                </Pagination>
                <Form
                    onSubmit={this.submitQuizz}
                    feedback="You must agree before submitting."
                >
                    {questions}
                    <Button
                        className="d-none"
                        id={"q" + this.state.questionsQuizz.length}
                        variant="primary"
                        type="submit"
                    >
                        valider le quizz
                    </Button>
                </Form>
            </div>
        );
    }
    affichageResult() {
        return (
            <div>
                <h1>Résultats</h1>
                <p>Vous êtes profile {this.state.profile}</p>
            </div>
        );
    }
    render() {
        return (
            <div>
                <ConnectedNavbars />
                <div className="p-3 d-flex justify-content-center pt-5">
                    <div className="border border-dark rounded w-80 p-4">
                        {this.state.profile == ""
                            ? this.affichageQuizz()
                            : this.affichageResult()}
                    </div>
                </div>
            </div>
        );
    }
}

export { Quiz };
