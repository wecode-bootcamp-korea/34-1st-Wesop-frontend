import React, { useState } from 'react';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import ShoppingBasket from '../ShoppingBasket/ShoppingBasket';

const Layout = ({ children }) => {
  const [shoppingBasketShow, setShoppingBasketShow] = useState(false);
  return (
    <>
      {shoppingBasketShow && (
        <ShoppingBasket
          show={shoppingBasketShow}
          setShoppingBasketShow={setShoppingBasketShow}
        />
      )}
      {children}
    </>
  );
};

export default Layout;
