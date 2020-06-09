import React from 'react';
import "../App.css";

function Item(props) {
  var product = props.product;
  var cartItems;
  
  /*function ProductToCart() {
    console.log("egg")
    
    if (localStorage.getItem("CartItems")===null) {
      cartItems = [product];
    } else {
      cartItems = localStorage.getItem("CartItems");
      cartItems[cartItems.length] = product.id;
    }

    localStorage.setItem("CartItems", cartItems);
  }*/

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