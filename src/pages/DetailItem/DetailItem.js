import React, { useState, useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import './DetailItem.scss';

const DetailItem = () => {
  const [detailItems, setDetailItems] = useState({});
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    fetch('/data/mockDataDetailItem.json')
      .then(response => response.json())
      .then(result => {
        setDetailItems(result);
        setSelectedItem({
          id: result.size[0].id,
          image_url: result.size[0].image_url,
          price: result.size[0].price,
        });
      });
  }, []);

  if (Object.keys(detailItems).length === 0) return <>loading...</>;

  return (
    <div className="detailItem">
      <nav>
        <div>nav바 고정</div>
      </nav>
      <div className="topContainer">
        <div className="logo">Wesop</div>
        <div className="imgBox">
          <img src={selectedItem.image_url} alt="상품이미지" />
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
              {detailItems.sub_description.map(description => {
                return (
                  <div className="category" key={description.id}>
                    <p>{description.name}</p>
                    <p className="element">{description.contents}</p>
                  </div>
                );
              })}
            </div>
            <div className="sizeBox">
              <p>사이즈</p>
              {detailItems.size.map(({ id, name, image_url, price }) => {
                return (
                  <label key={id}>
                    <input
                      type="radio"
                      checked={selectedItem.id === id}
                      onClick={() => setSelectedItem({ id, image_url, price })}
                    />
                    {name}
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
          <p>{detailItems.image}</p>
        </div>
        <div className="howToUseBox">
          <div className="howToUseWrapper">
            <div className="howToUseTitle">사용법</div>
            <div className="howToUseText">{detailItems.additional_content}</div>
            <div className="categories">
              {detailItems.products_features.map(feature => {
                return (
                  <div key={feature.id} className="category">
                    <p>{feature.name}</p>
                    <p className="element">{feature.contents}</p>
                  </div>
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
export default DetailItem;
