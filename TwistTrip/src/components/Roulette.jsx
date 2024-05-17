import { useState } from "react";

import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";

const prizes = [
  {
    image: "./src/assets/images/africa.png",
    text: "Construire un bâtiment en Afrique",
  },
  {
    image: "./src/assets/images/alaska.png",
    text: "Pêche sur un chalutier en Alaska",
  },
  {
    image: "./src/assets/images/boudhism.png",
    text: "Temple bouddhiste",
  },
  {
    image: "./src/assets/images/china.jpg",
    text: "Pêche en Chine",
  },
  {
    image: "./src/assets/images/desert.png",
    text: "Trekking dans le désert",
  },
  {
    image: "./src/assets/images/india.jpg",
    text: "Nettoyage du Gange",
  },

  {
    image: "./src/assets/images/golf.png",
    text: "Arrosage d'un golf",
  },
  {
    image: "./src/assets/images/ireland.png",
    text: "Bain de boue en Ireland",
  },
  {
    image: "./src/assets/images/mexico.png",
    text: "Chasse au trésor dans une décharge",
  },
  {
    image: "./src/assets/images/north-korea.png",
    text: "Découverte de la Corée du Nord",
  },
  {
    image: "./src/assets/images/phallus.png",
    text: "Nettoyage au musée du phallus en Island",
  },
  {
    image: "./src/assets/images/prison.png",
    text: "Méditation dans une prison en Turquie",
  },
  {
    image: "./src/assets/images/restaurant.png",
    text: "Serveur dans un buffet à volonté",
  },
  {
    image: "./src/assets/images/rice.jpg",
    text: "Travail dans une rizière",
  },
  {
    image: "./src/assets/images/somalia.png",
    text: "Régime en Somalie",
  },
  {
    image: "./src/assets/images/tchernobyl.png",
    text: "Rave party à Tchernobyl",
  },
  {
    image: "./src/assets/images/turkey.png",
    text: "Confection de kebab en Turquie",
  },
];

const winPrizeIndex = 0;

const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill("_")
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedPrizeList = [
  ...prizes,
  ...reproductionArray(prizes, prizes.length * 18),
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const prizeList = reproducedPrizeList.map((prize) => ({
  ...prize,
  id:
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : generateId(),
}));

function Roulette() {
  const [start, setStart] = useState(false);

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    alert("Vous partez arroser les terrains de Golf en Arabie Saoudite");
  };

  return (
    <>
      <div className="roulette">
        <RoulettePro
          prizes={prizeList}
          prizeIndex={prizeIndex}
          start={start}
          onPrizeDefined={handlePrizeDefined}
          soundWhileSpinning="https://react-roulette-pro.ivanadmaers.com/assets/f3722b4574da2a35a4ef.mp3"
        />
        <button onClick={handleStart}>Start</button>
      </div>
    </>
  );
}

export default Roulette;
