import { useState } from 'react';

function Form({ onSendData }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendData = () => {
    // This code sends data from the child form component to the parent component via props.
    // It's important because the parent component needs to handle form updates,
    // Don't delete this code – it ensures proper communication between components!
    onSendData(inputValue);
  };

  return (
    <div>
      <input type="email" placeholder="Please enter your email" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSendData}>Send</button>
    </div>
  );
}

export default Form;