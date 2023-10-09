import { useContext, useState } from 'react';
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

const feuilles = [
    { label: 'Récapitulatif', component: (p) => <Recapitulatif player={p} /> },
    { label: 'RP', component: (p) => <InfoRP player={p} /> },
    { label: 'Caractéristiques', component: (p) => <Caracteristiques player={p} /> },
    { label: 'Traits', component: (p) => <Traits player={p} /> },
    { label: 'Domaines', component: (p) => <Domaines player={p} /> },
    { label: 'techniques', component: (p) => <SortsEtTechniques player={p} /> },
    { label: 'Inventaire', component: (p) => <Inventaire player={p} /> },
    { label: 'Finances', component: (p) => <Finances player={p} /> },
]

const parDefaut = 0;

export default function Fiche() {
    const { players } = useContext(PlayersContext);
    const { id } = useParams();
    const player = players?.find(p => p.id === id);

    const [feuilleActive, setFeuilleActive] = useState(feuilles?.[parDefaut]);

    if (!player) return <NotFound />


    return (
        <div className="boutons-et-fiches">
            <div className="boutons-fiche">
                
                {/** afficher un bouton pour chaque feuille */}
                {feuilles.map(f =>
                    <div className={`bouton-container ${f === feuilleActive ? 'selected' : ''}`}>
                        <button className="bouton-unique-fiche" onClick={() => setFeuilleActive(f)}>
                            {f.label}
                        </button>
                    </div>
                )}

            </div>

            {/** afficher la feuille active */}
            {feuilleActive?.component(player)}

        </div>
    );
}