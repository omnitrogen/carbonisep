import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import { gameActions } from "redux/_actions";

import { Navigation } from "components/App/Navigation";

function Join() {
    const [inputs, setInputs] = useState({
        code: "",
        name: "",
    });
    const { code, name } = inputs;

    const [submittedJoin, setSubmittedJoin] = useState(false);
    const [submittedCreate, setSubmittedCreate] = useState(false);

    const joiningGame = useSelector((state) => state.game.joiningGame);
    const creatingGame = useSelector((state) => state.game.creatingGame);

    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }

    function joinHandleSubmit(e) {
        e.preventDefault();

        setSubmittedJoin(true);
        if (code) {
            dispatch(gameActions.joinGame(code));
        }
    }

    function createGameHandleSubmit(e) {
        e.preventDefault();

        setSubmittedCreate(true);
        if (name) {
            dispatch(gameActions.createGame(name));
        }
    }

    return (
        <div>
            <Navigation />
            <Container className="border border-dark rounded my-5 p-4">
                <Row className="justify-content-md-center py-3">
                    <Col lg="8">
                        <h2 className="text-center">
                            Can't wait to play with your friends?
                        </h2>
                        <h2 className="text-center">
                            Join the game with the game code!
                        </h2>
                    </Col>
                </Row>

                <Row className="justify-content-md-center py-3">
                    <Col lg="4">
                        <form
                            name="form"
                            onSubmit={joinHandleSubmit}
                            className="center"
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="code"
                                    placeholder="Game code"
                                    value={code}
                                    onChange={handleChange}
                                    className={
                                        "form-control" +
                                        (submittedJoin && !code
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                {submittedJoin && !code && (
                                    <div className="invalid-feedback">
                                        Code is required
                                    </div>
                                )}
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-success">
                                    {joiningGame && (
                                        <span className="spinner-border spinner-border-sm mr-1"></span>
                                    )}
                                    Join the game
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="6">
                        <hr />
                    </Col>
                </Row>
                <Row className="justify-content-md-center py-3">
                    <Col lg="8">
                        <h2 className="text-center">
                            Or create a new game and invite all your friends!
                        </h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center py-3">
                    <Col lg="4">
                        <form name="form" onSubmit={createGameHandleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Game name"
                                    value={name}
                                    onChange={handleChange}
                                    className={
                                        "form-control" +
                                        (submittedCreate && !name
                                            ? " is-invalid"
                                            : "")
                                    }
                                />
                                {submittedCreate && !name && (
                                    <div className="invalid-feedback">
                                        Name is required
                                    </div>
                                )}
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary">
                                    {creatingGame && (
                                        <span className="spinner-border spinner-border-sm mr-1"></span>
                                    )}
                                    Create a game
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { Join };
