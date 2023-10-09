// Nous sommes sur la page où tous les personnages apparaissent

import React from 'react';
import './Characters.css';
import Portrait from '../Portrait/Portrait';
import { PlayersContext } from '../../contexts/PlayersContext';

export default function Characters() {
    const { players } = useContext(PlayersContext);

    // Sur les portraits, inclure une fonction pour aller chercher toutes les images en BDD et faire que pour chaque éléments dans la data "joueurs.json", on crée 1 portrait
    return (

        <div className="pageContainer">
            <h1 id="playersTitle">Personnages joueurs</h1>
            <div className='portrait-grid'>
                {players.map(joueur => <Portrait key={joueur.id} portraitImg={joueur.portrait} portraitName={joueur.prenom + " " + joueur.nom} link={"/characters/" + joueur.id} />)}
            </div>
        </div>
    );
}