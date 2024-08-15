import React from 'react';

interface GuessInputProps {
  userInput: string;
  setUserInput: (value: string) => void;
  submitGuess: () => void;
}

const GuessInput: React.FC<GuessInputProps> = ({ userInput, setUserInput, submitGuess }) => {
  return (
    <section className="guess-part">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="userInput">Please make your guess below:</label>
        <input
          type="text"
          id="userInput"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input
          type="button"
          value="Submit"
          onClick={submitGuess}
        />
      </form>
    </section>
  );
};

export default GuessInput;
