import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
    const user = useSelector((state) => state.authentication.user);

    return (
        <div>
            Hello {user.firstName} {user.lastName}, or maybe I should call you{" "}
            {user.username}!
        </div>
    );
}

export { Profile };
