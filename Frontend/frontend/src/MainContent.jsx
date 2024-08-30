import React, { useState } from 'react';

const MainContent = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:5000/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputValue }),
    })
    .then(response => response.json())
    .then(data => {
      setResponseMessage(data.status);
      console.log('Success:', data);
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <main style={styles.main}>
      <h2>Welcome to My React App</h2>
      <p>This is a simple page built with React and Vite.</p>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Type your message here"
          required
        />
        <button type="submit">Submit</button>
      </form>
      
      {responseMessage && <p>Server Response: {responseMessage}</p>}
    </main>
  );
};

const styles = {
  main: {
    padding: '20px',
    textAlign: 'center',
  }
};

export default MainContent;