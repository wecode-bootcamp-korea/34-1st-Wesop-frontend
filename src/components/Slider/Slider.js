import React, { useState } from 'react';
import './Slider.scss';

const IMG_WIDTH = 389;

const Slider = ({ recommend }) => {
  const [move, setMove] = useState(0);

  const moveRight = () => {
    if (move >= -(recommend.length * IMG_WIDTH) + IMG_WIDTH * 3) {
      setMove(move => move - IMG_WIDTH);
    }
  };

  const moveLeft = () => {
    if (move <= -IMG_WIDTH) {
      setMove(move => move + IMG_WIDTH);
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
          {recommend.map(item => {
            return (
              <ItemCard
                key={item.product_id}
                name={item.name}
                img={item.product_image_url}
                description={item.product_content}
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

export default Slider;
