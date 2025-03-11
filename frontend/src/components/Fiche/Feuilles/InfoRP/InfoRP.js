import './InfoRP.css';
import BoxInfoRP from './BoxInfoRP.js';

export default function InfoRP({ prenom, nom, surnom, age, inforp }) {

    return (
        <div className="sheet">
            <div className="general-infoRP" >
                <h1 className="sheet-title">Général</h1>
                <ul>
                    <li>Prénom : {prenom}</li>
                    <li>Nom : {nom}</li>
                    <li>Surnoms, titres, autres : {surnom}</li>
                    <li>Âge : {age}</li>
                </ul>
            </div>

            <div className="all-infos">
                {Object.keys(inforp).map((titre, index) => (
                        <BoxInfoRP
                            title={titre}
                            content={inforp[titre]}
                            key={"boxKey" + index}
                        />
                    ))
                }
            </div>

        </div>
    );
}