import React from 'react';
import './ShowSpell.css';
import TousLesSorts from '../../datas/sorts.json';
import { useParams } from 'react-router-dom'

import NotFound from "../NotFound/NotFound"

export default function ShowSpell() {
    const { id } = useParams();

    // Parcourir chaque domaine
    for (const domaine in TousLesSorts) {
        if (TousLesSorts.hasOwnProperty(domaine)) {
            const domaineData = TousLesSorts[domaine];
            // On dit qu'on va stocker le premier élément de "TousLesSorts"
            // Le premier élément de "TousLesSorts" doit donc toujours être un nom de domaine
            // Ainsi, les données du domaine index sont conservées dans domaineData
    
            
            // A l'intérieur du domaine stocké, on parcourt chaque tiers
            for (const tier in domaineData) {
                if (domaineData.hasOwnProperty(tier)) {
                    const tierData = domaineData[tier];
                    // On dit qu'on va stocker le premier élément du domaine enregistré juste avant
                    // Les éléments qui suivent les domaines doivent donc toujours être des tiers
                    // Ainsi, les données du tiers index sont conservées dans tierData
    

                    // A l'intérieur du tiers stocké, on parcourt chaque élément (sort)
                    for (const spells in tierData) {
                        if (tierData.hasOwnProperty(spells)) {
                            const spell = tierData[spells];
                            // On stock donc les données du premier spell dans tierData

                            const createMarkup = (html) => ({ __html: html });
                            // Cette ligne nous permet de prendre en compte les balises de saut de ligne dans les string des spells


                            // Puis on l'utilise ici, pour checker si l'id du spell enregistré est la bonne. Autrement, on revient au début de la boucle
                            if (spell.id === id) {


                                return (
                                    <div className="sheet">
                                        <h1 className="sheet-title">{spell.label}</h1>
                                        <p dangerouslySetInnerHTML={createMarkup(spell.description)}></p>
                                        <p dangerouslySetInnerHTML={createMarkup(spell.effetinitial)}></p>
                                        {/* dangerouslySetInnerHTML={createMarkup(X)} nous permet de prendre en compte les balises de saut de ligne dans les string des spells */}
                                    </div>
                                );
                            }
                        }
                    }
                }
            }
        }
    }

    // Si le sort n'a pas été trouvé, on renvoie la page NotFound
    return (<NotFound />);
}