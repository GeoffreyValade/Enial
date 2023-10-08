import React, { useState } from "react";
import Trait from "./Trait.js";
import Modal from "./Modal.js";

export default function Traits({ traits }) {
  const [traitsList, setTraitsList] = useState(traits);
  const [modalOpen, setModalOpen] = useState(false);

  function removeTrait(traitId) {
    const updatedTraitsList = traitsList.filter((trait) => trait.id !== traitId);
    setTraitsList(updatedTraitsList);
  }

  return (
    <div className="sheet">
      <h1 className="sheet-title">Traits</h1>
      <div className="traits-container">
        {traits.length === 0 ? (
          <p>Aucun trait à afficher.</p>
        ) : (
          traitsList.map((trait, index) => (
            <div key={index} className="trait-unique-container">
              <Trait
                titre={trait.titre}
                description={trait.description}
                statsOuBonus={trait.statsetbonus.map((stat, index) => (
                  <div key={index}>
                    <ul>
                      {Object.keys(stat).map((key) => (
                        <li key={key}>
                          {key} : {stat[key]}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                onDelete={() => removeTrait(trait.id)}
              />
            </div>
          ))
        )}
      </div>
      <button className="open-modal-btn" onClick={() => setModalOpen(true)}>
        +
      </button>
      {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
    </div>
  );
}