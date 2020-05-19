import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import JoinOrCreateGame from "../../templates/JoinOrCreateGame";

export default class Home extends Component {
  render() {
    return (
      <div className="p-3 d-flex justify-content-center pt-5">
        <div className="border border-dark rounded w-80 p-4">
          <h1>CarbonISEP</h1>
          <h2>Agir maintenant</h2>
          <p>
            CarbonISEP est là pour vous motiver à contribuer à l'écologie, on
            peut donc vous filer quelques petites astuces pour s'y mettre au
            quotidien :)
            <br />
            Il n'y a pas besoin de consacrer sa vie à l'écologie, mais tous les
            petits gestes comptent METTRE ICI IMAGE PARTIE
          </p>
          <h2>Entrez dans le game</h2>
          <p>
            Quoi de mieux qu'un petit jeu entre amis ? Lances la partie dès
            maintenant en te créant un compte
          </p>
          <JoinOrCreateGame />
          <p>
            Tu veux juste avoir quelques astuces pour être écolo ? On a quelques{" "}
            <a href="tips">tips</a> pour toi alors ;)
            <br />
            CarbonISEP peut également te proposer des solutions écolos sur
            mesure, il faut juste remplir un petit questionnaire
          </p>
          <Button
            variant="primary"
            href="connexion"
            type="submit"
            className="mt-3"
          >
            Connecte-toi pour accéder au questionnaire!
          </Button>
        </div>
      </div>
    );
  }
}
