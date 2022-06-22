import React, { useState } from 'react';
import './DetailItem.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DetailItem = () => {
  const [selectedItem, setSelectedItem] = useState(ITEM_DATA[0]);
  const [move, setMove] = useState(0);
  // const [className, setClassName] = useState('carousel');

  const moveRight = () => {
    setMove(move - 300);
  };

  const moveLeft = () => {
    setMove(move + 300);
  };

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
              <Categories title="피부 타입" element="모든 피부" />
              <Categories title="사용감" element="진정된, 부드러운, 가벼운" />
              <Categories
                title="주요 성분"
                element="파슬리 씨드, 라벤더, 마트리카리아꽃오일"
              />
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
          <p>이미지</p>
        </div>
        <div className="howToUseBox">
          <div className="howToUseWrapper">
            <div className="howToUseTitle">사용법</div>
            <div className="howToUseText">{HOW_TO_USE_DATA.text}</div>
            <div className="categories">
              <Categories title="사용량" element={HOW_TO_USE_DATA.usage} />
              <Categories title="텍스처" element={HOW_TO_USE_DATA.texture} />
              <Categories title="향" element={HOW_TO_USE_DATA.scent} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottomContainer">
        <img
          src="./images/leftArrow.png"
          className="leftArrow"
          onClick={moveLeft}
          alt="화살표 아이콘"
        />
        <img
          src="./images/rightArrow.png"
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
            {SLIDE_MODULE_DATA.map(el => {
              return (
                <SlideModule
                  key={el.id}
                  name={el.name}
                  img={el.img}
                  description={el.description}
                />
              );
            })}
          </div>
          {/* <FontAwesomeIcon icon={faArrowLeft} className="leftArrow" size="2x" />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="rightArrow"
            size="2x"
          /> */}
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

const SlideModule = ({ img, name, description }) => {
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

const SLIDE_MODULE_DATA = [
  {
    id: 1,
    name: '파슬리 씨드 안티 옥시던트 인텐스 세럼',
    description: '지속적인 수분을 공급하는 항산화 세럼',
    img: './images/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Intense_Serum_60mL_Web_Large_684x668px.webp',
  },
  {
    id: 2,
    name: '비 앤 티 밸런싱 토너',
    description: '균형감, 수분 공급, 가벼운 마무리',
    img: './images/AesopSkin-B-Tea-Balancing-Toner-200mL-large.webp',
  },
  {
    id: 3,
    name: '파슬리 씨드 안티 옥시던트 스킨케어 키트',
    description: '항산화 성분이 풍부한 앙상블',
    img: './images/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.webp',
  },
];

const HOW_TO_USE_DATA = {
  id: 1,
  text: '클렌징 후 화장솜이나 손에 덜어내어 세안을 마친 얼굴과 목에 두드리세요',
  usage: '반 티스푼',
  texture: '워터 제형',
  scent: '플로럴, 허브향',
};

const ITEM_DATA = [
  {
    name: 'small',
    size: '100mL',
    price: '₩ 45,000',
    img: '/images/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-medium.png',
  },
  {
    name: 'large',
    size: '200mL',
    price: '₩ 73,000',
    img: '/images/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-200mL-large.webp',
  },
];

export default DetailItem;
