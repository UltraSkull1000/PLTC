import { useState } from "react";
import Input from "./Input";
const Trading = (cards) => {
  const [selectedCard, setSelectedCard] = useState("");
  const [requestedCard, setRequestedCard] = useState("");

  const handleCardSelection = (card) => {
    setSelectedCard(card);
  };
  const handleCardRequest = (card) => {
    setRequestedCard(card);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Card Trading Page</h1>
      <div className="my-5 flex">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Select Card to Offer:</h3>
          <button
            className={`bg-purple-500 text-white px-4 py-2 rounded ${
              selectedCard ? "opacity-100" : "opacity-50 cursor-not-allowed"
            }`}
            onClick={() => handleCardSelection(selectedCard)}
            disabled={!selectedCard}
          >
            {selectedCard ? `Selected: ${selectedCard.name}` : "Select Card"}
          </button>
        </div>
        <div className=" mx-auto mb-4 w-1/3">
          <h3 className="text-lg font-semibold mb-2">Request Card:</h3>
          <Input placeholder="Select card" />
        </div>
        <button className="bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700">
          Submit Trade Request
        </button>
      </div>
    </div>
  );
};

export default Trading;
