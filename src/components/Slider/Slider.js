import React, { useState } from 'react';
import './Slider.scss';

const IMG_WIDTH = 389;

const Slider = () => {
  const [move, setMove] = useState(0);

  const moveRight = () => {
    if (move >= -(ITEM_CARD_DATA.length * IMG_WIDTH) + IMG_WIDTH * 3) {
      setMove(move - IMG_WIDTH);
    }
  };

  const moveLeft = () => {
    if (move <= -IMG_WIDTH) {
      setMove(move + IMG_WIDTH);
    }
  };

  return (
    <div className="slider">
      <img
        src="/images/leftArrow.png"
        className="leftArrow"
        onClick={moveLeft}
        alt="화살표 아이콘"
      />
      <img
        src="/images/rightArrow.png"
        className="rightArrow"
        onClick={moveRight}
        alt="화살표 아이콘"
      />
      <div className="carouselWrapper">
        <div
          className="carousel"
          style={{ transform: `translateX(${move}px)` }}
        >
          <div className="recommendTitleBox">
            <p>함께 사용하기 좋은 제품</p>
          </div>
          {ITEM_CARD_DATA.map(el => {
            return (
              <ItemCard
                key={el.id}
                name={el.name}
                img={el.img}
                description={el.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ItemCard = ({ img, name, description }) => {
  return (
    <div className="imgBox">
      <img src={img} className="image" alt="제품 사진" />
      <div className="text">
        <p className="recommendedItemName">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const ITEM_CARD_DATA = [
  {
    id: 1,
    name: '파슬리 씨드 안티 옥시던트 인텐스 세럼',
    description: '지속적인 수분을 공급하는 항산화 세럼',
    img: '/images/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Intense_Serum_60mL_Web_Large_684x668px.webp',
  },
  {
    id: 2,
    name: '비 앤 티 밸런싱 토너',
    description: '균형감, 수분 공급, 가벼운 마무리',
    img: '/images/AesopSkin-B-Tea-Balancing-Toner-200mL-large.webp',
  },
  {
    id: 3,
    name: '파슬리 씨드 안티 옥시던트 스킨케어 키트',
    description: '항산화 성분이 풍부한 앙상블',
    img: '/images/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.webp',
  },
  {
    id: 1,
    name: '파슬리 씨드 안티 옥시던트 인텐스 세럼',
    description: '지속적인 수분을 공급하는 항산화 세럼',
    img: '/images/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Intense_Serum_60mL_Web_Large_684x668px.webp',
  },
  {
    id: 2,
    name: '비 앤 티 밸런싱 토너',
    description: '균형감, 수분 공급, 가벼운 마무리',
    img: '/images/AesopSkin-B-Tea-Balancing-Toner-200mL-large.webp',
  },
  {
    id: 3,
    name: '파슬리 씨드 안티 옥시던트 스킨케어 키트',
    description: '항산화 성분이 풍부한 앙상블',
    img: '/images/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.webp',
  },
];

export default Slider;
