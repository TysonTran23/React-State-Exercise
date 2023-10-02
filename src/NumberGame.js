import React, { useState } from "react";
import "./NumberGame.css";

const NumberGame = (props) => {
  const genRandom = () => Math.floor(Math.random() * 10) + 1;
  const restart = () => {
    setTarget(genRandom);
    setGuess(0);
    setGuessCount(0);
  };
  const makeGuess = () => {
    setGuess(genRandom());
    setGuessCount(guessCount + 1);
  };
  const [guess, setGuess] = useState(genRandom());
  const [target, setTarget] = useState(genRandom());
  const [guessCount, setGuessCount] = useState(0);

  const isWinner = target === guess;
  return (
    <div className="NumberGame">
      <h1>Target Number: {target}</h1>
      <h1 className={isWinner ? "winner" : "loser"}>Your Guess: {guess}</h1>
      <h4>Guess #{guessCount}</h4>
      {isWinner ? null : <button onClick={makeGuess}>Generate Num</button>}
      <button onClick={restart}>New Game</button>
    </div>
  );
};

export default NumberGame;