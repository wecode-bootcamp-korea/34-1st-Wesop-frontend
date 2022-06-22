import React from 'react';
import './ItemLists.scss';

const ItemLists = props => {
  return (
    <div className="itemLists">
      <nav style={{ backgroundColor: 'yellow', height: '80px' }}> nav </nav>
      <main className="main">
        <section className="wrapperTitle">
          <h1 className="logo">Wesop</h1>
          <h1 className="itemType">클렌저</h1>
        </section>
        <ul className="wrapperItemTypes">
          {ITEM_TYPES.map(itemtype => (
            <li key={itemtype.id} className="itemType">
              <a href="#" className="itemTypeText">
                {itemtype.type_name}
              </a>
            </li>
          ))}
        </ul>
        <section className="wrapperItems">
          <div className="itemDescription">
            <h1 className="title">처음의 시작</h1>
            <h2 className="description">
              각질, 불필요한 유분 그리고 기타 잔여물을 말금히 씻어내어 피부를
              깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다.
            </h2>
          </div>
          {/* {ITEM_TYPES.map} */}
          <div className="item">
            <p className="title" />
            <img
              className="image"
              src="/images/Aesop-Skin-Fabulous-Face-Cleanser-100mL-large.png"
              alt="test"
            />
            <p className="name">리무브</p>
            <p className="model">60 mL / ₩ 27,000</p>
            <div className="wrapperSubText">
              <div className="subText">
                <span className="title">피부타입</span>
                <span className="discription">
                  모든 피부, 메이크업을 한 피부
                </span>
              </div>
              <div className="subText">
                <span className="title">사용감</span>
                <span className="discription">진정된, 생기있는</span>
              </div>
            </div>
            <button className="addCart">카트에 추가 - ₩ 27,000</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ItemLists;

const ITEM_TYPES = [
  {
    id: '1',
    type_name: '모든 스킨',
  },
  {
    id: '2',
    type_name: '클렌저',
    type_title: '처음의 시작',
    type_description:
      '각질, 불필요한 유분 그리고 기타 잔여물을 말금히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다.',
    items: [
      {
        id: 1,
        name: '리무브',
        models: [
          {
            id: 1,
            name: '60 mL',
            price: 27000,
            image: '/images/Aesop-Skin-Fabulous-Face-Cleanser-100mL-large.png',
          },
        ],
        subTexts: [
          {
            id: 1,
            title: '피부타입',
            discription: '모든피부, 메이크업을 한 피부',
          },
          {
            id: 2,
            title: '사용감',
            discription: '진정된, 생기있는',
          },
        ],
      },
      {
        id: 2,
        name: '파슬리 씨드 페이셜 클렌징 오일',
        models: [{ id: 1, name: '200 mL', price: 65000 }],
        subTexts: [
          {
            id: 1,
            title: '피부타입',
            discription: '중성, 복합성, 건성, 민감성 피부',
          },
          {
            id: 2,
            title: '사용감',
            discription: '부드러운, 진정된',
          },
        ],
      },
      {
        id: 3,
        name: '퓨리파잉 페이셜 크림 클렌저',
        models: [{ id: 1, name: '100 mL', price: 40000 }],
        subTexts: [
          {
            id: 1,
            title: '피부타입',
            discription: '중성, 건성 피부',
          },
          {
            id: 2,
            title: '사용감',
            discription: '탄력, 유연, 부드러운',
          },
        ],
      },
      {
        id: 4,
        name: '페뷸러스 페이스 클렌저',
        title: '데일리 필수품',
        models: [
          { id: 1, name: '100 mL', price: 35000 },
          { id: 2, name: '200 mL', price: 55000 },
        ],
        subTexts: [
          {
            id: 1,
            title: '피부타입',
            discription: '중성, 건성 피부',
          },
          {
            id: 2,
            title: '사용감',
            discription: '상쾌한, 진정된, 부드러운',
          },
        ],
      },
      {
        id: 5,
        name: '파슬리 씨드 페이셜 클렌저',
        title: '사랑받는 제품',
        models: [
          { id: 1, name: '100 mL', price: 45000 },
          { id: 2, name: '200 mL', price: 69000 },
        ],
        subTexts: [
          {
            id: 1,
            title: '피부타입',
            discription: '중성, 복합성, 문제성 피부',
          },
          {
            id: 2,
            title: '사용감',
            discription: '매끄러운, 부드러운',
          },
        ],
      },
    ],
  },
  { id: '3', type_name: '각질 제거' },
  { id: '4', type_name: '트리트먼트 & 마스크' },
  { id: '5', type_name: '토너' },
  { id: '6', type_name: '하이드레이터' },
  { id: '7', type_name: '립 & 아이' },
  { id: '8', type_name: '쉐이빙' },
  { id: '9', type_name: '선 케어' },
  { id: '10', type_name: '키트' },
  { id: '11', type_name: '스킨 케어 세트 추천' },
  { id: '12', type_name: '스킨 케어 기프트' },
];
