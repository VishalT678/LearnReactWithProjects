import React, { useEffect, useState } from "react";
import Score from "./Score";
import Numbers from "./Numbers";
import RoleDice from "./RoleDice";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules , setShowRules] = useState(false);

  useEffect(() => {
    if (selectedNumber) setError("");
  }, [selectedNumber]);

  const genrateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number please select a number first");
      return;
    }

    const randomNumber = genrateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <div className="flex items-start justify-between w-full max-w-6xl mx-auto px-8 ">
        <Score score={score} />
        <Numbers
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="w-full flex flex-col items-center gap-3 justify-center mt-4">
        <button
          onClick={resetScore}
          className="poppins-medium cursor-pointer hover:bg-black hover:text-white border-2 border-black transition-all duration-300 bg-white text-black px-10 py-1 rounded w-fit"
        >
          Reset Score
        </button>
        <button
        onClick={()=>setShowRules((prev)=>!prev)} 
        className="poppins-medium cursor-pointer hover:bg-white hover:text-black border-2 border-black transition-all duration-300 bg-black text-white px-10 py-1 rounded w-fit">
          {showRules ? "Hide" : "Show"} Rules
        </button>
      </div>
     {showRules && <Rules />}
    </>
  );
};

export default GamePlay;
