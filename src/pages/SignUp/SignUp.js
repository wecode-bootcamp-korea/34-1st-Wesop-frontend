import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, navigate } from 'react';
import './SignUp.scss';
import Modal from './Modal/Modal';

const SignUp = () => {
  const [modal, setModal] = useState(false);
  // const [count, setCount] = useState(0);

  // const addCount = () => {
  //   setCount(count + 1);
  //   console.log(count); // 0
  //   setCount(count => count + 1);
  // };
  //함수형 업데이트 사용 여부 - 이전의 상태값이 중요한가? 이전의 상태값을 저장할 필요가 있는지. 예를 들어 회원가입 창에서 입력된 이메일과 패스워드를 state에 저장할 때는 이전에 입력한 값이 중요하지 않기 때문에 함수형 업데이트를 사용할 필요가 없음. 하지만 캐러쉘 제작 부분에서는 이전의 상태값(이동하는 거리)에 계속 +-를 해주는 것이기 때문에 혹시 모를 에러를 위해 함수형 업데이트를 사용하는 것이 좋다.

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

export default SignUp;
