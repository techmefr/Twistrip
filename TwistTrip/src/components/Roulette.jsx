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
    image: "./src/assets/images/india.png",
    text: "",
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
  ...reproductionArray(prizes, prizes.length * 3),
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
    console.log("🥳 Prize defined! 🥳");
  };

  return (
    <>
      <div className='roulette'>
        <RoulettePro
          prizes={prizeList}
          prizeIndex={prizeIndex}
          start={start}
          onPrizeDefined={handlePrizeDefined}
        />
        <button onClick={handleStart}>Start</button>
      </div>
    </>
  );
}

export default Roulette;
