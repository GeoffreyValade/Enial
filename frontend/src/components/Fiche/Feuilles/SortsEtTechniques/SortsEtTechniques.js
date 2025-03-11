import './SortsEtTechniques.css';
import React, { useState } from 'react';


export default function SortsEtTechniques() {

    const spells = ["Armure d'énergie", "Barrière déflectrice", "Boule de feu", "Projectile magique", "Projection optique", "Sort mystère", "Bouclier de mana", "Gardien élémentaire", "Enchantement", "A", "B", "C", "D", "E", "F"]
    const generals = ["Esquive", "Charge", "Coup gauche", "Coup droit", "Discrétion", "lol", "Ah bon ?", "Mur", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]

    const [skillCategory, setSkillCategory] = useState('spells');

    const afficherSkills = (skills) => {
        setSkillCategory(skills);
    };

    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="sheet">
            <h1 className="sheet-title">Sorts et techniques</h1>

            <div className="skills-sheet-container">

                <div className="skills-list-container">

                    <div className="skills-selection-btn">
                        <div className="skills-selection-btn-container">
                            <button className={skillCategory === 'general' ? 'selected' : ''} onClick={() => afficherSkills('general')}>
                                Général
                            </button>
                        </div>

                        <div className="skills-selection-btn-container">
                            <button className={skillCategory === 'spells' ? 'selected' : ''} onClick={() => afficherSkills('spells')}>
                                Magique
                            </button>
                        </div>
                    </div>

                    <div className="research-skills-container">
                        <label id="search-skill">Je cherche : </label>
                        <input type="text"
                            id="search-skill"
                            name="search-skill"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}></input>
                    </div>
                </div>

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
                            <div className="techn-container" key={index}>
                                <p>{general}</p>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}