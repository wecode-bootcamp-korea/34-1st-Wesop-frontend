import React, { useState, useEffect } from 'react';
import './DetailItem.scss';
import Slider from '../../components/Slider/Slider';

const DetailItem = () => {
  const [detailItems, setDetailItems] = useState([]);

  useEffect(() => {
    fetch('/data/mockDataDetailItem.json')
      .then(response => response.json())
      .then(result => setDetailItems(result));
  }, []);

  const [selectedItem, setSelectedItem] = useState(ITEM_DATA[0]);

  const check = e => {
    const { name } = e.target;
    ITEM_DATA.map(item => {
      if (item.name === name) {
        return setSelectedItem(item);
      }
    });
  };

  return (
    <div className="detailItem">
      <nav>
        <div>nav바 고정</div>
      </nav>
      <div className="topContainer">
        <div className="logo">Wesop</div>
        <div className="imgBox">
          {}
          <img src={selectedItem.img} alt="상품이미지" />
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
              {detailItems[0]?.sub_description.map(el => {
                return (
                  <SubDescription
                    key={el.id}
                    name={el.name}
                    contents={el.contents}
                  />
                );
              })}
            </div>
            <div className="sizeBox">
              <p>사이즈</p>
              {ITEM_DATA.map(({ name, size }) => {
                return (
                  <label key={name}>
                    <input
                      name={name}
                      type="radio"
                      checked={selectedItem.name === name}
                      onClick={check}
                    />
                    {size}
                  </label>
                );
              })}
            </div>
            <button>카트에 추가하기 - {selectedItem.price} </button>
            <div className="recommendNewItem">
              <p className="text">신제품을 확인해보세요</p>
              <p className="newItemName">
                파슬리 씨드 안티 옥시던트 스킨 케어 키트
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="serviceContainer">
        <div className="freeBox forBorder">
          <p className="topText">무료 선물 포장 서비스</p>
          <p>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다.</p>
        </div>
        <div className="freeBox">
          <p className="topText">샘플 & 코튼 백 증정</p>
          <p>
            모든 주문 건에 무료 샘플과 코튼 백을 제공해 드립니다. (샘플 종류는
            임의 지정이 불가합니다.)
          </p>
        </div>
      </div>
      <div className="howToUseContainer">
        <div className="itemImage">
          <p>{detailItems[0]?.image}</p>
        </div>
        <div className="howToUseBox">
          <div className="howToUseWrapper">
            <div className="howToUseTitle">사용법</div>
            <div className="howToUseText">
              {detailItems[0]?.additional_content}
            </div>
            <div className="categories">
              {detailItems[0]?.products_features.map(el => {
                return (
                  <HowToUse key={el.id} name={el.name} contents={el.contents} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

const HowToUse = ({ name, contents }) => {
  return (
    <div className="category">
      <p>{name}</p>
      <p className="element">{contents}</p>
    </div>
  );
};

const SubDescription = ({ name, contents }) => {
  return (
    <div className="category">
      <p>{name}</p>
      <p className="element">{contents}</p>
    </div>
  );
};

const ITEM_DATA = [
  {
    id: 1,
    name: 'small',
    size: '100mL',
    price: '₩ 45,000',
    img: '/images/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-medium.png',
  },
  {
    id: 2,
    name: 'large',
    size: '200mL',
    price: '₩ 73,000',
    img: '/images/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-200mL-large.webp',
  },
];

export default DetailItem;
