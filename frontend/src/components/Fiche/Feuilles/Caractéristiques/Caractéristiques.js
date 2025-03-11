import './Caractéristiques.css';

const characteristicsToFilter = ["Constitution", "Force", "Agilité", "Furtivité", "Perception", "Intelligence", "Volonté", ""];

class BonusFromTraitsList {
    constructor(traits, caracs) {
        this.bonusFromTraits = {};
        for (const carac of caracs) {
            this.bonusFromTraits[carac] = [];
        }
        traits.forEach(t => {
            t.statsetbonus.forEach(sets => {
                const listOfSets = Object.entries(sets);
                for (const [stat, bonus] of listOfSets) {
                    if (caracs.includes(stat) && !isNaN(bonus)) {
                        this.bonusFromTraits[stat].push(new BonusFromTrait(t?.titre || '?', bonus))
                    }
                }
            })
        });
    }

    getListForCarac(carac) {
        return this.bonusFromTraits[carac];
    }

    getTotalForCarac(carac) {
        return this.bonusFromTraits[carac]?.reduce((accumulator, bonus) => accumulator + bonus.value, 0);
    }

    toHtmlForCarac(carac) {
        return <ul>
            {this.bonusFromTraits[carac].map((bonus) => <li>{bonus?.toString()}</li>)}
        </ul>
    }
}

function formatBonus(bonus) {
    if (isNaN(bonus)) {
        return bonus;
    }
    return `${bonus >= 0 ? '+' : ''}${bonus}`;
}

class BonusFromTrait {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    toString() {
        return `${this.name} : ${formatBonus(this.value)}`;
    }
}

export default function Caracteristiques({ caracs, domainesgenerauxJoueur, traits }) {


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

    const bonusFromTraits = new BonusFromTraitsList(traits, characteristicsToFilter);

    const totalStats = {
        Constitution: caracs[0].Constitution + domainesgenerauxJoueur[0].niveau + 0 + bonusFromTraits.getTotalForCarac('Constitution'),
        Force: caracs[0].Force + domainesgenerauxJoueur[1].niveau + 0 + bonusFromTraits.getTotalForCarac('Force'),
        Agilite: caracs[0].Agilité + domainesgenerauxJoueur[2].niveau + 0 + bonusFromTraits.getTotalForCarac('Agilité'),
        Furtivite: caracs[0].Furtivité + domainesgenerauxJoueur[3].niveau + 0 + bonusFromTraits.getTotalForCarac('Furtivité'),
        Perception: caracs[0].Perception + domainesgenerauxJoueur[4].niveau + 0 + bonusFromTraits.getTotalForCarac('Perception'),
        Intelligence: caracs[0].Intelligence + domainesgenerauxJoueur[5].niveau + 0 + bonusFromTraits.getTotalForCarac('Intelligence'),
        Volonte: caracs[0].Volonté + domainesgenerauxJoueur[6].niveau + 0 + bonusFromTraits.getTotalForCarac('Volonté'),
    }

    const headers = Object.keys(caracs[0]);
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
        <div className="sheet">

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
                            <li>Base : {caracs[0].Constitution}</li>
                            <li>Domaine : +{domainesgenerauxJoueur[0].niveau}</li>
                            <li>Trait : {formatBonus(bonusFromTraits.getTotalForCarac('Constitution'))}
                                <span style={{ opacity: 0.5 }}>{bonusFromTraits.toHtmlForCarac('Constitution')}</span>
                            </li>

                            <li className="carac-detail-total">Total : {totalStats.Constitution}</li>
                        </ul>

                        <ul>
                            <h4>Force</h4>
                            <li>Base : {caracs[0].Force}</li>
                            <li>Domaine : +{domainesgenerauxJoueur[1].niveau}</li>
                            <li>Trait : {formatBonus(bonusFromTraits.getTotalForCarac('Force'))}
                                <span style={{ opacity: 0.5 }}>{bonusFromTraits.toHtmlForCarac('Force')}</span>
                            </li>

                            <li className="carac-detail-total">Total : {totalStats.Force}</li>
                        </ul>

                        <ul>
                            <h4>Agilité</h4>
                            <li>Base : {caracs[0].Agilité}</li>
                            <li>Domaine : +{domainesgenerauxJoueur[2].niveau}</li>
                            <li>Trait : {formatBonus(bonusFromTraits.getTotalForCarac('Agilité'))}
                                <span style={{ opacity: 0.5 }}>{bonusFromTraits.toHtmlForCarac('Agilité')}</span>
                            </li>

                            <li className="carac-detail-total">Total : {totalStats.Agilite}</li>
                        </ul>

                        <ul>
                            <h4>Furtivité</h4>
                            <li>Base : {caracs[0].Furtivité}</li>
                            <li>Domaine : +{domainesgenerauxJoueur[3].niveau}</li>
                            <li>Trait : {formatBonus(bonusFromTraits.getTotalForCarac('Furtivité'))}
                                <span style={{ opacity: 0.5 }}>{bonusFromTraits.toHtmlForCarac('Furtivité')}</span>
                            </li>

                            <li className="carac-detail-total">Total : {totalStats.Furtivite}</li>
                        </ul>

                        <ul>
                            <h4>Perception</h4>
                            <li>Base : {caracs[0].Perception}</li>
                            <li>Domaine : +{domainesgenerauxJoueur[4].niveau}</li>
                            <li>Trait : {formatBonus(bonusFromTraits.getTotalForCarac('Perception'))}
                                <span style={{ opacity: 0.5 }}>{bonusFromTraits.toHtmlForCarac('Perception')}</span>
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
                            <li>Base : {caracs[0].Intelligence}</li>
                            <li>Domaine : +{domainesgenerauxJoueur[5].niveau}</li>
                            <li>Trait : {formatBonus(bonusFromTraits.getTotalForCarac('Intelligence'))}
                                <span style={{ opacity: 0.5 }}>{bonusFromTraits.toHtmlForCarac('Intelligence')}</span>
                            </li>

                            <li className="carac-detail-total">Total : {totalStats.Intelligence}</li>
                        </ul>

                        <ul>
                            <h4>Volonté</h4>
                            <li>Base : {caracs[0].Volonté}</li>
                            <li>Domaine : +{domainesgenerauxJoueur[6].niveau}</li>
                            <li>Trait : {formatBonus(bonusFromTraits.getTotalForCarac('Volonté'))}
                                <span style={{ opacity: 0.5 }}>{bonusFromTraits.toHtmlForCarac('Volonté')}</span>
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
        </div>
    );
}