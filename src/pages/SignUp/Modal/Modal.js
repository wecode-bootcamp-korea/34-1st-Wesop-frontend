import React, { useState, useEffect } from 'react';

const Modal = ({ modal, setModal }) => {
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [userInfo, setUserInfo] = useState({
    id: '',
    pw: '',
    lastName: '',
    fisrtName: '',
  });
  const [disabled, setDisabled] = useState(false);
  const [placeholder, setPlaceholder] = useState('largePlaceholder');
  const { id, pw, lastName, firstName } = userInfo;

  const getUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  };

  const isValid = () => {
    // id.includes('@' && '.com') || id === ''
    //   ? setEmailErrorMessage('')
    //   : setEmailErrorMessage(
    //       '이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요. (예: name@example.com)'
    //     );
    if (id.includes('@' && '.com')) {
      setEmailErrorMessage('');
    } else {
      setEmailErrorMessage(
        '이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요. (예: name@example.com)'
      );
      setDisabled(true);
    }
  };

  const isSame = () => {
    let password = document.querySelector('#pw').value;
    // pw === password || pw === ''
    //   ? setPasswordErrorMessage('')
    //   : setPasswordErrorMessage('이전에 사용했던 패스워드를 입력하세요.');
    if (pw === password || pw === '') {
      setEmailErrorMessage('');
    } else {
      setPasswordErrorMessage('이전에 사용했던 패스워드를 입력하세요.');
      setDisabled(true);
    }
  };

  const movePlaceholder = () => {
    setPlaceholder('smallPlaceholder');
    if (document.querySelector('.input').value === '') {
      setPlaceholder('largePlaceholder');
    }
  };

  const disableButton = () => {
    if (lastName === '' || firstName === '') {
      setDisabled(true);
    }
  };

  const onChangeFunction = () => {
    getUserInfo();
    isValid();
    movePlaceholder();
  };

  const signUp = () => {
    fetch('http://10.58.3.48:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
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
          <div className="placeholder">
            <p className={placeholder}>이메일 주소</p>
            <input
              name="id"
              type="text"
              // placeholder="이메일 주소"
              onChange={onChangeFunction}
              className="input"
              // onKeyOut={isValid}
            />
          </div>
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
              name="lastName"
              type="text"
              placeholder="성"
              onChange={getUserInfo}
              onKeyUp={disableButton}
              className="lasttName"
            />
            <input
              name="firstName"
              type="text"
              placeholder="이름"
              onChange={getUserInfo}
              onKeyUp={disableButton}
              className="firstName"
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

export default Modal;
