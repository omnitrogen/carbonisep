import React from "react";

import { Navigation } from "components/App/Navigation";

function NotFound() {
    return (
        <div>
            <Navigation />
            <h1>Error 404 : Page not found</h1>
        </div>
    );
}

export { NotFound };
