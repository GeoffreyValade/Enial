import './Caractéristiques.css';


export default function Caracteristiques(props) {

    const { caracs } = props;

    return (
            <div className="sheet">
                <h1 className="sheet-title">Caractéristiques</h1>
                <ul>
                {Object.entries(caracs[0]).map(([intitule, valeur], index) => (
                        
                            <li key={index}>{intitule} : {valeur}</li>
                        
                ))}
                </ul>
            </div>
    );
}