import React, { useEffect } from "react";
import {
    Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import { Nav, Navbar, NavItem, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { userActions, alertActions } from "../../_actions";
import { history } from "../../_helpers";

import StaticFooter from "../templates/StaticFooter";
import { Home } from "../Home";
import { Join } from "../Join";
import { Chat } from "../Chat";
import { Tips } from "../Tips";
import { About } from "../About";
import { Profile } from "../Profile";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";

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
                            Carbonisep
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
                        <Route path="/tips" component={Tips} />
                        <Route path="/about" component={About} />
                        <Route path="/join" component={Join} />
                        <Route path="/chat" component={Chat} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
            <StaticFooter />
        </div>
    );
}

export { App };
