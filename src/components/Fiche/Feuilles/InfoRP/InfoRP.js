import './InfoRP.css';


export default function InfoRP({ player }) {

    const { prenom, nom, surnom, age } = player;

    return (
        <div className="sheet">
            <h1 className="sheet-title">Général</h1>
            <ul>
                <li>Prénom : {prenom}</li>
                <li>Nom : {nom}</li>
                <li>Surnoms, titres, autres : {surnom}</li>
                <li>Âge : {age}</li>
            </ul>
        </div>
    );
}