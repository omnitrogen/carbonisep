import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, Collapse } from "react-bootstrap";
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
                <Navbar.Brand as={Link} to="/" style={{ outline: 0 }}>
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
                        <Nav.Link as={Link} to="/tips" style={{ outline: 0 }}>
                            tips
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" style={{ outline: 0 }}>
                            about
                        </Nav.Link>
                        {loggedIn && (
                            <Nav.Link
                                as={Link}
                                to="/join"
                                style={{ outline: 0 }}
                            >
                                join
                            </Nav.Link>
                        )}
                        {!loggedIn && (
                            <Nav.Link
                                as={Link}
                                to="/login"
                                style={{ outline: 0 }}
                            >
                                login
                            </Nav.Link>
                        )}
                        {loggedIn && (
                            <Nav.Link
                                as={Link}
                                to="/profile"
                                style={{ outline: 0 }}
                            >
                                profile
                            </Nav.Link>
                        )}
                        {loggedIn && (
                            <Nav.Link
                                as={Link}
                                to="/"
                                onClick={() => handleLogout()}
                                style={{ outline: 0 }}
                            >
                                logout
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Collapse in={alert.message}>
                    <div className="mt-4">
                        <div className={`alert ${alert.type}`}>
                            {alert.message}
                        </div>
                    </div>
                </Collapse>
            </Container>
        </div>
    );
}

export { Navigation };
