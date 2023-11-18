import { useState } from "react";

const cards = [
  {
    imageSrc: require("./Img/card.png"),
    rarity: "World Class",
    team: "Team1",
  },
  {
    imageSrc: require("./Img/pro.png"),
    rarity: "Pro",
    team: "Team2",
  },
  {
    imageSrc: require("./Img/common.png"),
    rarity: "Common",
    team: "Team3",
  },
  {
    imageSrc: require("./Img/rare.png"),
    rarity: "Rare",
    team: "Team4",
  },
  {
    imageSrc: require("./Img/rare.png"),
    rarity: "Rare",
    team: "Team1",
  },
  {
    imageSrc: require("./Img/pro.png"),
    rarity: "Pro",
    team: "Team2",
  },
  {
    imageSrc: require("./Img/card.png"),
    rarity: "World Class",
    team: "Team4",
  },
  {
    imageSrc: require("./Img/common.png"),
    rarity: "Common",
    team: "Team1",
  },
];

export default function Gallery() {
  const [rarityFilter, setRarityFilter] = useState("All");
  const rfilteredCards =
    rarityFilter === "All"
      ? cards
      : cards.filter((card) => card.rarity === rarityFilter);

  const [teamFilter, setTeamFilter] = useState("All");
  const tfilteredCards =
    teamFilter === "All"
      ? rfilteredCards
      : rfilteredCards.filter((card) => card.team === teamFilter);

  return (
    <>
      <div className="bg-gray-100 text-white text-center">
        <button
          className="w-1/12 mx-2 mt-2 bg-blue-700 rounded-md px-2 py-1 focus:bg-red-900"
          onClick={() => setTeamFilter("All")}
        >
          All
        </button>
        <button
          className="w-1/12 mx-2 mt-2 bg-blue-700 rounded-md px-2 py-1"
          onClick={() => setTeamFilter("Team1")}
        >
          Team1
        </button>
        <button
          className="w-1/12 mx-2 mt-2 bg-blue-700 rounded-md px-2 py-1"
          onClick={() => setTeamFilter("Team2")}
        >
          Team2
        </button>
        <button
          className="w-1/12 mx-2 mt-2 bg-blue-700 rounded-md px-2 py-1"
          onClick={() => setTeamFilter("Team3")}
        >
          Team3
        </button>
        <button
          className="w-1/12 mx-2 mt-2 bg-blue-700 rounded-md px-2 py-1"
          onClick={() => setTeamFilter("Team4")}
        >
          Team4
        </button>
        <button
          className="w-1/12 mx-2 mt-2 bg-purple-900 rounded-md px-2 py-1"
          onClick={() => setRarityFilter("All")}
        >
          All
        </button>
        <button
          className="w-1/12 mx-2 mt-2 bg-purple-900 rounded-md px-2 py-1"
          onClick={() => setRarityFilter("World Class")}
        >
          World
        </button>
        <button
          className="w-1/12 mx-2 mt-2 bg-purple-900 rounded-md px-2 py-1"
          onClick={() => setRarityFilter("Pro")}
        >
          Pro
        </button>
        <button
          className="w-1/12 mx-2 mt-2 bg-purple-900 rounded-md px-2 py-1"
          onClick={() => setRarityFilter("Common")}
        >
          Common
        </button>
        <button
          className="w-1/12 mx-2 mt-2 bg-purple-900 rounded-md px-2 py-1"
          onClick={() => setRarityFilter("Rare")}
        >
          Rare
        </button>
      </div>
      <div className=" bg-gray-100 rounded:md py-2">
        {teamFilter}
        {rarityFilter}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-5">
            {tfilteredCards.map((card) => (
              <div key={card.id} className="group relative">
                <div className=" mx-auto w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-90">
                  <img
                    src={card.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="text-center font-mono">{card.rarity} Card</div>
                <button
                  onClick={console.log("hi")}
                  className="my-auto mx-auto hidden absolute inset-0 items-center justify-center w-4/5 h-1/6 text-black bg-gray-100 bg-opacity-75 rounded-md shadow-lg group-hover:flex"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
