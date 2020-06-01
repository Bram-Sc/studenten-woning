import React from 'react';
import Item from '../Components/Item';

function HomePage() {
  return (
    <body>
      <div className="flex">
        <Item name="Greg" message="first"/>
        <Item name="Steve" message="second"/>
        <Item name="Bob" message="third"/>
      </div>
    </body>
  );
}

export default HomePage;