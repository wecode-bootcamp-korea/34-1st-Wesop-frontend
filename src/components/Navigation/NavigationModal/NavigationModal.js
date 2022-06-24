import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import './NavigationModal.scss';

const NavigationModal = ({ mockNavMenu, selectedMenu }) => {
  // console.log('데이터', mockNavMenu[selectedMenu - 1]);

  return (
    <section className="navigationModal">
      <div className="wesopLogoWrap">
        <Link to="/" className="wesopLogo">
          <span className="wesopLogoInWideModal">Wēsop</span>
        </Link>
      </div>
      <div className="navModalListWarp">
        {mockNavMenu[selectedMenu - 1].sub_categories.map(menu => {
          return (
            <div className="modalList" key={menu.id}>
              <Categories id={menu.id} name={menu.name} items={menu.items} />
            </div>
          );
        })}
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
