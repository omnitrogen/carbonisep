import React, { useState, useEffect, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Container,
    Button,
    InputGroup,
    FormControl,
    Badge,
} from "react-bootstrap";

import { WebSocketContext } from "redux/_helpers/websockets";

function Chat() {
    const [msgInput, setMsgInput] = useState("");

    const user = useSelector((state) => state.authentication.user);
    const uuid = useSelector((state) => state.game.uuid);
    const chats = useSelector((state) => state.game.chatLog);

    const history = useRef();

    const dispatch = useDispatch();
    const ws = useContext(WebSocketContext);

    useEffect(() => {
        ws.sendMessage(uuid, {
            username: user.username,
            message: "joined the chat!",
        });
    }, []);

    useEffect(() => {
        history.current.scrollTop =
            history.current.scrollHeight - history.current.clientHeight;
    }, [chats]);

    const sendMessage = () => {
        if (msgInput) {
            ws.sendMessage(uuid, {
                username: user.username,
                message: msgInput,
            });
            setMsgInput("");
        }
    };

    const handleKeyPress = (target) => {
        if (target.charCode == 13) {
            sendMessage();
        }
    };

    return (
        <Container className="justify-content-center p-5">
            <div
                className="room"
                style={{
                    overflow: "hidden",
                }}
            >
                <div
                    className="history rounded p-3"
                    ref={history}
                    style={{
                        width: "500px",
                        border: "1px solid #ccc",
                        height: "300px",
                        textAlign: "left",
                        overflow: "auto",
                    }}
                >
                    {chats.map((c, i) => (
                        <div key={i}>
                            <Badge pill variant="dark">
                                {c.username}
                            </Badge>{" "}
                            {c.message}
                        </div>
                    ))}
                </div>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Message"
                        aria-label="Message"
                        aria-describedby="basic-addon2"
                        type="text"
                        value={msgInput}
                        onChange={(e) => setMsgInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary" onClick={sendMessage}>
                            Send
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </Container>
    );
}

export { Chat };
