import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import NavigationModal from './NavigationModal/NavigationModal';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
// import LoginModal from './Login/LoginModal';
import './Navigation.scss';

const Navigation = ({ setShoppingBasketShow }) => {
  const [mockNavMenu, setMockNavMenu] = useState([]);

  const [navClosingBtn, setNavClosingBtn] = useState(false);

  // const [loginIsOpen, setLoginIsOpen] = useState(false);

  //사용자가 클릭한 메뉴의 고유 번호 : selectedMenu
  const [selectedMenu, setSelectedMenu] = useState(0);

  const [activeAnimation, setActiveAnimation] = useState('');

  const [handleClassName, setHandleClassName] = useState('highlight');

  const modalChange = modal => {
    setNavClosingBtn(modal);
  };

  const modalReturnToOrigin = () => {
    setSelectedMenu(0);
  };

  const navClosingButtonControl = () => {
    modalChange(false);
    modalReturnToOrigin();
  };

  const handlingNavigation = id => {
    setSelectedMenu(id);
    modalChange(true);
    setActiveAnimation('animation');
    setHandleClassName('highlight');
  };

  useEffect(() => {
    fetch('http://10.58.4.206:8000/products/categories', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setMockNavMenu(data.results);
      });
  }, []);

  return (
    <>
      <nav className={`navBox ${selectedMenu !== 0 && 'white'}`}>
        <ul className="navPrimaryMenu">
          <li className="navPrimaryMenuItem">
            <Link
              to="/"
              className="wesopLogo"
              onClick={navClosingButtonControl}
            >
              Wēsop
            </Link>
          </li>
          {mockNavMenu.map(({ main_category_id, main_category }) => {
            return (
              <li
                className={`navPrimaryMenuItem ${
                  selectedMenu === main_category_id && handleClassName
                }`}
                key={main_category_id}
              >
                <button
                  className="navMenuLink"
                  onClick={() => {
                    handlingNavigation(main_category_id);
                  }}
                  onMouseLeave={() => {
                    setActiveAnimation('');
                  }}
                >
                  {main_category}
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
            <button
              className="navSecondMenuButton"
              // onClick={() => {
              //   setLoginIsOpen(true);
              // }}
            >
              로그인
            </button>
          </li>
          <li className="navSecondMenuItem">
            <button className="navSecondMenuButton">회원가입</button>
          </li>
          <li className="navSecondMenuItem">
            <ShoppingCart setShoppingBasketShow={setShoppingBasketShow} />
          </li>
        </ul>
      </nav>
      {navClosingBtn && (
        <NavigationModal
          mockNavMenu={mockNavMenu}
          selectedMenu={selectedMenu}
          activeAnimation={activeAnimation}
          modalChange={modalChange}
          setHandleClassName={setHandleClassName}
        />
      )}
      {/* {loginIsOpen && (
        <LoginModal loginIsOpen={loginIsOpen} setLoginIsOpen={setLoginIsOpen} />
      )} */}
    </>
  );
};

export default Navigation;
