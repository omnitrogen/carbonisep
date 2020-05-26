import React, { useEffect } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { alertActions } from "redux/_actions";
import { history } from "redux/_helpers";

import StaticFooter from "components/templates/StaticFooter";
import { Home } from "../Home";
import { Join } from "../../User/Join";
import { Chat } from "../../User/Chat";
import { Tips } from "../Tips";
import { About } from "../About";
import { Profile } from "../../User/Profile";
import { Login } from "../../User/Login";
import { Register } from "../../User/Register";
import { Quiz } from "../../User/Quiz";
import { Game } from "../../Game/Game";
import { NotFound } from "../NotFound";

import logo from "assets/carbonisep.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    const alert = useSelector((state) => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div>
            <div style={{ minHeight: "90vh" }}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/tips" component={Tips} />
                        <Route exact path="/join" component={Join} />
                        <Route exact path="/chat" component={Chat} />
                        <Route exact path="/quiz" component={Quiz} />
                        <Route exact path="/game" component={Game} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
            <StaticFooter />
        </div>
    );
}

export { App };
