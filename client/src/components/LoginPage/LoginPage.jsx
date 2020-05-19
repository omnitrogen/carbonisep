import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";

import { userActions } from "../../_actions";

import { history } from "../../_helpers";

function LoginPage() {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector((state) => state.authentication.loggingIn);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
        history.push("/");
    }

    return (
        <Container>
            <div className="col-lg-8 offset-lg-2">
                <h2>Login</h2>
                <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            className={
                                "form-control" +
                                (submitted && !username ? " is-invalid" : "")
                            }
                        />
                        {submitted && !username && (
                            <div className="invalid-feedback">
                                Username is required
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            className={
                                "form-control" +
                                (submitted && !password ? " is-invalid" : "")
                            }
                        />
                        {submitted && !password && (
                            <div className="invalid-feedback">
                                Password is required
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">
                            {loggingIn && (
                                <span className="spinner-border spinner-border-sm mr-1"></span>
                            )}
                            Login
                        </button>
                        <Link to="/register" className="btn btn-link">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export { LoginPage };
