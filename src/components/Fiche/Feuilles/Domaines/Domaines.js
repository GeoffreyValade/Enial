import React from 'react';
import './Domaines.css';
import DomaineMagique from './DomaineMagique.js';
import DomaineGeneral from './DomaineGeneral.js';
import indexmaitrises from '../../../../datas/indexmaitrises.json';

export default function Domaines({ player }) {
    const { domainesMagiques, domainesGeneraux } = player;

    const obtenirNiveau = (points) => {
        let niveauPrecedent = null;

        for (const niveau in indexmaitrises[0].indexDomainesMagiques) {
            const pointsRequis = indexmaitrises[0].indexDomainesMagiques[niveau].pointsRequis;

            if (points >= pointsRequis) {
                niveauPrecedent = niveau;
            } else {
                break;
            }
        }

        return niveauPrecedent ? indexmaitrises[0].indexDomainesMagiques[niveauPrecedent].niveau : 0;
    };

    const obtenirNiveauGeneral = (points) => {
        let niveauPrecedent = null;

        for (const niveau in indexmaitrises[4].indexDomainesGeneraux) {
            const pointsRequis = indexmaitrises[4].indexDomainesGeneraux[niveau].pointsRequis;

            if (points >= pointsRequis) {
                niveauPrecedent = niveau;
            } else {
                break;
            }
        }

        return niveauPrecedent ? indexmaitrises[4].indexDomainesGeneraux[niveauPrecedent].niveau : 0;
    };

    return (
        <div className="sheet">
            <h1 className="sheet-title">Domaines</h1>
            <div className="domainesjoueur-container">
                {domainesMagiques
                    .filter((domaineMagiqueJoueur) => obtenirNiveau(domaineMagiqueJoueur.points) !== 0)
                    .map((domaineMagiqueJoueur, index) => (
                        <div key={index} className="domaine-unique-container">
                            <DomaineMagique
                                title={domaineMagiqueJoueur.title}
                                points={domaineMagiqueJoueur.points}
                                niveau={obtenirNiveau(domaineMagiqueJoueur.points)}
                            />
                        </div>
                    ))
                }
            </div>

            <h2>Domaines niveau 0</h2>
            <div className="domaines0joueur-container">
                {domainesMagiques
                    .filter((domaineMagiqueJoueur) => obtenirNiveau(domaineMagiqueJoueur.points) === 0)
                    .map((domaineMagiqueJoueur, index) => (
                        <div key={index} className="domaine-unique-container">
                            <DomaineMagique
                                title={domaineMagiqueJoueur.title}
                                points={domaineMagiqueJoueur.points}
                                niveau={obtenirNiveau(domaineMagiqueJoueur.points)}
                            />
                        </div>
                    ))
                }

            </div>

            <h2>Domaines généraux</h2>
            <div className="domainesgenerauxjoueur-container">
                {domainesGeneraux
                    .filter((domaineGeneralJoueur) => obtenirNiveauGeneral(domaineGeneralJoueur.points) !== 0)
                    .map((domaineGeneralJoueur, index) => (
                        <div key={index} className="domaine-unique-container">
                            <DomaineGeneral
                                title={domaineGeneralJoueur.title}
                                points={domaineGeneralJoueur.points}
                                niveau={obtenirNiveauGeneral(domaineGeneralJoueur.points)}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}