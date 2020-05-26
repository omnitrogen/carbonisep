import React from "react";
import { useSelector } from "react-redux";

import { Navigation } from "components/App/Navigation";

function Profile() {
    const user = useSelector((state) => state.authentication.user);

    return (
        <div>
            <Navigation />
            <div>
                Hello {user.firstName} {user.lastName}, or maybe I should call
                you {user.username}!
            </div>
        </div>
    );
}

export { Profile };
