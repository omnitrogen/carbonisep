import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./_helpers";

// import { App } from "./App";
import { App2 } from "./components/App2";
import "./index.css";

// setup fake backend
import { configureFakeBackend } from "./_helpers";
configureFakeBackend();

render(
    <Provider store={store}>
        <App2 />
    </Provider>,
    document.getElementById("root")
);
