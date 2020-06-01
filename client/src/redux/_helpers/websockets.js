import React, { createContext } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { chatActions, gameActions } from "redux/_actions";

const WebSocketContext = createContext(null);

export { WebSocketContext };

export default ({ children }) => {
    let socket;
    let ws;

    const dispatch = useDispatch();

    const updateUsers = (uuid) => {
        socket.emit("event://update-users", JSON.stringify(uuid));
        dispatch(gameActions.updateUsers(uuid));
    };

    const sendMessage = (roomId, message) => {
        const payload = {
            roomId: roomId,
            data: message,
        };
        socket.emit("event://send-message", JSON.stringify(payload));
        dispatch(chatActions.updateChatLog(payload));
    };

    if (!socket) {
        socket = io.connect(process.env.REACT_APP_API_URL);

        socket.on("event://get-message", (msg) => {
            const payload = JSON.parse(msg);
            dispatch(chatActions.updateChatLog(payload));
        });

        socket.on("event://get-updated-users", (msg) => {
            const payload = JSON.parse(msg);
            dispatch(gameActions.updateUsers(payload));
        });

        ws = {
            socket: socket,
            sendMessage,
            updateUsers,
        };
    }

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    );
};
