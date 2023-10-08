import React, { useState } from 'react';
import './Fiche.css';
import PlayersData from '../../datas/joueurs.json';
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
    const [ongletActif, setOngletActif] = useState('recapitulatif');

    const afficherFeuille = (onglet) => {
        setOngletActif(onglet);
    };

    const { id } = useParams();

    for (var index = 0; index < PlayersData.length; index++) {
        if (PlayersData[index].id === id) {

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
                            caracs={PlayersData[index].caracs}
                            prenom={PlayersData[index].prenom}
                            nom={PlayersData[index].nom}
                            surnom={PlayersData[index].surnom}
                            age={PlayersData[index].age}
                            resumerp={PlayersData[index].resumerp}
                            description={PlayersData[index].description}
                            portrait={PlayersData[index].portrait}
                            race={PlayersData[index].race}
                            sexe={PlayersData[index].sexe}
                            domainesmagiquesJoueur={PlayersData[index].domainesmagiques}
                            domainesgenerauxJoueur={PlayersData[index].domainesgeneraux}
                        />}

                    {ongletActif === 'inforp' &&
                        <InfoRP
                            prenom={PlayersData[index].prenom}
                            nom={PlayersData[index].nom}
                            surnom={PlayersData[index].surnom}
                            age={PlayersData[index].age} />}

                    {ongletActif === 'caracteristiques' &&
                        <Caracteristiques
                            caracs={PlayersData[index].caracs}
                            domainesgenerauxJoueur={PlayersData[index].domainesgeneraux}
                            traits={PlayersData[index].traits}
                        />}

                    {ongletActif === 'traits' &&
                        <Traits
                            traits={PlayersData[index].traits}
                        />}

                    {ongletActif === 'domaines' &&
                        <Domaines
                            domainesmagiquesJoueur={PlayersData[index].domainesmagiques}
                            domainesgenerauxJoueur={PlayersData[index].domainesgeneraux}
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