import React, { useState } from "react";
import "./MagicEightBall.css";
import defaultAnswers from "./answers";

const MagicEightBallAGAIN = ({ answers = defaultAnswers }) => {
  function choice(arr) {
    let randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
  }

  const [eightBall, setEightBall] = useState({
    msg: "Think of a question",
    color: "grey",
  });

  const getAnswer = () => {
    setEightBall(choice(answers));
  };

  return (
    <div
      className="MagicEightBall"
      onClick={getAnswer}
      style={{ backgroundColor: eightBall.color }}
    >
      <h1>{eightBall.msg}</h1>
    </div>
  );
};

export default MagicEightBallAGAIN;
