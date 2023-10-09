import './Récapitulatif.css';
import { BsSuitHeartFill, BsFillLightningChargeFill, BsEyeFill } from "react-icons/bs";
import { GiMuscleUp, GiHood, GiBrain, GiBrainstorm, GiEmerald, GiRun, GiFist, GiMuscleFat, GiChestArmor } from "react-icons/gi";
import indexmaitrises from '../../../../datas/indexmaitrises.json';

export default function Recapitulatif({ player }) {

    const { domainesGeneraux, domainesMagiques, portrait, caracsPrincipales, prenom, nom, surnom, age, race, sexe, resumerp, description } = player;

    const totalStats = {
        Constitution: caracsPrincipales.Constitution + domainesGeneraux[0].niveau + 0,
        Force: caracsPrincipales.Force + domainesGeneraux[1].niveau + 0,
        Agilite: caracsPrincipales.Agilité + domainesGeneraux[2].niveau + 0,
        Furtivite: caracsPrincipales.Furtivité + domainesGeneraux[3].niveau + 0,
        Perception: caracsPrincipales.Perception + domainesGeneraux[4].niveau + 0,
        Intelligence: caracsPrincipales.Intelligence + domainesGeneraux[5].niveau + 0,
        Volonte: caracsPrincipales.Volonté + domainesGeneraux[6].niveau + 0
    }


    const ressources = {
        Health:
            caracsPrincipales.Constitution * 10
            + caracsPrincipales.Force * 4
            + domainesGeneraux[0].niveau * 3
            + domainesGeneraux[1].niveau,


        Endurance:
            caracsPrincipales.Constitution
            + domainesGeneraux[0].niveau,


        Focus:
            caracsPrincipales.Volonté
            + domainesGeneraux[6].niveau
    }

    const domainesSorted = [...domainesMagiques].sort((a, b) => b.points - a.points);

    const domainesBest = domainesSorted.slice(0, 3);




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



    return (
        <div className="sheet">
            <h1 className="sheet-title">Fiche récapitulative</h1>

            <div className="all-info-recap">

                <div className="recap-first-container">
                    <div className="recap-surname">
                        <span className="recap-first-container-titles">Nom : </span><span>{nom}</span>
                    </div>

                    <div className="recap-names">
                        <div className="recap-name">
                            <span className="recap-first-container-titles">Prénom : </span><span>{prenom}</span>
                        </div>

                        <div className="recap-nickname">
                            <span className="recap-first-container-titles">Surnom, titre : </span><span>{surnom}</span>
                        </div>
                    </div>

                    <div className="recap-race-age-sexe">
                        <div className="recap-race">
                            <span className="recap-first-container-titles">Race : </span><span>{race}</span>
                        </div>

                        <div className="recap-age">
                            <span className="recap-first-container-titles">Âge : </span><span>{age}</span>
                        </div>

                        <div className="recap-sexe">
                            <span className="recap-first-container-titles">Sexe : </span><span>{sexe}</span>
                        </div>
                    </div>
                </div>


                <div className="recap-second-container">

                    <div className="recap-description-background">
                        <div className="recap-description">
                            <span>Description physique :</span>
                            <p>{description}</p>
                        </div>


                        <div className="recap-background">
                            <span>Background résumé :</span>
                            <p>{resumerp}</p>
                        </div>
                    </div>
                    <div className="recap-portrait">
                        <img src={portrait} alt=""></img>
                    </div>
                </div>


                <div className="recap-third-container">
                    <div>
                        <ul>
                            <li><BsSuitHeartFill className="ressources-icons" color="#e30219" /> Vie : {ressources.Health}</li>
                            <li><GiChestArmor className="ressources-icons" color="#2d385c" /> Armure : </li>
                            <li><GiEmerald className="ressources-icons" color="#0841ff" /> Mana : </li>
                            <li><BsFillLightningChargeFill className="ressources-icons" color="#52d62d" /> Endu : {ressources.Endurance} </li>
                            <li><GiBrainstorm className="ressources-icons" color="#a17800" /> Foca : {ressources.Focus}</li>
                        </ul>
                    </div>

                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <th><div className="align-table-content"><GiMuscleFat color="yellow" /> CON</div></th>
                                    <td className="table-total">{totalStats.Constitution}</td>
                                    <td>{caracsPrincipales.Constitution}</td>
                                    <td>+{domainesGeneraux[0].niveau}</td>
                                    <td>[+b]</td>
                                    <td>[+c]</td>
                                    <td>[+d]</td>
                                </tr>

                                <tr>
                                    <th><div className="align-table-content"><GiMuscleUp color="red" /> FOR</div></th>
                                    <td className="table-total">{totalStats.Force}</td>
                                    <td>{caracsPrincipales.Force}</td>
                                    <td>+{domainesGeneraux[1].niveau}</td>
                                    <td>[+b]</td>
                                    <td>[+c]</td>
                                    <td>[+d]</td>
                                </tr>

                                <tr>
                                    <th><div className="align-table-content"><GiRun color="green" /> AGI</div></th>
                                    <td className="table-total">{totalStats.Agilite}</td>
                                    <td>{caracsPrincipales.Agilité}</td>
                                    <td>+{domainesGeneraux[2].niveau}</td>
                                    <td>[+b]</td>
                                    <td>[+c]</td>
                                    <td>[+d]</td>
                                </tr>

                                <tr>
                                    <th><div className="align-table-content"><GiHood /> FURT</div></th>
                                    <td className="table-total">{totalStats.Furtivite}</td>
                                    <td>{caracsPrincipales.Furtivité}</td>
                                    <td>+{domainesGeneraux[3].niveau}</td>
                                    <td>[+b]</td>
                                    <td>[+c]</td>
                                    <td>[+d]</td>
                                </tr>

                                <tr>
                                    <th><div className="align-table-content"><BsEyeFill color="grey" /> PERC</div></th>
                                    <td className="table-total">{totalStats.Perception}</td>
                                    <td>{caracsPrincipales.Perception}</td>
                                    <td>+{domainesGeneraux[4].niveau}</td>
                                    <td>[+b]</td>
                                    <td>[+c]</td>
                                    <td>[+d]</td>
                                </tr>

                                <tr>
                                    <th><div className="align-table-content"><GiBrain color="blue" /> INT</div></th>
                                    <td className="table-total">{totalStats.Intelligence}</td>
                                    <td>{caracsPrincipales.Intelligence}</td>
                                    <td>+{domainesGeneraux[5].niveau}</td>
                                    <td>[+b]</td>
                                    <td>[+c]</td>
                                    <td>[+d]</td>
                                </tr>

                                <tr>
                                    <th><div className="align-table-content"><GiFist color="indigo" /> VOL</div></th>
                                    <td className="table-total">{totalStats.Volonte}</td>
                                    <td>{caracsPrincipales.Volonté}</td>
                                    <td>+{domainesGeneraux[6].niveau}</td>
                                    <td>[+b]</td>
                                    <td>[+c]</td>
                                    <td>[+d]</td>
                                </tr>

                                <tr>
                                    <th></th>
                                    <td className="table-total">Total</td>
                                    <td>Base</td>
                                    <td>Dom.</td>
                                    <td>Traits</td>
                                    <td>Equip.</td>
                                    <td>Autres</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="recap-fourth-container">
                    <h2>Mes domaines magiques préférés</h2>
                    <div className="table-domains">
                        <table>
                            <tbody>
                                <tr>
                                    <th className="prefered-domain">
                                        <span className="domain-title">{domainesBest[0].title}</span>
                                        <span className="domain-niveau">{obtenirNiveau(domainesBest[0].points)}</span>
                                    </th>
                                    <th className="prefered-domain">
                                        <span className="domain-title">{domainesBest[1].title}</span>
                                        <span className="domain-niveau">{obtenirNiveau(domainesBest[1].points)}</span>
                                    </th>
                                    <th className="prefered-domain">
                                        <span className="domain-title">{domainesBest[2].title}</span>
                                        <span className="domain-niveau">{obtenirNiveau(domainesBest[2].points)}</span>
                                    </th>
                                </tr>

                                <tr>
                                    <td className="prefered-domain-value">
                                        Score de maitrise actuel : {domainesBest[0].points}<br />
                                        [Points de maîtrise restants avant prochain niveau] ??</td>
                                    <td className="prefered-domain-value">
                                        Score de maitrise actuel : {domainesBest[1].points}<br />
                                        [Points de maitrise restants avant prochain niveau] ??</td>
                                    <td className="prefered-domain-value">
                                        Score de maitrise actuel : {domainesBest[2].points}<br />
                                        [Points de maitrise restants avant prochain niveau] ??</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}