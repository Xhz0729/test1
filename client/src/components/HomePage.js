import UserForm from "./User";
import React, { useState } from "react";

const HomePage = (props) => {
  // update my user info
  const [user, setUser] = useState("");

  const handleUser = (text) => {
    setUser(text);
  };

  let message;
  if (props.user) {
    message = `Welcome to my quiz game ${props.user}`;
  } else {
    message = `Welcome to my quiz game`;
  }

  return (
    <div className={"homepage"}>
      <h3>{message}</h3>
      <UserForm grabUser={handleUser} />
    </div>
  );
};

export default HomePage;
