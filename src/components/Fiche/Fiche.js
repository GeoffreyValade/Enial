import React, { useContext, useState } from 'react';
import './Fiche.css';
import { PlayersContext } from '../../contexts/PlayersContext';
import { useParams } from 'react-router-dom'

import NotFound from "../NotFound/NotFound"

import InfoRP from "./Feuilles/InfoRP/InfoRP"
import Recapitulatif from "./Feuilles/Récapitulatif/Récapitulatif"
import Caracteristiques from "./Feuilles/Caractéristiques/Caractéristiques"
import Traits from "./Feuilles/Traits/Traits"
import Domaines from "./Feuilles/Domaines/Domaines"
import Inventaire from "./Feuilles/Inventaire/Inventaire"
import SortsEtTechniques from "./Feuilles/SortsEtTechniques/SortsEtTechniques"
import Finances from "./Feuilles/Finances/Finances"



export default function Fiche() {
    const { players } = useContext(PlayersContext);
    const [ongletActif, setOngletActif] = useState('recapitulatif');

    const afficherFeuille = (onglet) => {
        setOngletActif(onglet);
    };

    const { id } = useParams();

    for (var index = 0; index < players.length; index++) {
        if (players[index].id === id) {

            return (
                <div className="boutons-et-fiches">
                    <div className="boutons-fiche">

                        <div className={`bouton-container ${ongletActif === 'recapitulatif' ? 'selected' : ''}`}><button className="bouton-unique-fiche" onClick={() => afficherFeuille('recapitulatif')}>Récapitulatif</button></div>

                        <div className={`bouton-container ${ongletActif === 'inforp' ? 'selected' : ''}`}><button className="bouton-unique-fiche" onClick={() => afficherFeuille('inforp')}>Info RP</button></div>

                        <div className={`bouton-container ${ongletActif === 'caracteristiques' ? 'selected' : ''}`}><button className="bouton-unique-fiche" onClick={() => afficherFeuille('caracteristiques')}>Caractéristiques</button></div>

                        <div className={`bouton-container ${ongletActif === 'traits' ? 'selected' : ''}`}><button className="bouton-unique-fiche" onClick={() => afficherFeuille('traits')}>Traits</button></div>

                        <div className={`bouton-container ${ongletActif === 'domaines' ? 'selected' : ''}`}><button className="bouton-unique-fiche" onClick={() => afficherFeuille('domaines')}>Domaines</button></div>

                        <div className={`bouton-container ${ongletActif === 'sortsettechniques' ? 'selected' : ''}`}><button className="bouton-unique-fiche" onClick={() => afficherFeuille('sortsettechniques')}>Sorts et techniques</button></div>

                        <div className={`bouton-container ${ongletActif === 'inventaire' ? 'selected' : ''}`}><button className="bouton-unique-fiche" onClick={() => afficherFeuille('inventaire')}>Inventaire</button></div>

                        <div className={`bouton-container ${ongletActif === 'finances' ? 'selected' : ''}`}><button className="bouton-unique-fiche" onClick={() => afficherFeuille('finances')}>Finances</button></div>

                    </div>


                    {ongletActif === 'recapitulatif' &&
                        <Recapitulatif
                            caracs={players[index].caracs}
                            prenom={players[index].prenom}
                            nom={players[index].nom}
                            surnom={players[index].surnom}
                            age={players[index].age}
                            resumerp={players[index].resumerp}
                            description={players[index].description}
                            portrait={players[index].portrait}
                            race={players[index].race}
                            sexe={players[index].sexe}
                            domainesmagiquesJoueur={players[index].domainesmagiques}
                            domainesgenerauxJoueur={players[index].domainesgeneraux}
                        />}

                    {ongletActif === 'inforp' &&
                        <InfoRP
                            prenom={players[index].prenom}
                            nom={players[index].nom}
                            surnom={players[index].surnom}
                            age={players[index].age} />}

                    {ongletActif === 'caracteristiques' &&
                        <Caracteristiques
                            caracs={players[index].caracs}
                            domainesgenerauxJoueur={players[index].domainesgeneraux}
                            traits={players[index].traits}
                        />}

                    {ongletActif === 'traits' &&
                        <Traits
                            traits={players[index].traits}
                        />}

                    {ongletActif === 'domaines' &&
                        <Domaines
                            domainesmagiquesJoueur={players[index].domainesmagiques}
                            domainesgenerauxJoueur={players[index].domainesgeneraux}
                        />}

                    {ongletActif === 'sortsettechniques' &&
                        <SortsEtTechniques
                        />}

                    {ongletActif === 'inventaire' &&
                        <Inventaire
                        />}

                    {ongletActif === 'finances' &&
                        <Finances
                        />}

                </div>
            );
        };
    };
    return (<NotFound />)
}