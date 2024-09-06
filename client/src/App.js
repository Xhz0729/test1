import "./App.css";
import React, { useState, useContext } from "react";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";
import End from "./components/End";
// import UserForm from "./components/User";
import { QuizContext } from "./Helpers/Context";

function App() {
  // user score
  const [score, setScore] = useState(0);

  // my page initilized as welcome message
  const [gameState, setGameState] = useState("homepage");

  return (
    <div className="App">
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "homepage" && <HomePage />}
        {/* Only when we recieve user input, we move to quiz part */}
        {gameState === "quiz" ? <Quiz /> : null}
        
        {gameState === "ending" && <End />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
