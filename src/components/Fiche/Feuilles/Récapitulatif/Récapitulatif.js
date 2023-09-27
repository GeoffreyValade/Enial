import './Récapitulatif.css';

export default function Recapitulatif(props) {

    const { caracs, prenom, nom, surnom, age, resumerp, description } = props;

    return (
        <div className="sheet">
            <h1 className="sheet-title">Fiche récapitulative</h1>

            <div className="all-info-recap">

                <div className="recap-section basics">
                    <ul>
                        <li>Prénom : {prenom}</li>
                        <li>Nom : {nom}</li>
                        <li>Surnoms, titres, autres : {surnom}</li>
                        <li>Âge : {age}</li>
                    </ul>
                </div>

                <div className="recap-section caracs">
                    <ul>
                        {Object.entries(caracs[0]).map(([intitule, valeur], index) => (
                            <li key={index}>{intitule} : {valeur}</li>
                        ))}
                    </ul>
                </div>

                <div className="recap-section roleplay">
                    <ul>
                        <li>Background résumé : {resumerp}</li>
                        <li>Description physique : {description}</li>
                    </ul>
                </div>

            </div>
            
        </div>
    );
}