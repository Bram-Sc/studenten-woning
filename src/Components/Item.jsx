import React from 'react';
import "../App.css";

function Item(props) {
  return (
    <div className="item">
      <p>Name: {props.name}</p>
      <p>{props.message}</p>
    </div>
  );
}

export default Item;