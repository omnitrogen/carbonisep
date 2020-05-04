
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import JoinOrCreateGame from '../../templates/JoinOrCreateGame';

export default class Home extends Component {
    render() {
        return (
            <div className="p-3 d-flex justify-content-center pt-5">
                <div className="border border-dark rounded w-80 p-4">
                    <h1>CarbonISEP</h1>
                    <h2>Agir maintenant</h2>
                    <p>CarbonISEP est l� pour vous motiver � contribuer � l��cologie, on peut donc vous filer quelques petites astuces pour s�y mettre au quotidien :)
                        <br/>
                        Il n�y a pas besoin de consacrer sa vie � l��cologie, mais tous les petits gestes comptent
                        METTRE ICI IMAGE PARTIE
                    </p>
                    <h2>Entrez dans le game</h2>
                    <p>Quoi de mieux qu'un petit jeu entre amis ? Lances la partie d�s maintenant en te cr�ant un compte</p>
                    <JoinOrCreateGame/>
                    <p>Tu veux juste avoir quelques astuces pour �tre �colo ? On a quelques <a href="tips">tips</a> pour toi alors ;)
                        <br/>
                        CarbonISEP peut �galement te proposer des solutions �colos sur mesure, il faut juste remplir un petit questionnaire
                    </p>
                    <Button variant="primary" href="connexion" type="submit" className="mt-3">
                        Connecte-toi pour acc�der au questionnaire!
                    </Button>
                </div>
            </div>
        );
    }
}