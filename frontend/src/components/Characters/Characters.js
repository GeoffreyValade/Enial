import React from 'react';
import './Characters.css';
import Portrait from '../Portrait/Portrait';
import PlayersData from '../../datas/joueurs.json';
import NotFound from "../NotFound/NotFound"

export default function Characters() {
    var token = localStorage.getItem("token")
    var userId = localStorage.getItem("userId")

    if (!token) {
        return (<NotFound />);
    }

    else if (userId === "admin") {
        return (
            <div className="pageContainer">
                <h1 id="playersTitle">Personnages joueurs</h1>
                <div className='portrait-grid'>
                    {PlayersData
                        .map(joueur => (
                            <Portrait
                                key={joueur.id}
                                portraitImg={joueur.portrait}
                                portraitName={joueur.prenom + " " + joueur.nom}
                                link={"/characters/" + joueur.id}
                            />
                        ))}
                </div>
            </div>
        );
    }

    else {
        return (
            <div className="pageContainer">
                <h1 id="playersTitle">Personnages joueurs</h1>
                <div className='portrait-grid'>
                    {PlayersData
                        .filter((joueur) => joueur.id === localStorage.userId)
                        .map(joueur => (
                            <Portrait
                                key={joueur.id}
                                portraitImg={joueur.portrait}
                                portraitName={joueur.prenom + " " + joueur.nom}
                                link={"/characters/" + joueur.id}
                            />
                        ))}
                </div>
            </div>
        );
    }
}