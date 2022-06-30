import React from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ShoppingCart.scss';

const ShoppingCart = ({ setShoppingBasketShow }) => {
  return (
    <button className="shoppingCart">
      <FontAwesomeIcon
        className="icon"
        icon={faCartShopping}
        onClick={() => {
          setShoppingBasketShow(true);
        }}
      />
      <div className="count">15</div>
    </button>
  );
};
export default ShoppingCart;
