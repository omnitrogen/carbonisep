import React from "react";
import JoinOrCreateGame from "../templates/JoinOrCreateGame";

function About() {
    return (
        <div>
            <div className="p-3 d-flex justify-content-center pt-5">
                <div className="border border-dark rounded w-80 p-4">
                    <h1>Pourquoi CarbonISEP ?</h1>
                    <p>
                        Tout le monde se soucie de l'écologie, mais la masse
                        d’informations disponibles en effraie plus d’un…
                        <br />
                        Comment savoir quoi faire pour réduire ses émissions de
                        CO2?
                        <br />
                        CarbonISEP est un jeu que tu peux faire avec tes potes
                        ou avec ta classe pour découvrir les actions que chacun
                        peut réaliser pour diminuer ses émissions.
                        <br />
                        On aide chaque joueur à prendre conscience de son
                        empreinte carbone, et on lui suggère des actions pour la
                        diminuer.
                    </p>
                    <h2>Règles du jeu</h2>
                    <p>
                        JOLIE PHOTO DE PARTIE MULTI
                        <br />
                        Le principe est simple. A chaque tour de jeu, tu dois
                        choisir une action à effectuer pour réduire ton
                        empreinte carbone
                        <br />
                        Tu disposes de ressources temps et argent. Faire une
                        action nécessitera de consommer ses ressources, et en
                        échange tu gagnes des points.
                        <br />
                        Essaie de trouver les meilleures pratiques écologiques
                        pour gagner un max de points!
                        <br />
                        <br />
                        Tu pourrais même apprendre une chose ou deux au passage!
                        <br />
                        Rejoins la partie dès maintenant
                        <br />
                        <JoinOrCreateGame />
                    </p>

                    <h2>Conseils et Astuces</h2>
                    <p>
                        Tu veux en savoir plus sur les actions écologiques
                        possibles ou tu veux apprendre plein de gestes écolos
                        cools?
                        <br />
                        Va voir nos <a href="tips">Conseils et Astuces</a> pour
                        en savoir plus
                    </p>
                </div>
            </div>
        </div>
    );
}

export { About };
