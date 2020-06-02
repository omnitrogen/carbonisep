import React, { useEffect } from "react";
import { Nav, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "redux/_actions";

import { Navigation } from "components/App/Navigation";

function Tips() {
    const loggedIn = useSelector((state) => state.authentication.loggedIn);
    const hasAnsweredToQuiz = useSelector(
        (state) => state.quiz.hasAnsweredToQuiz
    );
    const letter = useSelector((state) => state.quiz.letter);
    const actions = useSelector((state) => state.quiz.actions.actions);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getActions(letter));
    }, []);

    return (
        <div>
            <Navigation />
            <div className="p-3 d-flex justify-content-center pt-5">
                <div className="border border-dark rounded w-80 p-4">
                    <h1>Conseils et Astuces</h1>
                    {!loggedIn && (
                        <p>
                            Ici tu peux avoir quelques tips pour être plus
                            écolo.
                            <br />
                            Si tu veux qu'on te propose des tips sur-mesure et
                            faciles à faire, tu peux répondre à un questionnaire
                            en te connectant et on t'aidera
                        </p>
                    )}
                    {loggedIn && !hasAnsweredToQuiz && (
                        <>
                            <p>
                                Ici tu peux avoir quelques tips pour être plus
                                écolo.
                                <br />
                                Si tu veux qu'on te propose des tips sur-mesure
                                et faciles à faire, tu peux répondre à un
                                questionnaire!
                            </p>
                            <Nav.Link
                                as={Link}
                                to="/quiz"
                                style={{ outline: 0 }}
                            >
                                <Button variant="primary">
                                    Answer the quiz
                                </Button>
                            </Nav.Link>
                        </>
                    )}
                    {!loggedIn && (
                        <Nav.Link as={Link} to="/login" style={{ outline: 0 }}>
                            <Button variant="primary">Login</Button>
                        </Nav.Link>
                    )}
                    {loggedIn && hasAnsweredToQuiz && (
                        <p>Voici des actions pour vous:</p>
                    )}
                    {!loggedIn && <p>Quelques exemples d'actions:</p>}
                    <ListGroup variant="flush">
                        {actions.map((action, i) => (
                            <ListGroup.Item
                                className="rounded m-2"
                                action
                                variant={i % 2 === 0 ? "dark" : "secondary"}
                                key={i}
                                style={{ "font-size": "1.4rem" }}
                            >
                                {action}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            </div>
        </div>
    );
}

export { Tips };
