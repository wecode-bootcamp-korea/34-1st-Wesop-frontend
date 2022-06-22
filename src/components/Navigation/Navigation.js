import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import NavigationModal from './NavigationModal';

const Navigation = props => {
  const [mockNavMenu, setMockNavMenu] = useState([]);
  const [navClosingBtn, setNavClosingBtn] = useState(false);
  const [navModalBackGroundColor, setNavModalBackGroundColor] =
    useState('#333333');
  const [navBorder, setNavBorder] = useState('');
  const [navMenuHighlight, setNavMenuHighlight] = useState('');
  const [navFontColor, setNavFontColor] = useState('#fffef2');

  const modalChange = modal => {
    setNavModalBackGroundColor('#fffef2');
    setNavFontColor('#333333');
    setNavClosingBtn(modal);
  };

  const modalReturnToOrigin = modal => {
    setNavModalBackGroundColor('#333333');
    setNavFontColor('#fffef2');
    setNavClosingBtn(modal);
  };

  const navClosingButtonControl = () => {
    modalChange();
    modalReturnToOrigin();
  };

  useEffect(() => {
    fetch('/data/navMockData.json')
      .then(res => res.json())
      .then(data => {
        setMockNavMenu(data);
      });
  }, []);

  return (
    <>
      <nav
        className="navBox"
        style={{ backgroundColor: navModalBackGroundColor }}
      >
        <ul className="navPrimaryMenu">
          <li className="navPrimaryMenuItem">
            <Link to="/" className="wesopLogo" style={{ color: navFontColor }}>
              Wēsop
            </Link>
          </li>
          {mockNavMenu.map(menu => {
            return (
              <li className="navPrimaryMenuItem" key={menu.id}>
                <button
                  className="navMenuLink"
                  onClick={() => {
                    modalChange(true);
                  }}
                  style={{ color: navFontColor }}
                >
                  {menu.label}
                </button>
              </li>
            );
          })}
          <li className="navPrimaryMenuItem">
            <Link
              to="/"
              className="navMenuLink"
              style={{ color: navFontColor }}
            >
              스토리
            </Link>
          </li>
          <li className="navPrimaryMenuItem">
            <Link
              to="/"
              className="navMenuLink"
              style={{ color: navFontColor }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="navIcon" />
            </Link>
          </li>

          {navClosingBtn && (
            <li className="navPrimaryMenuItem">
              <button
                className="navClosingButton"
                style={{ color: navFontColor }}
                onClick={navClosingButtonControl}
              >
                <span>닫기</span>
                <FontAwesomeIcon icon={faXmark} className="navIcon" />
              </button>
            </li>
          )}
        </ul>
        <ul className="navSecondMenu">
          <li className="navSecondMenuItem">
            <button className="loginButton" style={{ color: navFontColor }}>
              로그인
            </button>
          </li>
          <li className="navSecondMenuItem">
            <button className="cartButton" style={{ color: navFontColor }}>
              카트
            </button>
          </li>
        </ul>
      </nav>
      {navClosingBtn && <NavigationModal />}
    </>
  );
};

export default Navigation;
