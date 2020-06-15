import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './Components/Reducer';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import * as types from './Components/actions/actions'
import { Provider } from 'react-redux';

const store = createStore(reducer);

// Log the initial state
console.log("egg")
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(types.addTodo('Learn about actions'))
store.dispatch(types.addTodo('Learn about reducers'))
store.dispatch(types.addTodo('Learn about store'))
store.dispatch(types.addToCart(3))
store.dispatch(types.addToCart(4))

//unsubscribe()

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
