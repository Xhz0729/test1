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
    // Use the updated score for the alert
    alert(`Your current score is ${updatedScore}`);

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
    <div>
      {/* Render your quiz questions */}
      {questions.length > 0 ? (
        <div>
          {/* Quiz logic goes here */}
          <h1>{questions[questionIdx].question}</h1>
          <div className="options">
            <button onClick={() => setOptionChosen("True")}>True</button>
            <button onClick={() => setOptionChosen("False")}>False</button>
          </div>
          {questionIdx === questions.length - 1 ? (
            <button onClick={finishQuiz}> Finish Quiz </button>
          ) : (
            <button onClick={nextQuestion}>Next question</button>
          )}
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;
