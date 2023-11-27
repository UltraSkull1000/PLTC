import React, { useState } from "react";

const CardPack = ({ pack, price }) => {
  const [cards, setCards] = useState([]);

  const purchaseCardPack = () => {
    const cardPack = [
      { name: "1", rarity: "Common" },
      { name: "2", rarity: "Rare" },
      { name: "3", rarity: "Pro" },
    ];

    setCards(cardPack);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={purchaseCardPack}
      >
        Purchase Card Pack
      </button>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">{pack} Card Pack:</h3>
        <h4 className="text-lg font-semibold mb-2">Price: {price}</h4>
        <div className="flex flex-wrap">
          {cards.map((card, index) => (
            <div key={index} className="p-2">
              <img
                src={`./cards/${pack}/${card.name}.png`}
                alt={card.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <p className="text-sm mt-1">{`${card.name} (${card.rarity})`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPack;
