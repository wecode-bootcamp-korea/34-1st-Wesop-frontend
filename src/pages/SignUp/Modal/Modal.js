import React, { useState, useEffect } from 'react';
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ modal, setModal }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    lastName: '',
    firstName: '',
  });

  const [disabled, setDisabled] = useState(false);
  const { email, password, passwordConfirm, lastName, firstName } = userInfo;

  const changeUserInfo = (name, value) => {
    setUserInfo({ ...userInfo, [name]: value });
  };

  const validationUserInfo = (name, value) => {
    switch (name) {
      case 'lastName':
        changeUserInfo(name, value);
        break;

      case 'firstName':
        changeUserInfo(name, value);
        break;

      default:
        break;
    }
    return;
  };

  const disableButton = () => {
    if (
      lastName === '' ||
      firstName === '' ||
      !email.includes('@' && '.com') ||
      password !== passwordConfirm
    ) {
      setDisabled(true);
    }
  };

  const handleChangeUserInfo = ({ target: { name, value } }) => {
    changeUserInfo(name, value);
    validationUserInfo(name, value);
  };
  const signUp = () => {
    fetch('http://10.58.4.206:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        last_name: lastName,
        first_name: firstName,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('회원가입이 완료되었습니다.');
          setModal(false);
        }
      });
  };

  return (
    <div className="modalBody">
      <div className="modalBox">
        <div className="buttons">
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="modalTitle">이솝에 오신 것을 환영합니다.</div>
        <div className="modalSubtitle">
          회원가입을 위해 아래의 세부 정보를 작성해주세요.
        </div>
        <form onChange={handleChangeUserInfo}>
          {EMAIL_PASSWORD_INPUT.map(el => {
            return (
              <Input
                onChange={disableButton}
                key={el.input_id}
                input_title={el.input_title}
                name={el.name}
                type={el.type}
                className={el.className}
                id={el.id}
                userInfo={userInfo}
                id_error_message={el.id_error_message}
                pw_error_message={el.pw_error_message}
              />
            );
          })}

          <div className="name">
            {NAME_INPUT.map(el => {
              return (
                <Input
                  onChange={disableButton}
                  key={el.input_id}
                  input_title={el.input_title}
                  name={el.name}
                  type={el.type}
                  className={el.className}
                  id={el.id}
                  userInfo={userInfo}
                />
              );
            })}
          </div>
        </form>
        <div className="checkBox">
          <div>
            <input type="checkbox" />
            <span>가입자 본인은 만 14세 이상입니다.</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>이용 약관에 동의합니다.</span>
          </div>
        </div>
        <button className="signUpButton" onClick={signUp} disabled={disabled}>
          등록
        </button>
        <div className="haveAccountBox">
          <button className="haveAccount">이솝 계정을 가지고 계십니까?</button>
        </div>
      </div>
    </div>
  );
};

const EMAIL_PASSWORD_INPUT = [
  {
    input_id: 1,
    input_title: '이메일 주소',
    type: 'text',
    name: 'email',
    className: 'input',
    id_error_message: '이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요.',
  },
  {
    input_id: 2,
    input_title: '패스워드',
    type: 'password',
    name: 'password',
    className: 'input',
  },
  {
    input_id: 3,
    input_title: '패스워드 확인',
    type: 'password',
    name: 'passwordConfirm',
    className: 'input',
    pw_error_message: '이전에 사용했던 패스워드를 입력하세요.',
  },
];
const NAME_INPUT = [
  {
    input_id: 4,
    input_title: '성',
    type: 'text',
    name: 'lastName',
    className: 'lastName',
  },
  {
    input_id: 5,
    input_title: '이름',
    type: 'text',
    name: 'firstName',
    className: 'firstName',
  },
];

export default Modal;
