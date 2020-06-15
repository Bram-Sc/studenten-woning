export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TODO = 'ADD_TODO';
export const RECIEVE_PRODUCTS = 'RECIEVE_PRODUCTS';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ADDED: 'SHOW_ADDED'
}

function GetProducts() {
  fetch('http://localhost:8080/product', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("JWT")
    }
  })
    .then(response => response.json())
    .then(data => {
      //return data;
      return [1, 2];
    })
    .catch((err) => console.error(this.props.url, err.toString())
    );
}

export function recieveProducts(products) {
  return { type: RECIEVE_PRODUCTS, products }
}

export const products = () => dispatch => {
  GetProducts(products => {
    dispatch(recieveProducts(products))
  })
}

export function addToCart(productId) {
  return { type: ADD_TO_CART, productId }
}

export function addQuantity(id) {
  return { type: ADD_QUANTITY, id }
}

export function removeFromCart(index) {
  return { type: REMOVE_FROM_CART, index }
}

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}