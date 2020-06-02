import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Container,
    Button,
    InputGroup,
    Form,
    FormControl,
    Pagination,
    Row,
    Col,
} from "react-bootstrap";

import { Navigation } from "components/App/Navigation";

import { userActions, alertActions } from "redux/_actions";

function Quiz() {
    const [question, setQuestion] = useState(1);
    const [inputs, setInputs] = useState({
        question_1: null,
        question_2: null,
        question_3: null,
        question_4: null,
    });
    const [min, setMin] = useState(true);
    const [max, setMax] = useState(false);

    const quiz = useSelector((state) => state.quiz.quiz);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getQuiz());
    }, []);

    function decrQuestion() {
        if (question > 1) {
            setQuestion(question - 1);
            setMin(false);
            setMax(false);
        }
        if (question === 1) setMin(true);
    }

    function incrQuestion() {
        if (question < quiz.length) {
            setQuestion(question + 1);
            setMin(false);
            setMax(false);
        }
        if (question === quiz.length - 1) setMax(true);
    }

    const listResponse = (i) => [
        i.reponse0,
        i.reponse1,
        i.reponse2,
        i.reponse3,
    ];

    function maxCount(input) {
        const { max, ...counts } = (input || "").split("").reduce(
            (a, c) => {
                a[c] = a[c] ? a[c] + 1 : 1;
                a.max = a.max < a[c] ? a[c] : a.max;
                return a;
            },
            { max: 0 }
        );

        return Object.entries(counts).filter(([k, v]) => v === max);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (Object.values(inputs).every((x) => x !== null && x !== "")) {
            const letter = maxCount(Object.values(inputs).join(""))[0][0];
            dispatch(userActions.sendQuiz(letter));
        } else
            dispatch(
                alertActions.error("Complete all the form before submitting!")
            );
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }

    return (
        <div>
            <Navigation />
            <Container>
                <Row className="justify-content-md-center">
                    <Col
                        className="justify-content-md-center border border-dark rounded p-3 px-4 m-4"
                        lg="6"
                    >
                        <h1>Quiz</h1>
                        <Form onSubmit={handleSubmit}>
                            {quiz.map((quest, i) => (
                                <div
                                    key={quest.Id}
                                    style={{
                                        display:
                                            question === i + 1 ? "" : "none",
                                    }}
                                >
                                    <h3>{quest.nom}</h3>
                                    <Form.Group
                                        controlId={"question_" + quest.Id}
                                    >
                                        {listResponse(quest).map(
                                            (option, j) => (
                                                <Form.Check
                                                    key={j}
                                                    type="radio"
                                                    label={option}
                                                    name={
                                                        "question_" + quest.Id
                                                    }
                                                    value={
                                                        quest.resultats.split(
                                                            ","
                                                        )[j]
                                                    }
                                                    onChange={handleChange}
                                                />
                                            )
                                        )}
                                    </Form.Group>
                                </div>
                            ))}

                            <Pagination className="d-flex justify-content-center">
                                <Pagination.Prev
                                    disabled={min}
                                    onClick={decrQuestion}
                                />
                                <Pagination.Next
                                    disabled={max}
                                    onClick={incrQuestion}
                                />
                            </Pagination>
                            {max && (
                                <div className="d-flex justify-content-center m-2">
                                    <Button type="submit">Submit</Button>
                                </div>
                            )}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { Quiz };
