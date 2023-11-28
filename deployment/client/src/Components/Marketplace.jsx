import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Gallery from "./Gallery";

const Marketplace = () => {
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    const fetchUserCards = async () => {
      try {
        const response = await fetch(
          "{{baseUrl}}/user/:username/cards /* actually whatever the cards i pulled are*/"
        );
        if (response.ok) {
          const userCardsData = await response.json();
          setUserCards(userCardsData);
        } else {
          console.error("Failed to fetch user cards");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    fetchUserCards();
  }, []);
  const [selectedPack, setSelectedPack] = useState("Standard");
  const packs = {
    Standard: 500,
    Premium: 1500,
    Professional: 3000,
    "Balon D'or": 7000,
  };
  const bgcolors = {
    Standard: "bg-white",
    Premium: "bg-green-200",
    Professional: "bg-orange-200",
    "Balon D'or": "bg-purple-200",
  };

  const handlePackSelection = (pack) => {
    setSelectedPack(pack);
  };

  const buyPack = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://mabadmlo.xyz/store/packs/buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": Cookies.get("X-API-KEY"),
        },
        body: JSON.stringify({ selectedPack }),
      });
      if (response.ok) {
        console.log("Pack has been purchased");
        const { apiKey } = await response.json();
        Cookies.set("X-API-KEY", apiKey);
      } else {
        console.error("Pack has not been purchased, try again");
      }
    } catch (error) {
      console.error("Error while purchasing packs:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Card Packs Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.keys(packs).map((pack) => (
          <div
            className={`p-4 rounded-md border ${bgcolors[pack]} ${
              selectedPack === pack ? "border-purple-500" : "border-gray-300"
            } cursor-pointer`}
            onClick={() => {
              handlePackSelection(pack);
            }}
          >
            <h2 className="text-lg font-semibold mb-2">{pack}</h2>
            <p className="text-gray-600">${packs[pack]}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          onClick={() => {
            buyPack();
            <Gallery cards={userCards} />;
          }}
        >
          Purchase {selectedPack} Pack
        </button>
      </div>
    </div>
  );
};

export default Marketplace;
