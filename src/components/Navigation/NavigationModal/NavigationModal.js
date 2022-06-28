import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import './NavigationModal.scss';

const NavigationModal = ({
  mockNavMenu,
  selectedMenu,
  activeAnimation,
  modalChange,
}) => {
  //배열의 인덱스는 0번부터 고유 번호에서 -1' , mockNavMenu[selectedMenu - 1]
  return (
    <section
      className="navigationModal"
      style={{
        backgroundColor:
          MODAL_BG_COLORS_AND_IMAGES[selectedMenu - 1].backgroundColor,
      }}
    >
      <div className="wesopLogoWrap">
        <Link to="/" className="wesopLogo">
          <span className="wesopLogoInWideModal">Wēsop</span>
        </Link>
      </div>
      <div className={`navModalListWarp ${activeAnimation && 'animation'}`}>
        {mockNavMenu[selectedMenu - 1].sub_category.map(
          ({ id, name, category }) => {
            return (
              <div className="modalList" key={id}>
                <Categories
                  id={id}
                  name={name}
                  category={category}
                  modalChange={modalChange}
                />
              </div>
            );
          }
        )}
      </div>
      <div className={`navModalImage ${activeAnimation && 'animation'}`}>
        <img
          className="inModalEachMenuImage"
          alt="Wesop navigation category"
          src={MODAL_BG_COLORS_AND_IMAGES[selectedMenu - 1].image}
        />
      </div>
    </section>
  );
};

const MODAL_BG_COLORS_AND_IMAGES = [
  //경로 지정할 때는 상대 경로가 아닌 절대 경로로 지정할 것.
  {
    id: 1,
    backgroundColor: '#f1efe0',
    image: '/images/skincare.jpg',
  },
  {
    id: 2,
    backgroundColor: '#ece3d2',
    image: '/images/bodyhand.jpg',
  },
  {
    id: 3,
    backgroundColor: '#ddd8d4',
    image: '/images/hair2.jpg',
  },
  {
    id: 4,
    backgroundColor: '#f5ece3',
    image: '/images/perfume.jpg',
  },
  {
    id: 5,
    backgroundColor: '#f6f1eb',
    image: '/images/home.jpg',
  },
  {
    id: 6,
    backgroundColor: '#e9efe3',
    image: '/images/travel.jpg',
  },
  {
    id: 7,
    backgroundColor: '#eaeade',
    image: '/images/giftguide.jpg',
  },
  {
    id: 8,
    backgroundColor: '#fefef2',
    image: '/images/read.jpg',
  },
];

export default NavigationModal;
