import './Equipement.css';


export default function Equipement(props) {

    const{prenom} = props;

    return (
        <div className="sheet">
            <h1 className="sheet-title">Equipements</h1>
            <ul>
                <li>Prénom : {prenom}</li>
            </ul>
        </div>
    );
}