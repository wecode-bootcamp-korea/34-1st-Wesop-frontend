import React, { useState } from 'react';
import './DetailItem.scss';

const DetailItem = () => {
  const [img, setimg] = useState(
    '/images/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-medium.png'
  );
  const [checked100, setChecked100] = useState(true);
  const [checked200, setChecked200] = useState(false);
  const [price, setPrice] = useState('₩ 45,000');

  // const switch = () => {
  //   setSize('/images/AesopSkin-B-Tea-Balancing-Toner-200mL-large.png')
  // }

  const switchToLarge = () => {
    setimg(
      '/images/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-200mL-large.webp'
    );
    setPrice('₩ 73, 000');
    setChecked200(true);
    setChecked100(false);
  };

  const switchToSmall = () => {
    setimg(
      '/images/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-medium.png'
    );
    setPrice('₩ 47,000');
    setChecked100(true);
    setChecked200(false);
  };

  return (
    <div className="container">
      <div className="topContainer">
        <div className="imgBox">
          <img src={img} alt="상품이미지" />
        </div>
        <div className="descriptionBox">
          <div className="itemContainer">
            <div>
              <span>스킨</span>
              <span> · </span>
              <span>클렌저</span>
            </div>
            <div className="titleBox">
              <div className="title">파슬리 씨드 안티 옥시던트 페이셜 토너</div>
              <div className="description">
                피부 진정과 수분 공급을 위한 부드러운 토너
              </div>
            </div>
            <div className="categories">
              <Categories title="피부 타입" element="모든 피부" />
              <Categories title="사용감" element="진정된, 부드러운, 가벼운" />
              <Categories
                title="주요 성분"
                element="파슬리 씨드, 라벤더, 마트리카리아꽃오일"
              />
            </div>
            <div className="sizeBox">
              <p>사이즈</p>
              <input
                type="checkbox"
                checked={checked100}
                onClick={switchToSmall}
              />
              <span> 100mL</span>
              <input
                type="checkbox"
                checked={checked200}
                onClick={switchToLarge}
              />
              <span> 200mL</span>
            </div>
            <button>카트에 추가하기 - {price}</button>
            <div className="recommendNewItem">
              <p className="text">신제품을 확인해보세요</p>
              <p className="itemName">
                파슬리 씨드 안티 옥시던트 스킨 케어 키트
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomContainer">
        <div className="carouselWrapper">
          {/* <button className="right">prev</button>
          <button className="right">next</button> */}
          <div className="carousel" />
        </div>
      </div>
    </div>
  );
};

const Categories = ({ title, element }) => {
  return (
    <div className="category">
      <p>{title}</p>
      <p className="element">{element}</p>
    </div>
  );
};

export default DetailItem;
