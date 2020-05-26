import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "redux/_actions";

import logo from "assets/carbonisep.png";

function Navigation() {
    const loggedIn = useSelector((state) => state.authentication.loggedIn);
    const alert = useSelector((state) => state.alert);
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(userActions.logout());
    }

    return (
        <div>
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
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                )}
            </Container>
        </div>
    );
}

export { Navigation };
