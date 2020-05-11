import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Chat from "./components/Chat";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/chat">Chat</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/chat">
                        <Chat />
                    </Route>
                    <Route path="/menu">
                        <Menu />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function About() {
    return <h2>About</h2>;
}
