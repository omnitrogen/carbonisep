import React, { useEffect } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { userActions, alertActions } from "redux/_actions";
import { history } from "redux/_helpers";

import StaticFooter from "../templates/StaticFooter";
import { Home } from "../Home";
import { Join } from "../Join";
import { Chat } from "../Chat";
import { Tips } from "../Tips";
import { About } from "../About";
import { Profile } from "../Profile";
import { Login } from "../Login";
import { Register } from "../Register";
import { Quiz } from "../Quiz";
import { Game } from "../Game";
import { NotFound } from "../NotFound";

import logo from "assets/carbonisep.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    const loggedIn = useSelector((state) => state.authentication.loggedIn);
    const alert = useSelector((state) => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    function handleLogout() {
        dispatch(userActions.logout());
    }

    return (
        <div>
            <div style={{ minHeight: "90vh" }}>
                <Router history={history}>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand as={Link} to="/">
                            <img
                                src={logo}
                                height="50"
                                className="d-inline-block align-top"
                                alt="Carbonisep"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav variant="pills" className="ml-auto">
                                <Nav.Link as={Link} to="/tips">
                                    tips
                                </Nav.Link>
                                <Nav.Link as={Link} to="/about">
                                    about
                                </Nav.Link>
                                {loggedIn && (
                                    <Nav.Link as={Link} to="/join">
                                        join
                                    </Nav.Link>
                                )}
                                <Nav.Link as={Link} to="/chat">
                                    chat
                                </Nav.Link>
                                {!loggedIn && (
                                    <Nav.Link as={Link} to="/login">
                                        login
                                    </Nav.Link>
                                )}
                                {loggedIn && (
                                    <Nav.Link as={Link} to="/profile">
                                        profile
                                    </Nav.Link>
                                )}
                                {loggedIn && (
                                    <Nav.Link
                                        as={Link}
                                        to="/"
                                        onClick={() => handleLogout()}
                                    >
                                        logout
                                    </Nav.Link>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Container>
                        {alert.message && (
                            <div className={`alert ${alert.type}`}>
                                {alert.message}
                            </div>
                        )}
                    </Container>
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
