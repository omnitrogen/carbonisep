import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, InputGroup, FormControl } from "react-bootstrap";

import { WebSocketContext } from "redux/_helpers/websockets";

function Chat() {
    const [msgInput, setMsgInput] = useState("");

    const user = useSelector((state) => state.authentication.user);
    const uuid = useSelector((state) => state.game.uuid);
    const chats = useSelector((state) => state.game.chatLog);

    const dispatch = useDispatch();
    const ws = useContext(WebSocketContext);

    useEffect(() => {
        ws.sendMessage(uuid, {
            username: user.username,
            message: "joined the chat!",
        });
    }, []);

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
        <div>
            <Container className="justify-content-center p-5">
                <div className="room">
                    <div
                        className="history"
                        style={{
                            width: "800px",
                            border: "1px solid #ccc",
                            height: "300px",
                            textAlign: "left",
                            padding: "10px",
                            overflow: "scroll",
                        }}
                    >
                        {chats.map((c, i) => (
                            <div key={i}>
                                <i>{c.username}:</i> {c.message}
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
                            <Button
                                variant="outline-primary"
                                onClick={sendMessage}
                            >
                                Send
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </Container>
        </div>
    );
}

export { Chat };
