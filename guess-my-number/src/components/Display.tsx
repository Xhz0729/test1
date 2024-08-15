import React, { useState } from "react";
import "./Display.css";

const Display: React.FC = () => {
  // State variables
  const [randomNum, setRandomNum] = useState<number | null>(null);
  const [guessCnt, setGuessCnt] = useState(0);
  const [guessedNumbers, setGuessedNumbers] = useState<number[]>([]);
  const [range, setRange] = useState("0-100");
  const [feedback, setFeedback] = useState("");
  const [userInput, setUserInput] = useState("");

  // Handle generating the random number
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

    // Generate the random number
    const newRandomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNum(newRandomNum);

    // Reset the game state
    setFeedback("Random number generated, please start guessing");
    setGuessCnt(0);
    setGuessedNumbers([]);
    setUserInput("");
  };

  // Handle submitting the guess
  const submitGuess = () => {
    const guess = parseInt(userInput);

    // Check if the input is a valid number
    if (isNaN(guess)) {
      setFeedback("Please enter a valid number!");
      return;
    }

    if (randomNum !== null) {
      if (guess < randomNum) {
        setFeedback("Too low!");
        setGuessCnt((prevGuessCnt) => prevGuessCnt + 1);
      } else if (guess > randomNum) {
        setFeedback("Too high!");
        setGuessCnt((prevGuessCnt) => prevGuessCnt + 1);
      } else {
        setFeedback("You win!");
        return;
      }

      // Update guessed numbers
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

      <section className="range">
        <label htmlFor="numberRange">
          Please choose the range of the number:
        </label>
        <select
          id="numberRange"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option id="option1" value="0-100">
            0~100
          </option>
          <option id="option2" value="100-1000">
            100~1000
          </option>
          <option id="option3" value="1000-5000">
            1000~5000
          </option>
          <option id="option4" value="5000-10000">
            5000~10000
          </option>
        </select>
      </section>

      <section>
        <h2>Please hit the button to generate a random number</h2>
        <button onClick={generateRandomNumber}>Generate Random Number</button>
        <p id="target">{feedback}</p>
      </section>

      <section className="guess-part">
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="userInput">Please make your guess below:</label>
          <input
            type="text"
            id="userInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <input type="button" value="Submit" onClick={submitGuess} />
        </form>
      </section>

      <p id="count">Guesses made so far: {guessCnt}</p>
      <p id="guessedNumbers">
        Numbers guessed so far: {guessedNumbers.join(", ")}
      </p>
    </div>
  );
};

export default Display;
