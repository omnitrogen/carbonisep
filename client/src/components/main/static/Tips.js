import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

export default class Tips extends Component {
    render() {
        return (
            <div className="p-3 d-flex justify-content-center pt-5">
                <div className="border border-dark rounded w-80 p-4">
                    <h1>Conseils et Astuces</h1>
                    <p>
                        Ici tu peux avoir quelques tips pour être plus écolo.
                        <br />
                        Si tu veux qu'on te propose des tips sur-mesure et
                        faciles à faire, tu peux répondre à un questionnaire en
                        te connectant et on t'aidera
                    </p>
                    <Nav.Link href="connexion">
                        <Button variant="primary">
                            Connecte-toi pour répondre au questionnaire!
                        </Button>
                    </Nav.Link>
                    <p>Sinon en voilà quelques-uns:</p>
                    <p>
                        Grosse requête à la BDD des actions juste
                        iciEIUGZFIUEZGFIUEGZJIJFZE
                    </p>
                </div>
            </div>
        );
    }
}
