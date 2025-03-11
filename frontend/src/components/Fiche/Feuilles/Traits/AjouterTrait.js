import React, { useState } from 'react';

export default function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Ouvrir la modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            {children}
            <button onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}