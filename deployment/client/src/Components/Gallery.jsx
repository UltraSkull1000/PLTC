import { useState } from "react";
import Modal from "./Modal";

export default function Gallery({ cards }) {
  const [rarityFilter, setRarityFilter] = useState("All");
  const [teamFilter, setTeamFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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
  };
  const handleRarityFilter = (rarity) => {
    setRarityFilter(rarity);
  };
  const openModal = (card) => {
    setIsModalOpen(true);
    setSelectedCard(card);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        teamName={false}
        players={[]}
        card={selectedCard}
      />
      <div className="border border-solid rounded-md py-5">
        <div className="items-center space-x-2 mx-8">
          <select
            value={teamFilter}
            onChange={(e) => handleTeamFilter(e.target.value)}
            className="rounded-md px-2 py-1 bg-purple-900 text-white"
          >
            <option value="All">All Teams</option>
            <option value="AFC Bournemouth">AFC Bournemouth</option>
            <option value="Arsenal">Arsenal</option>
            <option value="Aston Villa">Aston Villa</option>
            <option value="Brentford">Brentford</option>
            <option value="Brighton">Brighton</option>
            <option value="Burnley">Burnley</option>
            <option value="Chelsea">Chelsea</option>
            <option value="Crystal Palace">Crystal Palace</option>
            <option value="Everton">Everton</option>
            <option value="Fulham">Fulham</option>
            <option value="Liverpool">Liverpool</option>
            <option value="Luton Town">Luton Town</option>
            <option value="Manchester City">Manchester City</option>
            <option value="Manchester Utd">Manchester Utd</option>
            <option value="Newcastle Utd">Newcastle Utd</option>
            <option value="Nott'm Forest">Nott'm Forest</option>
            <option value="Sheffield Utd">Sheffield Utd</option>
            <option value="Spurs">Spurs</option>
            <option value="West Ham">West Ham</option>
            <option value="Wolves">Wolves</option>
          </select>

          <select
            value={rarityFilter}
            onChange={(e) => handleRarityFilter(e.target.value)}
            className="rounded-md px-2 py-1 bg-purple-900 text-white"
          >
            <option value="All">All Rarities</option>
            <option value="World Class">World Class</option>
            <option value="Pro">Pro</option>
            <option value="Rare">Rare</option>
            <option value="Common">Common</option>
          </select>
        </div>

        <div className="py-2">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-5">
              {tfilteredCards.map((card) => (
                <div className="group relative">
                  <div className=" mx-auto w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-90">
                    <img
                      src={card.imageSrc}
                      className={`border border-solid bg-transparent h-full w-full object-cover object-center lg:h-full lg:w-full`}
                    />
                  </div>
                  <button
                    onClick={() => openModal(card)}
                    className="my-auto mx-auto hidden absolute inset-0 items-center justify-center w-4/5 h-1/6 text-black bg-gray-100 bg-opacity-75 rounded-md shadow-lg group-hover:flex"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
