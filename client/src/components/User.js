import { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Context";

const UserForm = (props) => {
  const [value, setValue] = useState("");

  // track my game state
  const { setGameState } = useContext(QuizContext);

  const handleSubmit = (e) => {
    // avoid default submit
    e.preventDefault();
    if (!value) return;
    props.grabUser(value);
    setValue("");
    setGameState("quiz");
  };

  return (
    <div className="message">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter your name"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default UserForm;
