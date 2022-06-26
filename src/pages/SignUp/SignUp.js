import React, { useState } from 'react';
import './SignUp.scss';

const SignUp = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div
        className="signUp"
        onClick={() => {
          setModal(true);
        }}
      >
        회원가입창
      </div>
      <div className="modal">
        {modal ? <Modal modal={modal} setModal={setModal} /> : null}
      </div>
    </>
  );
};

const Modal = ({ modal, setModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [underLine, setUnderLine] = useState('#666666');

  const isValid = e => {
    e.target.value.includes('@' && '.com') || e.target.value === ''
      ? setEmail('')
      : setEmail(
          '이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요. (예: name@example.com)'
        );
  };

  const isSame = e => {
    let pwConfirm = e.target.value;
    let pw = document.querySelector('#pw').value;
    pwConfirm === pw || e.target.value === ''
      ? setPassword('')
      : setPassword('이전에 사용했던 패스워드를 입력하세요.');
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
          <input type="text" placeholder="이메일 주소" onKeyUp={isValid} />
          <p className="errorMessage">{email}</p>
          <input id="pw" type="password" placeholder="패스워드" />
          <input
            type="password"
            placeholder="패스워드 확인"
            onChange={isSame}
          />
          <div className="errorMessage">{password}</div>

          <div>
            <input type="text" placeholder="성" className="firstName" />
            <input type="text" placeholder="이름" className="lastName" />
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
      </div>
    </div>
  );
};

export default SignUp;
