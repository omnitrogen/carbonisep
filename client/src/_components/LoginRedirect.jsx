import React from "react";
import { Route, Redirect } from "react-router-dom";

export const LoginRedirect = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem("user") ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/auth/login",
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
    // <Route render=<Redirect to={{ pathname: "/", state: { from: props.location } }/>/>
);
