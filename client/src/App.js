import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/main/static/Home";
import Tips from "./components/main/static/Tips";
import Connexion from "./components/main/static/Connexion";
import StaticFooter from "./components/templates/StaticFooter";
import ConnectedNavbars from "./components/templates/nav/ConnectedNavbars";

function App() {
    return (
        <div>
            <ConnectedNavbars />
            <Router
                className="position-absolute"
                style={{ left: "15%", right: "15%", overflow: "hidden" }}
            >
                <Switch>
                    <Route path="/tips">
                        <Tips />
                    </Route>
                    <Route path="/connexion">
                        <Connexion />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
            <StaticFooter />
        </div>
    );
}

export default App;
