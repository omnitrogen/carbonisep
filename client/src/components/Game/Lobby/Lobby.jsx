import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Container,
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
    const uuidCopy = useRef();

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
            <Container className="justify-content-center p-5">
                <h1>hello {user.username}</h1>
                <h2>welcome to {lobbyName}!</h2>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 150, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <CopyToClipboard
                        text={uuid}
                        // onCopy={() => this.setState({ copied: true })}
                    >
                        <Button
                            variant="outline-secondary"
                            disabled={isCopied}
                            onClick={!isCopied ? handleClickCopy : null}
                        >
                            {isCopied ? "Copied!" : "Game id: " + uuid}
                        </Button>
                    </CopyToClipboard>
                </OverlayTrigger>

                <div>admin : {admin ? "admin" : "not admin"}</div>

                <ListGroup variant="flush">
                    {users.map((u, i) => (
                        <ListGroup.Item key={i}>{u}</ListGroup.Item>
                    ))}
                </ListGroup>

                <Chat />
                {admin && <Button variant="success">Start the game</Button>}
            </Container>
        </div>
    );
}

export { Lobby };
