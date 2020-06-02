import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import JoinGame from "./JoinGame";

export default class JoinOrCreateGame extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center pb-4 mw-25">
                <div className="d-flex flex-column justify-content-center">
                    <JoinGame />
                    <div style={{ borderTop: "5px solid grey" }}></div>
                    <Button
                        variant="primary"
                        href="connexion"
                        type="submit"
                        className="mt-3"
                    >
                        Créer un compte
                    </Button>
                </div>
            </div>
        );
    }
}
