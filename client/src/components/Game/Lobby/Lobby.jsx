import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Container,
    Col,
    Row,
    ListGroup,
    Button,
    Tooltip,
    OverlayTrigger,
} from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { userActions } from "redux/_actions";
import { gameActions } from "redux/_actions";
import { chatActions } from "redux/_actions";

import { WebSocketContext } from "redux/_helpers/websockets";

import { Navigation } from "components/App/Navigation";
import { Chat } from "components/Game/Chat";

function renderTooltip(props) {
    return (
        <Tooltip id="button-tooltip" {...props}>
            Click to copy!
        </Tooltip>
    );
}

function Lobby() {
    const user = useSelector((state) => state.authentication.user);
    const users = useSelector((state) => state.game.users);
    const admin = useSelector((state) => state.game.isGameAdmin);
    const lobbyName = useSelector((state) => state.game.name);
    const uuid = useSelector((state) => state.game.uuid);

    const [isCopied, setIsCopied] = useState(false);

    const alert = useSelector((state) => state.alert);
    const dispatch = useDispatch();
    const ws = useContext(WebSocketContext);

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }
    }, [isCopied]);

    useEffect(() => {
        ws.updateUsers(uuid);
    }, []);

    const handleClickCopy = () => {
        setIsCopied(true);
    };

    return (
        <div>
            <Navigation />
            <Container className="border border-dark rounded my-5">
                <Row className="m-4">
                    <Col md="auto">
                        <h1>hello {user.username}</h1>
                        <h2>welcome to {lobbyName} room!</h2>
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 150, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <CopyToClipboard text={uuid}>
                                <Button
                                    variant="outline-primary"
                                    disabled={isCopied}
                                    onClick={!isCopied ? handleClickCopy : null}
                                >
                                    {isCopied ? "Copied!" : "Game id: " + uuid}
                                </Button>
                            </CopyToClipboard>
                        </OverlayTrigger>
                    </Col>
                </Row>

                <Row className="justify-content-md-center m-4">
                    <Col>
                        <h2>users in the current room</h2>
                        <ListGroup variant="flush">
                            {users.map((u, i) => (
                                <ListGroup.Item
                                    className="rounded"
                                    variant="info"
                                    key={i}
                                >
                                    {u}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col>
                        <Chat />
                    </Col>
                </Row>

                <Row className="m-4">
                    <Col style={{ "text-align": "center" }}>
                        {admin && (
                            <Button variant="success">Start the game</Button>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { Lobby };
