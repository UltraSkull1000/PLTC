import { useState } from "react";

const PackMarketplace = () => {
  const [selectedPack, setSelectedPack] = useState("Standard");
  const packs = {
    Standard: 500,
    Premium: 1500,
    Professional: 3000,
    "Balon D'or": 7000,
  };

  const handlePackSelection = (pack) => {
    setSelectedPack(pack);
  };

  const handlePurchase = () => {
    console.log(
      "Purchased ${selectedPack} pack for ${packs[selectedPack]} coins."
    );
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Card Packs Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.keys(packs).map((pack) => (
          <div
            className={`bg-white p-4 rounded-md border ${
              selectedPack === pack ? "border-purple-500" : "border-gray-300"
            } cursor-pointer`}
            onClick={() => handlePackSelection(pack)}
          >
            <h2 className="text-lg font-semibold mb-2">{pack}</h2>
            <p className="text-gray-600">${packs[pack]}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          onClick={handlePurchase}
        >
          Purchase {selectedPack} Pack
        </button>
      </div>
    </div>
  );
};

export default PackMarketplace;
