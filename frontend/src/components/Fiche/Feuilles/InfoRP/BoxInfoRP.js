import React from 'react'; // N'oubliez pas d'importer React si ce n'est pas déjà fait
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export default function BoxInfoRP({ title, content }) {

    return (
        <div className="box">
            <div className="inforp-icons">
                <BsFillPencilFill className="inforp-unique-icon edit-btn" />
                <BsFillTrashFill
                    className="inforp-unique-icon delete-btn"
                />
            </div>

            <div className="infos-wrapper">
                <h1 className="box-title">{title}</h1>
                <div className="box-content">
                    {content}
                </div>
            </div>
        </div>
    );
}