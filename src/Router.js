import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard/DashBoard';
import DetailItem from './pages/DetailItem/DetailItem';
import ItemLists from './pages/ItemLists/ItemLists';
import MyAccount from './pages/MyAccount/MyAccount';
const Router = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/item-lists" element={<ItemLists />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/detail-item" element={<DetailItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
