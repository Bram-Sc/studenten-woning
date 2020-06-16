import React from 'react';
import HomePage from "./Pages/HomePage.jsx";
import NewProduct from "./Pages/AddProduct";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Navbar from "./Components/Navbar";
import History from "./Components/History";
import Cart from "./Pages/Cart";
import { withCookies } from 'react-cookie';

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router history={History}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/index">
          <HomePage />
        </Route>
        <Route path="/addProduct">
          <NewProduct />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  )
}

export default withCookies(App);
