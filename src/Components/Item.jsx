import React from 'react';
import "../App.css";

function Item(props) {
  var product = props.product;
  var cartItems;

  return (
    <div className="item">
      <p>Name: {product.name}</p>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Item;