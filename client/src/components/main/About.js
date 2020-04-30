
import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class About extends Component {
    render() {
        return (
            <div className="p-3 d-flex justify-content-center pt-5">
                <div className="border border-dark rounded w-80 p-4">
                    <h1>Pourquoi CarbonISEP ?</h1>
                    <p>
                        Tout le monde se soucie de l'�cologie, mais la masse d�informations disponibles en effraie plus d�un�
                        <br/>
                        Comment savoir quoi faire pour r�duire ses �missions de CO2?
                        <br />
                        CarbonISEP est un jeu que tu peux faire avec tes potes ou avec ta classe pour d�couvrir les actions que chacun peut r�aliser pour diminuer ses �missions.
                        <br />
                        On aide chaque joueur � prendre conscience de son empreinte carbone, et on lui sugg�re des actions pour la diminuer.
                    </p>
                    <h2>R�gles du jeu</h2>
                    <p>
                        JOLIE PHOTO DE PARTIE MULTI
                        <br/>
                        Le principe est simple. A chaque tour de jeu, tu dois choisir une action � effectuer pour r�duire ton empreinte carbone
                        <br/>
                        Tu disposes de ressources temps et argent. Faire une action n�cessitera de consommer ses ressources, et en �change tu gagnes des points.
                        <br/>
                        Essaie de trouver les meilleures pratiques �cologiques pour gagner un max de points!
                        <br/>
                        <br/>
                        Tu pourrais m�me apprendre une chose ou deux au passage!
                        <br/>
                        Rejoins la partie d�s maintenant
                        <br/>
                        METTRE REJOINDRE ET CREER PARTIE
                    </p>

                    <h2>Conseils et Astuces</h2>
                    <p>
                        Tu veux en savoir plus sur les actions �cologiques possibles ou tu veux apprendre plein de gestes �colos cools?
                        <br />
                        Va voir nos Conseils! LIEN CONSEILS ET ASTUCES
                    </p>
                </div>
            </div>
        );
    }
}