import React from 'react';
import Item from '../Components/Item';
import { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedProducts: [],
      isLoaded: false
    };
  }

  componentDidMount() {
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
        this.setState({ loadedProducts: data });
        console.log(this.state.loadedProducts);
      })
      .catch((err) => console.error(this.props.url, err.toString())
      );
    this.state.isLoaded = true
  }

  render() {
    var { loadedProducts, isLoaded } = this.state

    if (!isLoaded) {
      return <div>Loading</div>
    }
    if (localStorage.getItem("JWT") === "null" || localStorage.getItem("JWT") === null) {
      return <div>You are not logged in</div>
    } else {
      return (
        <div className="flex">
          {loadedProducts.map(product => {
            return (<Item product={product} />)
          })}
        </div>
      )
    }
  }
}

export default HomePage;