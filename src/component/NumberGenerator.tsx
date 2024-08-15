import React from 'react';

interface NumberGeneratorProps {
  generateRandomNumber: () => void;
  feedback: string;
}

const NumberGenerator: React.FC<NumberGeneratorProps> = ({ generateRandomNumber, feedback }) => {
  return (
    <section>
      <h2>Please hit the button to generate a random number</h2>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      <p>{feedback}</p>
    </section>
  );
};

export default NumberGenerator;
