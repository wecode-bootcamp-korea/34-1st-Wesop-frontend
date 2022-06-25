import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ShoppingCart.scss';

const ShoppingCart = props => {
  return (
    <button className="shoppingCart">
      <FontAwesomeIcon className="icon" icon={faCartShopping} />
      <div className="count">15</div>
    </button>
  );
};
export default ShoppingCart;
