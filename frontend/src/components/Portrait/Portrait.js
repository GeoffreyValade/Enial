// Nous sommes sur le composant "portrait", qui reprend les images des persos
// Ce composant devra avoir une option pour être cliquable à certains moments et non-cliquables à d'autres

import React from 'react';
import './Portrait.css';

export default function Portrait({ portraitImg, portraitName, link }) {

    // Le composant portrait cherche à récupérer une image, une id, un link et un nom/prénom de la BDD, puis il les applique sur lui-même

    return (
        <div className="portrait-container">
            <a className="portrait-link" href={link}>
                <img className="portrait" src={portraitImg} alt="portrait" />
                <span className="portraitName">{portraitName}</span>
            </a>
        </div>
    );
}