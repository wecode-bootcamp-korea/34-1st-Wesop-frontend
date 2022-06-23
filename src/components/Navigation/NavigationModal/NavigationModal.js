import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import './NavigationModal.scss';

const NavigationModal = ({ mockNavMenu }) => {
  console.log('data', mockNavMenu);
  return (
    <section className="navigationModal">
      <div className="wesopLogoWrap">
        <Link to="/" className="wesopLogo">
          <span className="wesopLogoInWideModal">Wēsop</span>
        </Link>
      </div>
      <div className="navModalListWarp">
        <div className="modalListLeft">
          <Categories subCategories={mockNavMenu[0].sub_categories[0]} />
        </div>
        <div className="modalListCenter">
          <Categories subCategories={mockNavMenu[0].sub_categories[1]} />
        </div>
        <div className="modalListRight">
          <Categories subCategories={mockNavMenu[0].sub_categories[2]} />
        </div>
      </div>
      <div className="navModalImage">
        <img
          className="handHoldingMirror"
          alt="Hand holding small mirror"
          src="./images/Aesop_Homepage_Navigation_Category_Skin_Desktop_1700x2400px.jpg"
        />
      </div>
    </section>
  );
};

export default NavigationModal;
