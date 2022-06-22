import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import NavigationModal from './NavigationModal';

const Navigation = props => {
  const [mockNavMenu, setMockNavMenu] = useState([]);
  const [navClosingBtn, setNavClosingBtn] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);

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
    fetch('/data/navMockData.json')
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
            <Link
              to="/"
              className={`wesopLogo ${selectedMenu !== 0 && 'white'}`}
            >
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
                  className={`navMenuLink ${selectedMenu !== 0 && 'white'}`}
                  onClick={() => {
                    setSelectedMenu(menu.id);
                    modalChange(true);
                  }}
                >
                  {menu.label}
                </button>
              </li>
            );
          })}
          <li className="navPrimaryMenuItem">
            <Link
              to="/"
              className={`navMenuLink ${selectedMenu !== 0 && 'white'}`}
            >
              스토리
            </Link>
          </li>
          <li className="navPrimaryMenuItem">
            <Link
              to="/"
              className={`navMenuLink ${selectedMenu !== 0 && 'white'}`}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="navIcon" />
            </Link>
          </li>

          {navClosingBtn && (
            <li className="navPrimaryMenuItem">
              <button
                className={`navClosingButton ${selectedMenu !== 0 && 'white'}`}
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
            <button className={`loginButton ${selectedMenu !== 0 && 'white'}`}>
              로그인
            </button>
          </li>
          <li className="navSecondMenuItem">
            <button className={`cartButton ${selectedMenu !== 0 && 'white'}`}>
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
