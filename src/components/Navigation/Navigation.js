import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navigation = props => {
  const [mockNavMenu, setMockNavMenu] = useState([]);

  useEffect(() => {
    fetch('/data/navMockData.json')
      .then(res => res.json())
      .then(data => {
        setMockNavMenu(data);
      });
  }, []);

  return (
    <>
      <nav className="navBox">
        <ul className="navPrimaryMenu">
          <li className="navPrimaryMenuItem">
            <Link to="/" className="wesopLogo">
              Wēsop
            </Link>
          </li>
          {mockNavMenu.map(menu => {
            return (
              <li className="navPrimaryMenuItem" key={menu.id}>
                <button className="navMenuLink">{menu.label}</button>
              </li>
            );
          })}
          <li className="navPrimaryMenuItem">
            <Link to="/" className="navMenuLink">
              스토리
            </Link>
          </li>
          <li className="navPrimaryMenuItem">
            <Link to="/" className="navMenuLink">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="navIcon" />
            </Link>
          </li>
          <li className="navPrimaryMenuItem">
            <button className="navClosingButton">
              <span>닫기</span>
              <FontAwesomeIcon icon={faXmark} className="navIcon" />
            </button>
          </li>
        </ul>
        <ul className="navSecondMenu">
          <li className="navSecondMenuItem">
            <button className="loginButton">로그인</button>
          </li>
          <li className="navSecondMenuItem">
            <button className="cartButton">카트</button>
          </li>
        </ul>
      </nav>
      <section className="navWideModalBox">
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
                <Link to="/">스킨 케어 모두 보기</Link>
              </li>
            </ul>
          </div>
          <div className="modalListCenter">
            <ul className="categories">
              <h2 className="categoryTitle">피부타입</h2>
              <li className="categoryInList">
                <Link to="/">중성</Link>
              </li>
            </ul>
            <ul className="categories">
              <h2 className="categoryTitle">레인지</h2>
              <li className="categoryInList">
                <Link to="/">파슬리 씨드</Link>
              </li>
            </ul>
          </div>
          <div className="modalListRight">
            <ul className="categories">
              <h2 className="categoryTitle">신제품</h2>
              <li className="categoryInList">
                <Link to="/">이그절티드 아이 세럼</Link>
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
    </>
  );
};

export default Navigation;
