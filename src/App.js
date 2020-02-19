import React from 'react';
import Message from './Message';

function App() {
  const testMsg = () => {
    console.log("Yes");
  }

  return (
    <div className="app">
      <button onClick={testMsg}>test</button>
      <Message name="Greg" message="first"/>
      <Message name="Steve" message="second"/>
      <Message name="Steve" message="second"/>
    </div>
  );
}

export default App;
