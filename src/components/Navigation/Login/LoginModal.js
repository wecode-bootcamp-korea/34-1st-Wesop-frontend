import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './LoginModal.scss';

const LoginModal = ({ loginIsOpen, setLoginIsOpen }) => {
  //모달창 바깥을 누르면 닫히게 하는 기능
  const modalRef = useRef();

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

  //사용자가 입력한 값 저장저장.
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const saveLoginInfo = e => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  //로그인 누르면 메인 화면으로 이동.
  const navigate = useNavigate();

  const goToDashBoard = () => {
    navigate('/');
  };

  const [emailError, setEmailError] = useState('');

  const isValidUserEmail = e => {
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(e) === true || e === '') {
      setEmailError('');
    } else {
      setEmailError(
        '이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요. (예: name@example.com)'
      );
    }
  };

  const [pwError, setPwError] = useState('');

  const postUserInfo = () => {
    fetch('http://10.58.1.131:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: loginInfo.email,
        password: loginInfo.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('토큰 나와랏', result);
        if (result.access_token) {
          localStorage.setItem('token', result.access_token);
          goToDashBoard();
          setLoginIsOpen(!loginIsOpen);
        } else {
          setPwError(
            '귀하의 이메일과 패스워드가 일치하지 않습니다. 다시 시도하십시오.'
          );
        }
      });
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
                <label
                  htmlFor="userEmail"
                  className={`emailLabel ${loginInfo.email !== '' && 'filled'}`}
                >
                  이메일 주소
                </label>
                <input
                  id="userEmail"
                  name="email"
                  className="inputEmail"
                  type="text"
                  onChange={e => {
                    saveLoginInfo(e);
                    isValidUserEmail(e.target.value);
                  }}
                  autoComplete="off"
                />
                <div className="emailConfirmError">{emailError}</div>
              </div>
            </div>
            <div className="formRow">
              <div className="formText">
                <label
                  htmlFor="userPassword"
                  className={`passwordLabel ${
                    loginInfo.password !== '' && 'filled'
                  }`}
                >
                  패스워드
                </label>
                <input
                  id="userPassword"
                  name="password"
                  className="inputPassword"
                  type="password"
                  onChange={saveLoginInfo}
                  autoComplete="off"
                />
                <div className="passwordConfirmError">{pwError}</div>
              </div>
            </div>
            <button
              className="loginBigButton"
              type="submit"
              onClick={postUserInfo}
            >
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
