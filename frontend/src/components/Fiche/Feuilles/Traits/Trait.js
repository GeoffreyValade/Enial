import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export default function Trait({ titre, description, statsOuBonus, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(); // Appeler la fonction onDelete lorsque l'icône de suppression est cliquée
  };

  return (
    <div className="trait-wrapper">
      <ul className="traits-style">
        <span className="trait-titre-style">{titre} : </span>
        <div className="trait-descri-et-stats">
          <li className="trait-lignes-descri-stats">{description}</li>
          <li className="trait-lignes-descri-stats">{statsOuBonus}</li>
        </div>
      </ul>
      <div className="traits-icons">
        <BsFillPencilFill className="trait-unique-icon edit-btn" />
        <BsFillTrashFill
          className="trait-unique-icon delete-btn"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
}