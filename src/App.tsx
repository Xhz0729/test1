import React, { useState } from "react";
import RangeSelector from "./component/RangeSelector";
import NumberGenerator from "./component/NumberGenerator";
import GuessInput from "./component/GuessInput";
import FeedbackDisplay from "./component/FeedbackDisplay";
import "./index.css";
import "./App.css"; // Styles

const App: React.FC = () => {
  const [range, setRange] = useState("0-100");
  const [randomNum, setRandomNum] = useState<number | null>(null);
  const [guessCnt, setGuessCnt] = useState(0);
  const [guessedNumbers, setGuessedNumbers] = useState<number[]>([]);
  const [feedback, setFeedback] = useState("");
  const [userInput, setUserInput] = useState("");

  const generateRandomNumber = () => {
    let min = 0,
      max = 100;
    switch (range) {
      case "0-100":
        min = 0;
        max = 100;
        break;
      case "100-1000":
        min = 100;
        max = 1000;
        break;
      case "1000-5000":
        min = 1000;
        max = 5000;
        break;
      case "5000-10000":
        min = 5000;
        max = 10000;
        break;
    }
    const newRandomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNum(newRandomNum);
    setFeedback("Random number generated, please start guessing");
    setGuessCnt(0);
    setGuessedNumbers([]);
    setUserInput("");
  };

  const submitGuess = () => {
    const guess = parseInt(userInput);
    if (isNaN(guess)) {
      setFeedback("Please enter a valid number!");
      return;
    }
    if (randomNum !== null) {
      if (guess < randomNum) {
        setFeedback("Too low!");
        setGuessCnt(guessCnt + 1);
      } else if (guess > randomNum) {
        setFeedback("Too high!");
        setGuessCnt(guessCnt + 1);
      } else {
        setFeedback("You win!");
        return;
      }
      if (guess !== randomNum) {
        setGuessedNumbers([...guessedNumbers, guess]);
      }
    }
  };

  return (
    <div className="game-container">
      <section id="description">
        <h1>Welcome to Guess Number Game</h1>
      </section>

      <RangeSelector range={range} setRange={setRange} />
      <NumberGenerator
        generateRandomNumber={generateRandomNumber}
        feedback={feedback}
      />
      <GuessInput
        userInput={userInput}
        setUserInput={setUserInput}
        submitGuess={submitGuess}
      />
      <FeedbackDisplay guessCnt={guessCnt} guessedNumbers={guessedNumbers} />
    </div>
  );
};

export default App;
