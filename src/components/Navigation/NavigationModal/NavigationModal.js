import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import './NavigationModal.scss';

const NavigationModal = ({
  mockNavMenu,
  selectedMenu,
  modalBgColor,
  selectedMenuImage,
  activeAnimation,
}) => {
  //배열의 인덱스는 0번부터 고유 번호에서 -1' , mockNavMenu[selectedMenu - 1]
  return (
    <section
      className="navigationModal"
      style={{ backgroundColor: modalBgColor }}
    >
      <div className="wesopLogoWrap">
        <Link to="/" className="wesopLogo">
          <span className="wesopLogoInWideModal">Wēsop</span>
        </Link>
      </div>
      <div className={`navModalListWarp ${activeAnimation && 'animation'}`}>
        {mockNavMenu[selectedMenu - 1].sub_categories.map(
          ({ id, name, items }) => {
            return (
              <div className="modalList" key={id}>
                <Categories id={id} name={name} items={items} />
              </div>
            );
          }
        )}
      </div>
      <div className={`navModalImage ${activeAnimation && 'animation'}`}>
        <img
          className="inModalEachMenuImage"
          alt="Wesop navigation category"
          src={selectedMenuImage}
        />
      </div>
    </section>
  );
};

export default NavigationModal;
