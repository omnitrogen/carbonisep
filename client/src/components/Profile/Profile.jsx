import React from "react";
import { useSelector } from "react-redux";

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
