import React from 'react';
import "../App.css";
import AddToCart from '../Containers/AddItem'

function Shop(props) {
  var product = props.product;

  return (
    <div className="item">
      <p>Name: {product.name}</p>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <AddToCart product={1}/>
    </div>
  );
}

export default Shop;