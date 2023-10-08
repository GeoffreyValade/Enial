import React from 'react'; // N'oubliez pas d'importer React si ce n'est pas déjà fait
import './Domaines.css';
import { BsFillPencilFill } from 'react-icons/bs'; // Import de l'icône depuis 'react-icons/bs'
import indexmaitrises from "../../../../datas/indexmaitrises.json"

export default function DomaineGeneral(props) {
    const { title, points, niveau } = props;

    const pointsRequis = niveau < 15 ? indexmaitrises[4].indexDomainesGeneraux[`niveau${niveau + 1}`].pointsRequis : 0;

    return (
        <div className="domaine-wrapper">
            <h1 className="domaine-title">{title}</h1>
            <div className="domaine-info">
                <ul>
                    <li className="">Niveau actuel : {niveau} </li>
                    <li className="">Points acquis : {points}</li>
                    <li className="">Points restants avant prochain niveau : {pointsRequis - points}</li>
                </ul>
            </div>
            <BsFillPencilFill className="domaine-unique-icon edit-btn" />
        </div>
    );
}