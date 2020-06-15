import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ItemList = ({ products, onItemClick }) => (
  <ul>
    {products.map((item, index) => (
      <Item key={item.id} {...item} onClick={() => onItemClick(item.id)} />
    ))}
  </ul>
)
ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      productId: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onItemClick: PropTypes.func.isRequired
}

export default ItemList