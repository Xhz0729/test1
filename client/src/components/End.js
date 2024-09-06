import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";

function End() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const restartQuiz = () => {
    setGameState("homepage");
    setScore(0);
  };
  return (
    <div>
      <h1>Thank you for playing the quiz game!</h1>
      <h3>Your score is: {score}</h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default End;
