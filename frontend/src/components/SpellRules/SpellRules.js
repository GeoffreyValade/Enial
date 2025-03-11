import React, { useState } from 'react';
import Collapsible from '../Collapsible/Collapsible';
import TousLesSorts from '../../datas/sorts.json'
import { Link } from "react-router-dom";
import './SpellRules.css';

export default function SpellRules() {

    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="sheet">
            <h1 className="sheet-title">Tous les sorts et techniques magiques</h1>
            <div className="rules-skills-sheet-container">
                <div className="rules-filters-container">

                    <div className="rules-research-input-container">
                        <label id="search-skill">Je cherche : </label>
                        <input type="text"
                            id="search-skill"
                            name="search-skill"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}></input>
                    </div>
                </div>




                <div className="rules-magic-container">
                    {Object.keys(TousLesSorts).map((domaineTitle) => {
                        const filteredTiers = Object.keys(TousLesSorts[domaineTitle]).map((tiersTitle) => {
                            const filteredSorts = Object.keys(TousLesSorts[domaineTitle][tiersTitle])
                                .filter((sortId) => TousLesSorts[domaineTitle][tiersTitle][sortId].label.toLowerCase().includes(searchValue.toLowerCase()));

                            // Ne pas afficher le tiers s'il n'y a pas de sorts correspondants :
                            if (filteredSorts.length > 0) {
                                return (
                                    <div key={tiersTitle}>
                                        <h2>{tiersTitle}</h2>
                                        <ul className="rules-displayed-skills">
                                            {filteredSorts.map((filteredSortId) => (
                                                <div key={filteredSortId}>
                                                    <Link to={"/sorts/" + TousLesSorts[domaineTitle][tiersTitle][filteredSortId].id}>
                                                        <div className="rules-container-unique-spell">
                                                            <li id="rules-spell-label">
                                                                {TousLesSorts[domaineTitle][tiersTitle][filteredSortId].label}
                                                            </li>
                                                            <li>
                                                                {TousLesSorts[domaineTitle][tiersTitle][filteredSortId].type1}
                                                            </li>
                                                            <li>
                                                                {TousLesSorts[domaineTitle][tiersTitle][filteredSortId].type2}
                                                            </li>
                                                            <li>
                                                                {TousLesSorts[domaineTitle][tiersTitle][filteredSortId].cout[0].type ?
                                                                    TousLesSorts[domaineTitle][tiersTitle][filteredSortId].cout[0].type.charAt(0).toUpperCase() + TousLesSorts[domaineTitle][tiersTitle][filteredSortId].cout[0].type.slice(1) :
                                                                    null
                                                                } {TousLesSorts[domaineTitle][tiersTitle][filteredSortId].cout[0].valeur} {TousLesSorts[domaineTitle][tiersTitle][filteredSortId].cout[0].ressource}
                                                            </li>
                                                            <li>
                                                                Seuil de réussite : {TousLesSorts[domaineTitle][tiersTitle][filteredSortId].seuil}
                                                            </li>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        });

                        // Ne pas afficher le domaine s'il n'y a pas de tiers avec des sorts correspondants (tiers qui ne s'affichent que quand il contient le sort recherché)
                        if (filteredTiers.some((tier) => tier !== null)) {
                            return (
                                <Collapsible key={domaineTitle} label={domaineTitle}>
                                    {filteredTiers}
                                </Collapsible>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}