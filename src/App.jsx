import { useState } from 'react';
import Form from "./components/form.jsx";
import Message from "./components/message.jsx";
import './App.css'

function App() {
  const [userEmail, setUserEmail] = useState('');

  const handleReceiveData = (data) => {
    setUserEmail(data);
  };

  return (
    <>
      <div>
        <h1>Hello Techtonica</h1>
          {/* 
          This app consists of three main components:
          1. The Form component collects user's email input 
          and send it back to App(parent) component through the `onSendData` function. 

          2. The `App` component stores the user's email in the `userEmail` state 
          via the `handleReceiveData` function. 

          3. The `Message` component receives the `userEmail` prop from the parent component (`App`).
             It renders correct message then.
             The `userEmail` state in `App` determines whether or not the `Message` component is rendered.

          Data flow:
          - `Form` sends email data to `App` via the `onSendData` prop.
          - `App` stores the data in its state and passes it down to the `Message` component.
          - `Message` uses this data to display a personalized message.

          */}
        <Form onSendData={handleReceiveData} />  
        {/* pass the userEmail prop to the Message component to display the email submitted by the user.
        Don't delete this prop passing, as it ensures that the Message component to render the correct message. */}
        {!userEmail ? null : <Message email={userEmail} />}
      </div>
    </>
  )
}

export default App
