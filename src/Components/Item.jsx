import React from 'react';
import "../App.css";
import { withCookies, useCookies } from 'react-cookie';

function Item(props) {
  var product = props.product;
  var cartedProducts = []
  const [cookies, setCookie] = useCookies(['cart']);

  if (cookies.cart === undefined) {
    setCookie('cart', [], { path: '/', maxAge: 36000, sameSite: "lax" })
  }

  function AddToCart() {
    cartedProducts = [product]

    cookies.cart.forEach(item => {
      cartedProducts.push(item)
    });

    setCookie('cart', cartedProducts, { path: '/', maxAge: 36000, sameSite: "lax" })
    console.log(cookies.cart)
  }

  return (
    <div className="item" id="item">
      <p>Name: {product.name}</p>
      <p>{product.description}</p>
      <p>€{product.price}</p>
      <button onClick={AddToCart} value={product.id} id="addToCart">Add to Cart</button>
    </div>
  );
}

export default withCookies(Item);