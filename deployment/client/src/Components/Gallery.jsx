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
  const [teamFilter, setTeamFilter] = useState("All");
  const [activeTeamFilter, setActiveTeamFilter] = useState("All");
  const [activeRarityFilter, setActiveRarityFilter] = useState("All");

  const rfilteredCards =
    rarityFilter === "All"
      ? cards
      : cards.filter((card) => card.rarity === rarityFilter);
  const tfilteredCards =
    teamFilter === "All"
      ? rfilteredCards
      : rfilteredCards.filter((card) => card.team === teamFilter);

  const handleTeamFilter = (team) => {
    setTeamFilter(team);
    setActiveTeamFilter(team);
  };
  const handleRarityFilter = (rarity) => {
    setRarityFilter(rarity);
    setActiveRarityFilter(rarity);
  };
  return (
    <>
      <div className="text-white text-center text-sm lg:text-left">
        <button
          className={`w-1/12 mx-2 mt-2 rounded-md px-2 py-1 ${
            activeTeamFilter === "All" ? "bg-purple-600" : "bg-purple-900"
          }`}
          onClick={() => handleTeamFilter("All")}
        >
          All
        </button>
        <button
          className={`w-1/12 mx-2 mt-2 rounded-md px-2 py-1 ${
            activeTeamFilter === "Team1" ? "bg-purple-600" : "bg-purple-900"
          }`}
          onClick={() => handleTeamFilter("Team1")}
        >
          1
        </button>
        <button
          className={`w-1/12 mx-2 mt-2 rounded-md px-2 py-1 ${
            activeTeamFilter === "Team2" ? "bg-purple-600" : "bg-purple-900"
          }`}
          onClick={() => handleTeamFilter("Team2")}
        >
          2
        </button>
        <button
          className={`w-1/12 mx-2 mt-2 rounded-md px-2 py-1 ${
            activeTeamFilter === "Team3" ? "bg-purple-600" : "bg-purple-900"
          }`}
          onClick={() => handleTeamFilter("Team3")}
        >
          3
        </button>
        <button
          className={`w-1/12 mx-2 mt-2 rounded-md px-2 py-1 ${
            activeTeamFilter === "Team4" ? "bg-purple-600" : "bg-purple-900"
          }`}
          onClick={() => handleTeamFilter("Team4")}
        >
          4
        </button>
      </div>
      <div className="text-white text-center text-sm lg:text-left">
        <button
          className={`w-1/12 mx-2 mt-2 rounded-md px-2 py-1 ${
            activeRarityFilter === "All" ? "bg-purple-600" : "bg-purple-900"
          }`}
          onClick={() => handleRarityFilter("All")}
        >
          All
        </button>
        <button
          className={`w-1/12 mx-2 mt-2 rounded-md px-2 py-1 ${
            activeRarityFilter === "World Class"
              ? "bg-purple-600"
              : "bg-purple-900"
          }`}
          onClick={() => handleRarityFilter("World Class")}
        >
          W
        </button>
        <button
          className={`w-1/12 mx-2 mt-2 rounded-md px-2 py-1 ${
            activeRarityFilter === "Pro" ? "bg-purple-600" : "bg-purple-900"
          }`}
          onClick={() => handleRarityFilter("Pro")}
        >
          P
        </button>
        <button
          className={`w-1/12 mx-2 mt-2 rounded-md px-2 py-1 ${
            activeRarityFilter === "Rare" ? "bg-purple-600" : "bg-purple-900"
          }`}
          onClick={() => handleRarityFilter("Rare")}
        >
          R
        </button>
        <button
          className={`w-1/12 mx-2 mt-2 rounded-md px-2 py-1 ${
            activeRarityFilter === "Common" ? "bg-purple-600" : "bg-purple-900"
          }`}
          onClick={() => handleRarityFilter("Common")}
        >
          C
        </button>
      </div>

      <div className="py-2">
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
