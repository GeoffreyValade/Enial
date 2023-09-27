// Nous sommes sur le composant "navbar", qui sera toujours affichée sur les pages de l'app et qui permettra de naviguer entre différentes sections
// Les sections de l'app : règles générales / règles magie des arcanes / l'oeil de la tempête / personnage(s) / le groupe

import React from 'react';
import {Link} from "react-router-dom"
import './Navbar.css';
import EnialLogo from "../../assets/enial.png"

export default function Navbar() {

// Le composant portrait cherche à récupérer une image de la BDD et à l'appliquer sur lui-même

    return(
        <nav>
            <div>
                <img src={EnialLogo} className="nav-logo" alt="Logo de Enial"></img>
            </div>

            <div className="nav-links">
                <Link to="/rules">Règles : général</Link>
                <Link to="/magicrules">Règles : Magie des arcanes</Link>
                <Link to="/oeil">L'Oeil de la tempête</Link>
                <Link to="/characters">Personnages</Link>
                <Link to="/party">Le groupe</Link>
            </div>
        </nav>
    );
}