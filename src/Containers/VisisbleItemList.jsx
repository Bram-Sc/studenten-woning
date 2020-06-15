import { connect } from 'react-redux'
import React from 'react';
import { Component } from 'react';
import { addToCart, VisibilityFilters } from '../Components/actions/actions'
import ItemList from '../Components/ItemList'

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return (
        items.map(item => {
          return(<div>{item}</div>)
        })
      )
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  products: getVisibleItems(state.products, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)