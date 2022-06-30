import React, { useState } from 'react';
import './SignUp.scss';
import Modal from './Modal/Modal';

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

export default SignUp;
