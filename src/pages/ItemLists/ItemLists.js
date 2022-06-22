import React from 'react';
import './ItemLists.scss';
import { ITEM_TYPES } from './ItemListsData';

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
              <a href="/" className="itemTypeText">
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
