import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav, Navbar, NavItem, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../_actions";

import StaticFooter from "../templates/StaticFooter";
import { Home } from "../Home";
import { Join } from "../Join";
import { Chat } from "../Chat";
import { App } from "../../App";
import { Tips } from "../Tips";
import { About } from "../About";
import { Profile } from "../Profile";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

function App2() {
    const loggedIn = useSelector((state) => state.authentication.loggedIn);
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(userActions.logout());
        window.location.reload(true);
    }

    return (
        <div>
            <div style={{ minHeight: "90vh" }}>
                <Router>
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
                                <Nav.Link as={Link} to="/login">
                                    login
                                </Nav.Link>
                                {loggedIn && (
                                    <Nav.Link as={Link} to="/profile">
                                        profile
                                    </Nav.Link>
                                )}
                                {loggedIn && (
                                    //{ <Nav.Link onSelect={handleLogout}>
                                    //    log out
                                    //</Nav.Link> }
                                    <Button
                                        variant="danger"
                                        onClick={() => handleLogout()}
                                    >
                                        logout
                                    </Button>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route path="/tips" component={Tips} />
                        <Route path="/about" component={About} />
                        <Route path="/join" component={Join} />
                        <Route path="/chat" component={Chat} />
                        <Route path="/login" component={App} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Router>
            </div>
            <StaticFooter />
        </div>
    );
}

export { App2 };
