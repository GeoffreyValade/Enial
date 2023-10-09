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

const feuilles = [
    { nom: 'recapitulatif', label: 'Récapitulatif' },
    { nom: 'inforp', label: 'Info RP' },
    { nom: 'caracteristiques', label: 'Caractéristiques' },
    { nom: 'traits', label: 'Traits' },
    { nom: 'domaines', label: 'Domaines' },
    { nom: 'sortsettechniques', label: 'Sorts et techniques' },
    { nom: 'inventaire', label: 'Inventaire' },
    { nom: 'finances', label: 'Finances' },
];

export default function Fiche() {
    const { id } = useParams();

    const [ongletActif, setOngletActif] = useState('recapitulatif');

    const afficherFeuille = (onglet) => {
        setOngletActif(onglet);
    };

    for (var index = 0; index < PlayersData.length; index++) {
        if (PlayersData[index].id === id) {

            return (
                <div className="boutons-et-fiches">
                    <div className="boutons-fiche">

                        {feuilles.map(feuille =>
                            <div className={`bouton-container ${ongletActif === feuille.nom ? 'selected' : ''}`}>
                                <button className="bouton-unique-fiche" onClick={() => afficherFeuille(feuille.nom)}>
                                    {feuille.label}
                                </button>
                            </div>
                        )}

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