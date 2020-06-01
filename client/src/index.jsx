import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/_helpers";
import WebSocketProvider from "redux/_helpers/websockets";

import { App } from "./components/App/App";

import "./index.css";

render(
    <Provider store={store}>
        <WebSocketProvider>
            <App />
        </WebSocketProvider>
    </Provider>,
    document.getElementById("root")
);
