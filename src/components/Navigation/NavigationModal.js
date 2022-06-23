import React from 'react';
import { Link } from 'react-router-dom';

const NavigationModal = () => {
  return (
    <section className="navigationModal">
      <div className="wesopLogoWrap">
        <Link to="/" className="wesopLogo">
          <span className="wesopLogoInWideModal">Wēsop</span>
        </Link>
      </div>
      <div className="navModalListWarp">
        <div className="modalListLeft">
          <ul className="categories">
            <h2 className="categoryTitle">카테고리</h2>
            <li className="categoryInList">
              <Link to="/" className="listLink">
                <span className="listLabel">스킨 케어 모두 보기</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="modalListCenter">
          <ul className="categories">
            <h2 className="categoryTitle">피부타입</h2>
            <li className="categoryInList">
              <Link to="/" className="listLink">
                <span className="listLabel">중성</span>
              </Link>
            </li>
          </ul>
          <ul className="categories">
            <h2 className="categoryTitle">레인지</h2>
            <li className="categoryInList">
              <Link to="/" className="listLink">
                <span className="listLabel">파슬리 씨드</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="modalListRight">
          <ul className="categories">
            <h2 className="categoryTitle">신제품</h2>
            <li className="categoryInList">
              <Link to="/" className="listLink">
                <span className="listLabel">이그절티드 아이 세럼</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navModalImage">
        <img
          className="handHoldingMirror"
          alt="Hand holding small mirror"
          src="./images/Aesop_Homepage_Navigation_Category_Skin_Desktop_1700x2400px.jpg"
        />
      </div>
    </section>
  );
};

export default NavigationModal;
