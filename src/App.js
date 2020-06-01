import React from 'react';
import HomePage from "./Pages/HomePage.jsx";
import NewProduct from "./Pages/AddProduct";
import Navbar from "./Components/Navbar";
import History from "./Components/History";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router history={History}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/index">
          <Home />
        </Route>
        <Route path="/addProduct">
          <AddProduct />
        </Route>
      </Switch>
    </Router>
  )
}

function Home() {
  return <HomePage />;
}

function AddProduct() {
  return <NewProduct />;
}

export default App;
