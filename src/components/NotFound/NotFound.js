import React, { useState, useEffect } from 'react'; // Importez useState et useEffect depuis React
import { Link } from "react-router-dom"
import './NotFound.css'

export default function NotFound() {

    const [randomIndex, setRandomIndex] = useState(0);
    const phrases = [
        "Mauvais portail.",
        "99ème étage : le plan du feu.",
        "Comment êtes-vous arrivé ici ?",
        "Retournez d'où vous venez, on n'accepte pas les baskets ici.",
        "Vous surprenez Aïren et Jaline, isolés dans un coin sombre. Sortez vite de ce rêve !",
        "Il nous faut plus de fermes.",
        "Construisez plus de ziggourats.",
        "C'est un piège !",
        "Que voulez-vous, encore ?",
        "Encore vous ?",
        "J'en ai plus qu'assez de vous renvoyer dans votre monde. C'est la dernière fois.",
        "C'est vous le numéro 404 ? Bien. Restez immobile, le temps que je mette en place mon rayon désintégrateur... Là. Juste entre vo-.. Hey ! Revenez !",
        "Je vous le jure, monsieur le briseur de sort, ce n'est pas moi qui ai siphoné toute cette magie !",
        "Essayez de contacter l'administrateur, au 06 87 85 14 97 63 58 47 23 85 12 12 12 12aoezuifaiuefjik",
        "Qui lit vraiment les messages d'erreur, de toutes façons ? Vraiment ?",
        "Non non, je vous le jure. Incorporer ces références, blagues nulles et phrases randoms ne m'a pris qu'une soirée. Il est actuellement 01h55.",
        "Celui qui lit ça est un champion.",
        "Fuck Bolvar",
        "Le Seigneur Xaxa saura vous renvoyer d'où vous venez. Priez assez fort et peut-être vous accordera t-il sa clémence divine... Sinon, cliquez sur le bouton en bas.",
    ];


    useEffect(() => {
        // Génère un nombre aléatoire entre 0 et 1 (pour sélectionner l'une des phrases)
        const random = Math.floor(Math.random() * phrases.length);
        setRandomIndex(random);
    }, [phrases.length]);


    return (
        <div className="container">
            <div className="error-container">
                <div className="texts-error-container">
                <h1>Erreur 404</h1>
                <p>Page introuvable</p>


                    <h2>{phrases[randomIndex]}</h2>
                </div>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}