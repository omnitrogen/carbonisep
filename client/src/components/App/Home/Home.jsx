import React from "react";
import { Button } from "react-bootstrap";
import JoinOrCreateGame from "../../Templates/JoinOrCreateGame";

import { Navigation } from "components/App/Navigation";
import game from "assets/game.png";

function Home() {
    return (
        <div>
            <Navigation />
            <div className="p-3 d-flex justify-content-center pt-5">
                <div className="border border-dark rounded w-75 p-5">
                    <h1>CarbonISEP</h1>
                    <h2>Agir maintenant</h2>
                    <p>
                        CarbonISEP est là pour vous motiver à contribuer à
                        l'écologie, on peut donc vous filer quelques petites
                        astuces pour s'y mettre au quotidien :)
                        <br />
                        Il n'y a pas besoin de consacrer sa vie à l'écologie,
                        mais tous les petits gestes comptent
                        <div className="d-flex justify-content-center m-5">
                            <img
                                src={game}
                                alt="Game teaser"
                                style={{ width: "50%" }}
                            />
                        </div>
                    </p>
                    <h2>Entrez dans le game</h2>
                    <p>
                        Quoi de mieux qu'un petit jeu entre amis ? Lances la
                        partie dès maintenant en te créant un compte
                    </p>
                    <JoinOrCreateGame />
                    <p>
                        Tu veux juste avoir quelques astuces pour être écolo ?
                        On a quelques <a href="tips">tips</a> pour toi alors ;)
                        <br />
                        CarbonISEP peut également te proposer des solutions
                        écolos sur mesure, il faut juste remplir un petit
                        questionnaire
                    </p>
                    <Button
                        variant="primary"
                        href="login"
                        type="submit"
                        className="mt-3"
                    >
                        Connecte-toi pour accéder au questionnaire!
                    </Button>
                </div>
            </div>
        </div>
    );
}

export { Home };
