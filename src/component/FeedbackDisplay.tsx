import React from 'react';

interface FeedbackDisplayProps {
  guessCnt: number;
  guessedNumbers: number[];
}

const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({ guessCnt, guessedNumbers }) => {
  return (
    <div>
      <p>Guesses made so far: {guessCnt}</p>
      <p>Numbers guessed so far: {guessedNumbers.join(", ")}</p>
    </div>
  );
};

export default FeedbackDisplay;
