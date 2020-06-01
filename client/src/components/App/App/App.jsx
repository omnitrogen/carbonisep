import React, { useEffect } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { alertActions, gameActions } from "redux/_actions";
import { history } from "redux/_helpers";

import StaticFooter from "components/Templates/StaticFooter";
import { Home } from "components/App/Home";
import { Join } from "components/User/Join";
import { Tips } from "components/App/Tips";
import { About } from "components/App/About";
import { Profile } from "components/User/Profile";
import { Login } from "components/User/Login";
import { Register } from "components/User/Register";
import { Quiz } from "components/User/Quiz";
import { Game } from "components/Game/Game";
import { Lobby } from "components/Game/Lobby";
import { NotFound } from "components/App/NotFound";

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
                        <Route exact path="/quiz" component={Quiz} />
                        <Route exact path="/game" component={Game} />
                        <Route exact path="/lobby" component={Lobby} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
            <StaticFooter />
        </div>
    );
}

export { App };
