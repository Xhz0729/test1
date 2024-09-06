import { useEffect, useState, useContext } from "react";
import { QuizContext } from "../Helpers/Context";

const Quiz = () => {
  // track my score
  const { score, setScore } = useContext(QuizContext);
  // track my game state
  const { setGameState } = useContext(QuizContext);
  //save my questions
  const [questions, setQuestions] = useState([]);
  // track the question index, easy for us go to next question
  const [questionIdx, setQuestionIdx] = useState(0);
  // track user choice
  const [optionChosen, setOptionChosen] = useState("");

  useEffect(() => {
    // Fetch data only when the component mounts
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:8080/api/game");
      const data = await response.json();
      setQuestions(data.results);
    };

    fetchQuestions();
  }, []);
  // next question event handler
  const nextQuestion = () => {
    let updatedScore = score;

    // Check if the answer is correct and update the score
    if (questions[questionIdx].correct_answer === optionChosen) {
      updatedScore = score + 1;
      setScore(updatedScore); // Set the new score
    } else {
      alert(`The right answer is ${questions[questionIdx].correct_answer}`);
    }

    // Move to the next question
    setQuestionIdx(questionIdx + 1);
  };

  // finish Quiz handler
  const finishQuiz = () => {
    if (questions[questionIdx].correct_answer === optionChosen) {
      setScore(score + 1); // Set the new score
    }
    setGameState("ending");
  };

  return (
    <div className="quiz">
      {/* Render your quiz questions */}
      {questions.length > 0 ? (
        <div>
          {/* Quiz logic goes here */}
          <h2>{questions[questionIdx].question}</h2>
          <div className="options">
            <button onClick={() => setOptionChosen("True")}>True</button>
            <button onClick={() => setOptionChosen("False")}>False</button>
          </div>
          <div className="nextBtn">
          {questionIdx === questions.length - 1 ? (
            <button onClick={finishQuiz} className="finishBtn"> Finish Quiz </button>
          ) : (
            <button onClick={nextQuestion} className="nextBtn">Next question</button>
          )}
          </div>
          <div className="score">
            <h2>Your current score is {score}</h2>
          </div>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;
