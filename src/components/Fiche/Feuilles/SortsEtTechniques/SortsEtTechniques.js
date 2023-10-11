import './SortsEtTechniques.css';
import React, { useState } from 'react';

export default function SortsEtTechniques() {

    const spells = ["Armure d'énergie", "Barrière déflectrice", "Barrière déflectrice", "Boule de feu", "Boule de feu", "Boule de feu", "Boule de feu", "Sort mystère"]
    const generals = ["Esquive", "Charge", "Coup gauche", "Coup droit", "Discrétion", "lol", "Ah bon ?", "Mur"]

    const [skillCategory, setSkillCategory] = useState('spells');

    const afficherSkills = (skills) => {
        setSkillCategory(skills);
    };

    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="sheet">
            <h1 className="sheet-title">Sorts et techniques</h1>

            <div className="skills-sheet-container">

                <div className="left-container">

                    <div className="skills-selection-btn">
                        <button className={skillCategory === 'general' ? 'selected' : ''} onClick={() => afficherSkills('general')}>
                            Général
                        </button>

                        <button className={skillCategory === 'spells' ? 'selected' : ''} onClick={() => afficherSkills('spells')}>
                            Magique
                        </button>
                    </div>

                    <div className="research-skills-container">
                        <label id="search-skill">Je cherche :</label>
                        <input type="text"
                            id="search-skill"
                            name="search-skill"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}></input>
                    </div>

                    {skillCategory === 'spells' && (
                        <div className="magic-container">
                            {spells
                                .filter((spell) => spell.toLowerCase().includes(searchValue.toLowerCase()))
                                .map((spell, index) => (
                                    <div className="spell-container" key={index}>
                                        <p>{spell}</p>
                                    </div>
                                ))}
                        </div>
                    )}

                    {skillCategory === 'general' && (
                        <div className="general-container">
                            {generals
                                .filter((general) => general.toLowerCase().includes(searchValue.toLowerCase()))
                                .map((general, index) => (
                                    <div className="spell-container" key={index}>
                                        <p>{general}</p>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>


                <div className="skill-description-container">

                </div>


            </div>

        </div>
    );
}