import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard/DashBoard';
import DetailItem from './pages/DetailItem/DetailItem';
import ItemLists from './pages/ItemLists/ItemLists';
import ShoppingBasket from './pages/ShoppingBasket/ShoppingBasket';
const Router = props => {
  const [shoppingBasketShow, setShoppingBasketShow] = useState(false);
  return (
    <BrowserRouter>
      <ShoppingBasket
        show={shoppingBasketShow}
        setShoppingBasketShow={setShoppingBasketShow}
      />

      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route
          path="/item-lists"
          element={<ItemLists setShoppingBasketShow={setShoppingBasketShow} />}
        />
        <Route path="/detail-item" element={<DetailItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
