import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import NavigationModal from './NavigationModal/NavigationModal';
import './Navigation.scss';

const Navigation = props => {
  const [mockNavMenu, setMockNavMenu] = useState([]);
  const [navClosingBtn, setNavClosingBtn] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [mockSelectedMenu, setMockSelectedMenu] = useState(
    mockNavMenu[Number(selectedMenu)]
  );

  console.log('내가 클릭한 메뉴 번호', selectedMenu);

  console.log('내가 클릭한 메뉴의 객체 불러오기', mockSelectedMenu);

  const modalChange = modal => {
    setNavClosingBtn(modal);
  };

  const modalReturnToOrigin = modal => {
    setSelectedMenu(0);
    setNavClosingBtn(modal);
  };

  const navClosingButtonControl = () => {
    modalChange();
    modalReturnToOrigin();
  };

  useEffect(() => {
    fetch('/data/categories.json')
      .then(res => res.json())
      .then(data => {
        setMockNavMenu(data);
      });
  }, []);

  return (
    <>
      <nav className={`navBox ${selectedMenu !== 0 && 'white'}`}>
        <ul className="navPrimaryMenu">
          <li className="navPrimaryMenuItem">
            <Link to="/" className="wesopLogo">
              Wēsop
            </Link>
          </li>
          {mockNavMenu.map(menu => {
            return (
              <li
                className={`navPrimaryMenuItem ${
                  selectedMenu === menu.id && 'highlight'
                }`}
                key={menu.id}
              >
                <button
                  className="navMenuLink"
                  onClick={() => {
                    setSelectedMenu(menu.id);
                    modalChange(true);
                    setMockSelectedMenu(menu.id);
                  }}
                >
                  {menu.name}
                </button>
              </li>
            );
          })}
          <li className="navPrimaryMenuItem">
            <Link to="" className="navMenuLink">
              스토어
            </Link>
          </li>
          <li className="navPrimaryMenuItem">
            <Link to="" className="navMenuLink">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="navIcon" />
            </Link>
          </li>

          {navClosingBtn && (
            <li className="navPrimaryMenuItem">
              <button
                className="navClosingButton"
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
            <button className="loginButton">로그인</button>
          </li>
          <li className="navSecondMenuItem">
            <button className="signUpButton">회원가입</button>
          </li>
          <li className="navSecondMenuItem">
            <button className="cartButton">카트</button>
          </li>
        </ul>
      </nav>
      {navClosingBtn && (
        <NavigationModal
          mockNavMenu={mockNavMenu}
          selectedMenu={selectedMenu}
          mockSelectedMenu={mockSelectedMenu}
        />
      )}
    </>
  );
};

export default Navigation;
