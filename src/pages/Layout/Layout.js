import React, { useState } from 'react';
import ShoppingBasket from '../ShoppingBasket/ShoppingBasket';
import Navigation from '../../components/Navigation/Navigation';
const Layout = ({ children }) => {
  const [shoppingBasketShow, setShoppingBasketShow] = useState(false);
  return (
    <>
      <Navigation setShoppingBasketShow={setShoppingBasketShow} />

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
