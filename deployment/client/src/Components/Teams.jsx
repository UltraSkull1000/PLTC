import React from "react";
import { useState } from "react";
import Modal from "./Modal";
const teams = [
  {
    name: "AFC Bournemouth",
    logo: require("./Img/afcbournemouthlogo.png"),
    players: [
      "Adam Smith",
      "Alex Scott",
      "Antoine Semenyo",
      "Chris Mepham",
      "Dango Ouattara",
      "Darren Randolph",
      "David Brooks",
      "Dominic Solanke",
      "Emiliano Marcondes",
      "Illia Zabarnyi",
      "Ionuț Andrei Radu",
      "Jaidon Anthony",
      "Jamal Lowe",
      "Joe Rothwell",
      "Justin Kluivert",
      "Kieffer Moore",
      "Lewis Cook",
      "Lloyd Kelly",
      "Luis Sinisterra",
      "Marcos Senesi",
      "Marcus Tavernier",
      "Max Aarons",
      "Milos Kerkez",
      "Neto",
      "Philip Billing",
      "Ryan Christie",
      "Ryan Fredericks",
      "Traorè",
      "Tyler Adams",
    ],
    summary:
      "AFC Bournemouth, based on the south coast of England, is a professional football club with a rich history in the English Football League. Known as the Cherries, the team has experienced notable success in recent years, ascending through the divisions to compete in the Premier League. Recognized for their dynamic style of play and passionate fan base, AFC Bournemouth continues to leave a mark in English football",
  },
  {
    name: "Arsenal",
    logo: require("./Img/arsenallogo.png"),
    players: [],
    summary:
      "Arsenal, based in North London, is one of the most successful football clubs in England. With a rich history, they have secured numerous league titles and FA Cups. Known for their attacking style of play, the team boasts a passionate fan base and iconic stadium, the Emirates Stadium.",
  },
  {
    name: "Ashton Villa",
    logo: require("./Img/ashtonvillalogo.png"),
    summary:
      "Aston Villa is a historic English football club based in Birmingham. Renowned for its rich tradition, the team, nicknamed the 'Villans,' has experienced success in both domestic and European competitions. With a strong fan base and a legacy of producing talented players, Aston Villa continues to be a prominent and competitive force in the Premier League.",
  },
  {
    name: "Brentford",
    logo: require("./Img/brentfordlogo.png"),
    summary:
      "Brentford, a dynamic and ambitious team in the Premier League, has made a remarkable ascent in English football. Known for their strategic approach and attacking style, Brentford earned promotion with a potent combination of homegrown talent and astute signings. The team's Griffin Park is an iconic fortress, echoing the enthusiasm of their fervent supporters. Brentford's Premier League journey promises an exciting blend of skill and determination.",
  },
  {
    name: "Brighton",
    logo: require("./Img/brightonlogo.png"),
    summary:
      "Brighton & Hove Albion, commonly known as Brighton, is a professional football team in the English Premier League. Based in Brighton, East Sussex, the club has a distinctive blue and white striped kit. Known for their attractive playing style, Brighton has established itself as a resilient and competitive side in the league, with a focus on nurturing young talent and maintaining a strong fanbase at the Amex Stadium.",
  },
  {
    name: "Brunley",
    logo: require("./Img/brunleylogo.png"),
    summary:
      "Burnley Football Club, based in Lancashire, England, is known for its resilient and hardworking style of play. Nicknamed 'The Clarets,' the team has a rich history and has experienced success both domestically and internationally. Turf Moor serves as their home ground, and Burnley has established itself as a competitive force in the English Premier League, consistently showcasing determination and solid team spirit.",
  },
  {
    name: "Chelsea",
    logo: require("./Img/chelsealogo.png"),
    summary:
      "Chelsea Football Club, based in London, is a prominent force in English football. Known for its rich history and success, Chelsea has won numerous domestic and international honors, including multiple Premier League titles and UEFA Champions League triumphs. The team is renowned for its attacking prowess, defensive solidity, and a passionate fan base. With a star-studded roster and a commitment to excellence, Chelsea remains a powerhouse in the Premier League.",
  },
  {
    name: "Crystal Palace",
    logo: require("./Img/crystalpalacelogo.png"),
    summary:
      "Crystal Palace, based in South London, is a professional football club in the English Premier League. The team, known as the Eagles, has a rich history and plays its home matches at Selhurst Park. Crystal Palace has garnered a reputation for its passionate fan base and competitive performances in the top tier of English football.",
  },
  {
    name: "Everton",
    logo: require("./Img/evertonlogo.png"),
    summary:
      "Everton Football Club, based in Liverpool, England, is a historic and competitive team in the English Premier League. Known as 'The Toffees,' they boast a rich heritage and a passionate fan base. Everton has a storied history of success, with nine league titles and five FA Cup victories, making them a formidable presence in English football. The team's iconic home, Goodison Park, has witnessed memorable moments and showcases the enduring spirit of Everton.",
  },
  {
    name: "Fulham",
    logo: require("./Img/fulhamlogo.png"),
    summary:
      "Fulham Football Club, based in London, has a rich history in English football. Known as 'The Cottagers,' Fulham has experienced periods of success, including reaching the UEFA Europa League final in 2010. The team has a loyal fanbase and plays its home matches at Craven Cottage, a historic stadium on the banks of the River Thames.",
  },
  {
    name: "Liverpool",
    logo: require("./Img/liverpoollogo.png"),
    summary:
      "Liverpool Football Club, based in Liverpool, England, is one of the most successful and storied clubs in English football. Fondly known as 'The Reds,' Liverpool has a rich history of domestic and international success, with numerous league titles and European trophies, including multiple UEFA Champions League victories. Anfield, their iconic home stadium, is synonymous with passionate fan support, and the team is renowned for its attacking style of play under the guidance of esteemed managers like Bill Shankly and Jürgen Klopp.",
  },
  {
    name: "Luton Town",
    logo: require("./Img/lutontownlogo.png"),
    summary:
      "Luton Town, a professional football team in the English Premier League, boasts a rich history and competitive spirit. With a dedicated fan base, the team has shown resilience and determination in the top tier of English football. Luton Town's journey is marked by memorable performances, reflecting the club's commitment to excellence on the field.",
  },
  {
    name: "Manchester City",
    logo: require("./Img/manchestercitylogo.png"),
    summary:
      "Manchester City, a dominant force in English football, boasts an exceptional lineup featuring talents like Kevin De Bruyne and Raheem Sterling. Renowned for their attacking prowess and tactical finesse under manager Pep Guardiola, they secured numerous Premier League titles, solidifying their status as one of the league's elite. With a state-of-the-art stadium and a passionate fan base, Manchester City continues to be a formidable contender in domestic and international competitions.",
  },
  {
    name: "Manchester Utd",
    logo: require("./Img/manchesterutdlogo.png"),
    summary:
      "Manchester United, one of the most storied football clubs globally, is based in Manchester, England. Established in 1878, the team, nicknamed the 'Red Devils,' has a rich history of success, boasting numerous domestic and international titles. With a massive fanbase, iconic players, and a renowned stadium, Old Trafford, Manchester United remains a powerhouse in English football.",
  },
  {
    name: "Newcastle Utd",
    logo: require("./Img/newcastleutdlogo.png"),
    summary:
      "Newcastle United, based in Newcastle upon Tyne, is a historic football club in the English Premier League. Known as the Magpies, the team boasts a passionate fanbase and plays its home matches at St James' Park. With a rich history, Newcastle United has experienced both success and challenges, making it a prominent and resilient presence in English football.",
  },
  {
    name: "Nott'm Forest",
    logo: require("./Img/forestlogo.png"),
    summary:
      "Nottingham Forest Football Club, commonly known as Nott'm Forest, is a historic English football team based in Nottingham. Founded in 1865, the club has a rich legacy, including two European Cup triumphs in 1979 and 1980 under manager Brian Clough. The team currently competes in the EFL Championship and boasts a passionate fan base, known for their unwavering support throughout the club's storied history.",
  },
  {
    name: "Sheffield Utd",
    logo: require("./Img/sheffieldutd.png"),
    summary:
      "Sheffield United, also known as the Blades, is a professional football team based in Sheffield, England. Competing in the Premier League, they have a rich history and are recognized for their distinct red and white striped kits. With Bramall Lane as their home ground, Sheffield United has a dedicated fanbase and has experienced both successes and challenges throughout their football journey.",
  },
  {
    name: "Spurs",
    logo: require("./Img/spurslogo.png"),
    summary:
      "Tottenham Hotspur, commonly known as Spurs, is a top-tier Premier League football team based in London. With a rich history, the club has been a consistent contender in English football, boasting a passionate fan base. Known for its attacking style of play and iconic players, Spurs have competed both domestically and in European competitions, leaving a lasting impact on the footballing world.",
  },
  {
    name: "West Ham",
    logo: require("./Img/westhamlogo.png"),
    summary:
      "West Ham United, based in London, is a prominent English Premier League football team known for its rich history and passionate fanbase. The club has achieved success in domestic and international competitions, with iconic moments etched in football history. Renowned for its attacking style of play and strong performances, West Ham continues to be a formidable presence in the Premier League, captivating fans with thrilling matches and memorable victories.",
  },
  {
    name: "Wolves",
    logo: require("./Img/wolveslogo.png"),
    summary:
      "Wolves, also known as Wolverhampton Wanderers, is a professional football club based in Wolverhampton, England. Founded in 1877, the team has a rich history and has experienced success both domestically and in European competitions. Known for their distinctive gold and black colors, Wolves have a passionate fan base and compete at the highest level in the Premier League.",
  },
];

const Teams = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState({});

  const openModal = (team) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        teamName={selectedTeam.name}
        players={selectedTeam.players || []}
      />
      {teams.map((team) => (
        <div key={team.name} className="bg-gray-100 p-4 rounded-md shadow-md">
          <img src={team.logo} className="w-full h-32 object-contain mb-4" />
          <h2 className="text-xl font-bold mb-2">{team.name}</h2>

          <p className="text-gray-600">{team.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default Teams;
