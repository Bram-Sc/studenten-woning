import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../Components/actions/actions'

const AddToCart = ({ dispatch }, product) => {
  var id = product

  return (
    <button>
      <form
      onSubmit={e => {
        e.preventDefault()
        dispatch(addToCart(id))
      }}
      >
        <button type="submit" value={id}>Add item?</button>
      </form>
    </button>
  )
}

export default connect()(AddToCart)