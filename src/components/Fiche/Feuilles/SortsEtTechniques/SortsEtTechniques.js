import './SortsEtTechniques.css';

export default function SortsEtTechniques({ prenom }) {
    return (
        <div className="sheet">
            <h1 className="sheet-title">Sorts et techniques</h1>
            <ul>
                <li>Prénom : {prenom}</li>
            </ul>
        </div>
    );
}