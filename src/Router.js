import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard/DashBoard';
import DetailItem from './pages/DetailItem/DetailItem';
import ItemLists from './pages/ItemLists/ItemLists';
const Router = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/item-lists" element={<ItemLists />} />
        <Route path="/detail-item" element={<DetailItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
