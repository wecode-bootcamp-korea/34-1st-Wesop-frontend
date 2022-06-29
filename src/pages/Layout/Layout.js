import React, { useState } from 'react';
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
