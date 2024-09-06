import "./App.css";
import React, { useState, useContext } from "react";
// import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";
import End from "./components/End";
import UserForm from "./components/User";
import { QuizContext } from "./Helpers/Context";

function App() {
  // user score
  const [score, setScore] = useState(0);

  // game state
  const [gameState, setGameState] = useState("homepage");

  // update my user info
  const [user, setUser] = useState("");

  const handleUser = (text) => {
    setUser(text);
  };

  return (
    <div className="App">
      <h1>Welcome to my game {user}</h1>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "homepage" && <UserForm grabUser={handleUser} />}
        {/* Only when we recieve user input, we move to quiz part */}
        {gameState === "quiz" ? <Quiz /> : null}
        {gameState === "ending" && <End />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
