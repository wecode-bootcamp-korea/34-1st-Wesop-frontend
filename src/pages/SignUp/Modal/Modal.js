import React, { useState } from 'react';

const Modal = ({ modal, setModal }) => {
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [userInfo, setUserInfo] = useState({
    id: '',
    pw: '',
    firstName: '',
    lastName: '',
  });
  const { id, pw, firstName, lastName } = userInfo;

  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const isValid = () => {
    id.includes('@' && '.com') || id === ''
      ? setEmailErrorMessage('')
      : setEmailErrorMessage(
          '이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요. (예: name@example.com)'
        );
  };

  const isSame = () => {
    let password = document.querySelector('#pw').value;
    pw === password || pw === ''
      ? setPasswordErrorMessage('')
      : setPasswordErrorMessage('이전에 사용했던 패스워드를 입력하세요.');
  };

  const SignUp = () => {
    fetch('http://10.58.7.17:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
        first_name: firstName,
        last_name: lastName,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  return (
    <div className="modalBody">
      <div className="modalBox">
        <div className="buttons">
          <button>⇦</button>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            x
          </button>
        </div>
        <div className="modalTitle">이솝에 오신 것을 환영합니다.</div>
        <div className="modalSubtitle">
          회원가입을 위해 아래의 세부 정보를 작성해주세요.
        </div>
        <form>
          <input
            name="id"
            type="text"
            placeholder="이메일 주소"
            onChange={getUserInfo}
            onFocusOut={isValid}
          />
          <p className="errorMessage">{emailErrorMessage}</p>
          <input id="pw" type="password" placeholder="패스워드" />
          <input
            name="pw"
            type="password"
            placeholder="패스워드 확인"
            onChange={getUserInfo}
            onKeyUp={isSame}
          />
          <div className="errorMessage">{passwordErrorMessage}</div>

          <div>
            <input
              name="firstName"
              type="text"
              placeholder="성"
              className="firstName"
            />
            <input
              name="lastName"
              type="text"
              placeholder="이름"
              className="lastName"
            />
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
        <button className="signUpButton">등록</button>
        <div className="haveAccountBox">
          <button className="haveAccount">이솝 계정을 가지고 계십니까?</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
