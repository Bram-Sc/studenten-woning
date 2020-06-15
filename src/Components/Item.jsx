// import React from 'react';
// import "../App.css";

// function Item(props) {
//   var product = props.product;

//   return (
//     <div className="item">
//       <p>Name: {product.name}</p>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// }

// export default Item;

import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ onClick, productId }) => (
  <li onClick={onClick}>{productId}</li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired
}

export default Item;