import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './LoginModal.scss';

const LoginModal = ({ loginIsOpen, setLoginIsOpen }) => {
  const modalRef = useRef();

  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const saveLoginInfo = e => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);

    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  });

  const clickModalOutside = event => {
    if (loginIsOpen && !modalRef.current.contains(event.target)) {
      setLoginIsOpen(!loginIsOpen);
    }
  };

  return (
    <div className="loginModal">
      <div className="loginWrap">
        <div className="loginBody" ref={modalRef}>
          <form
            className="loginForm"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <h2 className="loginTitle">안녕하세요.</h2>
            <div className="loginSubTitle">
              로그인을 위한 이메일 주소 및 패스워드를 입력 부탁드립니다.
            </div>
            <div className="formRow">
              <div className="formText">
                <label htmlFor="userEmail" className="inputLabel">
                  이메일 주소
                </label>
                <input
                  id="userEmail"
                  name="email"
                  className="inputEmail"
                  type="text"
                  onChange={saveLoginInfo}
                />
              </div>
            </div>
            <div className="formRow">
              <div className="formText">
                <label htmlFor="userPassword" className="inputLabel">
                  패스워드
                </label>
                <input
                  id="userPassword"
                  name="password"
                  className="inputPassword"
                  type="password"
                  onChange={saveLoginInfo}
                />
              </div>
            </div>
            <button className="loginBigButton" type="submit">
              로그인
            </button>
            <button
              className="loginCloseButton"
              onClick={() => {
                setLoginIsOpen(!loginIsOpen);
              }}
            >
              <FontAwesomeIcon icon={faXmark} size="2x" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
