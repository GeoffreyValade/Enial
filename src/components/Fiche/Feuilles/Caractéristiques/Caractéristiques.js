import './Caractéristiques.css';

export default function Caracteristiques(props) {
    const { caracs, domainesgenerauxJoueur, traits } = props;

    const totalStats = {
        Constitution: caracs[0].Constitution + domainesgenerauxJoueur[0].niveau + 0,
        Force: caracs[0].Force + domainesgenerauxJoueur[1].niveau + 0,
        Agilite: caracs[0].Agilité + domainesgenerauxJoueur[2].niveau + 0,
        Furtivite: caracs[0].Furtivité + domainesgenerauxJoueur[3].niveau + 0,
        Perception: caracs[0].Perception + domainesgenerauxJoueur[4].niveau + 0,
        Intelligence: caracs[0].Intelligence + domainesgenerauxJoueur[5].niveau + 0,
        Volonte: caracs[0].Volonté + domainesgenerauxJoueur[6].niveau + 0
    }

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

    const characteristicsToFilter = ["Constitution", "Force", "Agilité", "Furtivité", "Perception", "Intelligence", "Volonté", ""];

    const filteredTraits = traits.filter((trait) => {
            return characteristicsToFilter.some((characteristic) => trait.statsetbonus[0][characteristic] !== undefined);
        });

    console.log(filteredTraits);
    // .filter() parcourt chaque trait dans le tableau traits.
    // Pour chaque trait, '.some()' est utilisé pour vérifier si au moins une des caractéristiques spécifiées dans characteristicsToFilter (c'est-à-dire characteristic) existe dans trait.statsetbonus[0].
    // Si au moins une des caractéristiques existe dans trait.statsetbonus[0], '.some()' renvoie true pour ce trait, ce qui signifie que le trait est conservé dans le tableau résultant.
    // Si aucune des caractéristiques n'existe dans trait.statsetbonus[0], '.some()' renvoie false pour ce trait, ce qui signifie que le trait est filtré et ne figure pas dans le tableau résultant.

    // filteredTraits nous renvoie un tableau avec tous les traits concernés par les stats présentes dans characteristicsToFilter
    // Donc maintenant, ce qu'on veut, c'est d'extraire les titres et les valeurs des traits, et de les mettre dans le tableau bonusTraits

    const extractedTraits = 0;
    


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
                            <li>Trait : +0</li>

                            <li className="carac-detail-total">Total : {totalStats.Constitution}</li>
                        </ul>

                        <ul>
                            <h4>Force</h4>
                            <li>Base : {caracs[0].Force}</li>
                            <li>Domaine : +{domainesgenerauxJoueur[1].niveau}</li>
                            <li>Trait : +0</li>

                            <li className="carac-detail-total">Total : {totalStats.Force}</li>
                        </ul>

                        <ul>
                            <h4>Agilité</h4>
                            <li>Base : {caracs[0].Agilité}</li>
                            <li>Domaine : +{domainesgenerauxJoueur[2].niveau}</li>
                            <li>Trait : +0</li>

                            <li className="carac-detail-total">Total : {totalStats.Agilite}</li>
                        </ul>

                        <ul>
                            <h4>Furtivité</h4>
                            <li>Base : {caracs[0].Furtivité}</li>
                            <li>Domaine : +{domainesgenerauxJoueur[3].niveau}</li>
                            <li>Trait : +0</li>

                            <li className="carac-detail-total">Total : {totalStats.Furtivite}</li>
                        </ul>

                        <ul>
                            <h4>Perception</h4>
                            <li>Base : {caracs[0].Perception}</li>
                            <li>Domaine : +{domainesgenerauxJoueur[4].niveau}</li>
                            <li>Trait : +0</li>

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
                            <li>Trait : +0</li>

                            <li className="carac-detail-total">Total : {totalStats.Intelligence}</li>
                        </ul>

                        <ul>
                            <h4>Volonté</h4>
                            <li>Base : {caracs[0].Volonté}</li>
                            <li>Domaine : +{domainesgenerauxJoueur[6].niveau}</li>
                            <li>Trait : +0</li>

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