import React from 'react';
import Item from './Item';
import Layout from './Layout';

function App() {
  const testMsg = () => {
    console.log("Yes");
  }

  return (
    <body>
      <Layout />
      <button onClick={testMsg}>test</button>
      <div className="flex">
        <Item name="Greg" message="first"/>
        <Item name="Steve" message="second"/>
        <Item name="Bob" message="third"/>
      </div>
    </body>
  );
}

export default App;
