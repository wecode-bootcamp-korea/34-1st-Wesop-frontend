import React, { useState, useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import './DetailItem.scss';

const DetailItem = () => {
  const [detailItems, setDetailItems] = useState();
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    fetch('/data/mockDataDetailItem.json')
      .then(response => response.json())
      .then(result => {
        setDetailItems(result);
        setSelectedItem({
          id: result.product.product_option[0].id,
          image_url: result.product.product_option[0].image_url,
          price: '₩ ' + Math.floor(result.product.product_option[0].price),
          sizes_mL: result.product.product_option[0].sizes_mL,
          is_include_pump: result.product.product_option[0].is_include_pump,
        });
      });
  }, []);
  if (!detailItems) return <>loading...</>;
  // if (Object.keys(detailItems).length === 0) return <>loading...</>;

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
              <span>{detailItems.product.category}</span>
              {/* <span> · </span>
              <span>클렌저</span> */}
            </div>
            <div className="titleBox">
              <div className="title">{detailItems.product.name}</div>
              <div className="description">{detailItems.product.content}</div>
            </div>
            <div className="categories">
              {detailItems.product.features[0].feature.map(description => {
                return (
                  <div className="category" key={description.id}>
                    <p>{description.feature}</p>
                    <p className="element">{description.content}</p>
                  </div>
                );
              })}
            </div>
            <div className="sizeBox">
              <p>사이즈</p>
              {detailItems.product.product_option.map(
                ({ id, sizes_mL, image_url, price, is_include_pump }) => {
                  return (
                    <label key={id}>
                      {detailItems.product.product_option.length === 1 ? (
                        <></>
                      ) : (
                        <input
                          type="radio"
                          checked={selectedItem.id === id}
                          onClick={() =>
                            setSelectedItem({
                              id,
                              image_url,
                              price,
                              is_include_pump,
                            })
                          }
                        />
                      )}
                      <div className="sizes">{sizes_mL}mL</div>
                    </label>
                  );
                }
              )}
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
          <img src={detailItems.product.additional_image_url} />
        </div>
        <div className="howToUseBox">
          <div className="howToUseWrapper">
            <div className="howToUseTitle">
              {detailItems.product.additional_name}
            </div>
            <div className="howToUseText">
              {detailItems.product.additional_content}
            </div>
            <div className="categories">
              {detailItems.product.features[0].manual.map(feature => {
                return (
                  <div className="category" key={feature.id}>
                    <p>{feature.feature}</p>
                    <p className="element">{feature.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Slider recommend={detailItems.product.recommend} />
    </div>
  );
};
export default DetailItem;
