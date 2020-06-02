import React, { useEffect } from "react";
import { Nav, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import JoinOrCreateGame from "../../Templates/JoinOrCreateGame";
import { useDispatch, useSelector } from "react-redux";

import { Navigation } from "components/App/Navigation";
import game from "assets/game.png";

import { chatActions } from "redux/_actions";

function Home() {
    const dispatch = useDispatch();
    const uuid = useSelector((state) => state.game.uuid);
    const loggedIn = useSelector((state) => state.authentication.loggedIn);

    useEffect(() => {
        dispatch(chatActions.cleanChat(uuid));
    }, []);

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
                    <br />
                    <p>
                        Quoi de mieux qu'un petit jeu entre amis ? Lances la
                        partie dès maintenant en{" "}
                        <Link to="/login">
                            te connectant ou en créant un compte
                        </Link>
                    </p>
                    <p>
                        Tu veux juste avoir quelques astuces pour être écolo ?
                        On a quelques <Link to="/tips">tips</Link> pour toi
                        alors ;)
                    </p>
                    {!loggedIn && (
                        <p>
                            CarbonISEP peut également te proposer des solutions
                            écolos sur mesure, il faut juste remplir un petit
                            questionnaire après s'être{" "}
                            <Link to="/login">connecté</Link>
                        </p>
                    )}
                    {loggedIn && (
                        <p>
                            CarbonISEP peut également te proposer des solutions
                            écolos sur mesure, il faut juste remplir un petit{" "}
                            <Link to="/login">questionnaire</Link>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export { Home };
