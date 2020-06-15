import React from 'react';
import { Component } from 'react';
import AddItem from '../Containers/AddItem'
import VisisbleItemList from '../Containers/VisisbleItemList'
import Shop from '../Components/Shop'

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
    var { isLoaded } = this.state

    if (!isLoaded) {
      return <div>Loading</div>
    }
    if (localStorage.getItem("JWT") === "null" || localStorage.getItem("JWT") === null) {
      return <div>You are not logged in</div>
    } else {
      return (
        <div>
          <AddItem />
          <div className="flex">
            {this.state.loadedProducts.map(product => {
              return (<Shop product={product} />)
            })}
          </div>
          <VisisbleItemList/>
        </div>
      )
    }
  }
}

export default HomePage;