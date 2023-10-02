import React, { useState } from "react";
import "./MagicEightBall.css";
import defaultAnswers from "./answers";

const MagicEightBall = ({ answers = defaultAnswers }) => {
  function choice(arr) {
    let randomIdx = Math.floor(Math.random() * 10);
    return arr[randomIdx];
  }

  const [eightBall, setEightBall] = useState({
    msg: "Think of a question",
    color: "grey",
  });

  const giveAnswer = () => {
    setEightBall(choice(answers));
  };

  return (
    <div
      className="MagicEightBall"
      onClick={giveAnswer}
      style={{ backgroundColor: eightBall.color }}
    >
      <h1>{eightBall.msg}</h1>
    </div>
  );
};

export default MagicEightBall;
