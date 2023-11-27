import React from "react";

const Modal = ({ isOpen, onClose, teamName, players, card }) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div className="bg-white p-6 rounded-md max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">
          {teamName ? teamName + " Players" : ""}
        </h2>
        {players?.map((player) => (
          <p key={player} className="mb-2 inline mr-2">
            {player},
          </p>
        ))}
        <img
          src={card?.imageSrc}
          className={`h-1/2 w-1/2 xxl:h-3/4 xxl:w-3/4 mx-auto border border-solid rounded shadow-lg`}
        />
        <button
          className="block bg-purple-800 text-white px-4 py-2 rounded-md mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
