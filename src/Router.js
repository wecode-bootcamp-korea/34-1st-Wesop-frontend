import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard/DashBoard';
import DetailItem from './pages/DetailItem/DetailItem';
import ItemLists from './pages/ItemLists/ItemLists';
import Layout from './pages/Layout/Layout';
import MyAccount from './pages/MyAccount/MyAccount';

const Router = props => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/item-lists/:id" element={<ItemLists />} />
          <Route path="/detail-item/:id" element={<DetailItem />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
