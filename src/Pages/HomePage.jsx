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
      })
      .catch((err) => console.error(this.props.url, err.toString()));
    this.setState.isLoaded = true
  }

  render() {
    const { loadedProducts, isLoaded } = this.state

    if (!isLoaded || localStorage.getItem("JWT") === "null") {
      return <div>Are you logged in?</div>
    } else {
      return (
        <body>
          <div className="flex">
            {loadedProducts.map(product => {
              return (<Item name={product.name} message={product.description} />)
            })}
          </div>
        </body>
      )
    }
  }
}

export default HomePage;