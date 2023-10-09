import Player from '../../../../classes/player';
import { formatBonus } from '../../../../utils/format';
import './Caractéristiques.css';
const characteristicsToFilter = ["Constitution", "Force", "Agilité", "Furtivité", "Perception", "Intelligence", "Volonté", ""];

/**
 * @param {Object} props - Les props.
 * @param {Player} props.player - L'objet joueur selectionné, de classe Player.
 */
export default function Caracteristiques({ player }) {
    const { caracsPrincipales, domainesGeneraux, traits } = player;

    const bonusTraits = {
        Constitution:
            [
                { titre: "sos1", value: 1 }
            ],
        Force:
            [
                { titre: "sos1", value: 1 }
            ],
        Agilité:
            [
                { titre: "sos1", value: 1 }
            ],
        Furtivité:
            [
                { titre: "sos1", value: 1 }
            ],
        Perception:
            [
                { titre: "sos1", value: 1 }
            ],
        Intelligence:
            [
                { titre: "sos1", value: 1 }
            ],
        Volonté:
            [
                { titre: "sos1", value: 1 }
            ],
    }

    const totalStats = {
        Constitution: caracsPrincipales.Constitution + domainesGeneraux[0].niveau + 0 + player.statModifiers.getSum('trait', 'Constitution'),
        Force: caracsPrincipales.Force + domainesGeneraux[1].niveau + 0 + player.statModifiers.getSum('trait', 'Force'),
        Agilite: caracsPrincipales.Agilité + domainesGeneraux[2].niveau + 0 + player.statModifiers.getSum('trait', 'Agilité'),
        Furtivite: caracsPrincipales.Furtivité + domainesGeneraux[3].niveau + 0 + player.statModifiers.getSum('trait', 'Furtivité'),
        Perception: caracsPrincipales.Perception + domainesGeneraux[4].niveau + 0 + player.statModifiers.getSum('trait', 'Perception'),
        Intelligence: caracsPrincipales.Intelligence + domainesGeneraux[5].niveau + 0 + player.statModifiers.getSum('trait', 'Intelligence'),
        Volonte: caracsPrincipales.Volonté + domainesGeneraux[6].niveau + 0 + player.statModifiers.getSum('trait', 'Volonté'),
    }

    const headers = Object.keys(caracsPrincipales);
    const totalValues = Object.values(totalStats);

    // Fonction pour obtenir la classe d'intitulé correspondante
    const getClassForIntitule = (intitule) => {
        switch (intitule) {
            case 'Constitution':
                return 'intitule-constitution';
            case 'Force':
                return 'intitule-force';
            case 'Agilité':
                return 'intitule-agilite';
            case 'Furtivité':
                return 'intitule-furtivite';
            case 'Perception':
                return 'intitule-perception';
            case 'Intelligence':
                return 'intitule-intelligence';
            case 'Volonté':
                return 'intitule-volonte';
            default:
                return '';
        }
    };

    return (
        <div className="sheet" >

            <h1 className="sheet-title">Caractéristiques</h1>

            <h2>Principales</h2>

            <table className="caracs-table">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className={`caracs-table-intitule ${getClassForIntitule(header)}`}>
                                {header.slice(0, 3).toUpperCase()}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {totalValues.map((totalValue, index) => (
                            <td key={index} className="caracs-table-value">{totalValue}</td>
                        ))}
                    </tr>
                </tbody>
            </table>

            <div className="carac-all-detail">

                <div className="carac-physique-container">
                    <h3>Physiques</h3>
                    <div className="carac-physique-detail">
                        <ul>
                            <h4>Constitution</h4>
                            <li>Base : {caracsPrincipales.Constitution}</li>
                            <li>Domaine : +{domainesGeneraux[0].niveau}</li>
                            <li>Trait : {formatBonus(player.statModifiers.getSum('trait', 'Constitution'))}
                                <span style={{ opacity: 0.5 }}>
                                    {player.statModifiers.getList('trait', 'Constitution').map(sm => <li>{sm.toString()}</li>)}
                                </span>
                            </li>

                            <li className="carac-detail-total">Total : {totalStats.Constitution}</li>
                        </ul>

                        <ul>
                            <h4>Force</h4>
                            <li>Base : {caracsPrincipales.Force}</li>
                            <li>Domaine : +{domainesGeneraux[1].niveau}</li>
                            <li>Trait : {formatBonus(player.statModifiers.getSum('trait', 'Force'))}
                                <span style={{ opacity: 0.5 }}>
                                    {player.statModifiers.getList('trait', 'Force').map(sm => <li>{sm.toString()}</li>)}
                                </span>
                            </li>

                            <li className="carac-detail-total">Total : {totalStats.Force}</li>
                        </ul>

                        <ul>
                            <h4>Agilité</h4>
                            <li>Base : {caracsPrincipales.Agilité}</li>
                            <li>Domaine : +{domainesGeneraux[2].niveau}</li>
                            <li>Trait : {formatBonus(player.statModifiers.getSum('trait', 'Agilité'))}
                                <span style={{ opacity: 0.5 }}>
                                    {player.statModifiers.getList('trait', 'Agilité').map(sm => <li>{sm.toString()}</li>)}
                                </span>
                            </li>

                            <li className="carac-detail-total">Total : {totalStats.Agilite}</li>
                        </ul>

                        <ul>
                            <h4>Furtivité</h4>
                            <li>Base : {caracsPrincipales.Furtivité}</li>
                            <li>Domaine : +{domainesGeneraux[3].niveau}</li>
                            <li>Trait : {formatBonus(player.statModifiers.getSum('trait', 'Furtivité'))}
                                <span style={{ opacity: 0.5 }}>
                                    {player.statModifiers.getList('trait', 'Furtivité').map(sm => <li>{sm.toString()}</li>)}
                                </span>
                            </li>

                            <li className="carac-detail-total">Total : {totalStats.Furtivite}</li>
                        </ul>

                        <ul>
                            <h4>Perception</h4>
                            <li>Base : {caracsPrincipales.Perception}</li>
                            <li>Domaine : +{domainesGeneraux[4].niveau}</li>
                            <li>Trait : {formatBonus(player.statModifiers.getSum('trait', 'Perception'))}
                                <span style={{ opacity: 0.5 }}>
                                    {player.statModifiers.getList('trait', 'Perception').map(sm => <li>{sm.toString()}</li>)}
                                </span>
                            </li>

                            <li className="carac-detail-total">Total : {totalStats.Perception}</li>
                        </ul>
                    </div>
                </div>

                <div className="carac-mental-container">
                    <h3>Mentales</h3>
                    <div className="carac-mental-detail">
                        <ul>
                            <h4>Intelligence</h4>
                            <li>Base : {caracsPrincipales.Intelligence}</li>
                            <li>Domaine : +{domainesGeneraux[5].niveau}</li>
                            <li>Trait : {formatBonus(player.statModifiers.getSum('trait', 'Intelligence'))}
                                <span style={{ opacity: 0.5 }}>
                                    {player.statModifiers.getList('trait', 'Intelligence').map(sm => <li>{sm.toString()}</li>)}
                                </span>
                            </li>

                            <li className="carac-detail-total">Total : {totalStats.Intelligence}</li>
                        </ul>

                        <ul>
                            <h4>Volonté</h4>
                            <li>Base : {caracsPrincipales.Volonté}</li>
                            <li>Domaine : +{domainesGeneraux[6].niveau}</li>
                            <li>Trait : {formatBonus(player.statModifiers.getSum('trait', 'Volonté'))}
                                <span style={{ opacity: 0.5 }}>
                                    {player.statModifiers.getList('trait', 'Volonté').map(sm => <li>{sm.toString()}</li>)}
                                </span>
                            </li>

                            <li className="carac-detail-total">Total : {totalStats.Volonte}</li>
                        </ul>
                    </div>
                </div>

            </div>


            <h2>Résistances</h2>

            <div className="carac-resistances-detail">

                <div className="carac-resarmu-detail">
                    <h3>Armure</h3>
                </div>

                <div className="carac-resnat-detail">
                    <h3>Résistances naturelles</h3>
                </div>

                <div className="carac-resmag-detail">
                    <h3>Résistances magiques</h3>
                </div>

                <div className="carac-resuni-detail">
                    <h3>Résistance universelle</h3>
                </div>

            </div>


            <h2>Affinités</h2>

            <div className="carac-affinites-detail">

                <div>
                    <h3>s</h3>
                </div>

                <div>
                    <h3>a</h3>
                </div>

                <div>
                    <h3>a</h3>
                </div>

                <div>
                    <h3>s</h3>
                </div>

            </div>
        </div >
    );
}