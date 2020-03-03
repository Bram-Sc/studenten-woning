import React from 'react';
import Item from './Item';
import Layout from './Layout';

function App() {
  return (
    <body>
      <Layout />
      <div className="flex">
        <Item name="Greg" message="first"/>
        <Item name="Steve" message="second"/>
        <Item name="Bob" message="third"/>
      </div>
    </body>
  );
}

export default App;
