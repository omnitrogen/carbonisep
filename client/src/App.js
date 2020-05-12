import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/main/static/Home";
import Tips from "./components/main/static/Tips";
import Join from "./components/main/static/Join";
import Connexion from "./components/main/static/Connexion";
import StaticFooter from "./components/templates/StaticFooter";
import Login from "./components/main/static/Login";
import Chat from "./components/main/static/Chat";

function App() {
    return (
        <div>
            <div style={{ minHeight: "90vh" }}>
                <Router>
                    <Switch>
                        <Route path="/tips">
                            <Tips />
                        </Route>
                        <Route path="/connexion">
                            <Login />
                        </Route>
                        <Route path="/join">
                            <Join />
                        </Route>
                        <Route path="/chat">
                            <Chat />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <StaticFooter />
        </div>
    );
}

export default App;
