import React, { Component } from 'react';
import { useCookies } from 'react-cookie';
import "../App.css";

function Cart(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['cart']);
  var cartItems = []

  if (cookies.cart === undefined) {
    setCookie('cart', [], { path: '/', maxAge: 36000, sameSite: "lax" })
  } else {
    cartItems = cookies.cart
  }

  function EmptyCart() {
    removeCookie('cart', { path: '/', maxAge: 36000, sameSite: "lax" })
  }

  return (
    <div>
      <button onClick={EmptyCart}>Purchase</button>
      {cartItems.map(item => {
        return (
          <dl className="flex">
            <dd className="itemCart">
              <p>{item.name}</p>
              <p>€{item.price}</p>
            </dd>
          </dl>
        )
      })}
    </div>
  )

}
export default Cart