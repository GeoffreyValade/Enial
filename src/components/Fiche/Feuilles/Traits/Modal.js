import React from "react";

import "./Modal.css";

const caracteristiques = ["Force", "Agilité", "Furtivité", "Perception", "Intelligence", "Volonté"];

export default function Modal({ closeModal }) {
    return (
        <div className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container") closeModal();
            }}>
            <div className="modal">
                <form>
                    <div className="form-group">
                        <label htmlFor="trait">Trait</label>
                        <input name="trait" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input name="description" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="caracteristique">Bonus</label>
                        <select name="caracteristique">
                            {caracteristiques.map((caracteristique, index) => (
                                <option key={index} value={caracteristique}>{caracteristique}</option>
                            ))}
                            <option value="other">Autre</option>
                        </select>
                    </div>

                    <button type="submit" className="modal-btn">Envoyer</button>
                </form>
            </div>
        </div>

    )
}