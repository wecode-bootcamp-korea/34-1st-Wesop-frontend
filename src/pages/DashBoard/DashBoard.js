import React, { useState } from 'react';
// import LoginModal from '../../components/Navigation/Login/LoginModal';
import './DashBoard.scss';

const DashBoard = props => {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  return (
    <>
      {/* <button
        onClick={() => {
          setLoginIsOpen(true);
        }}
      >
        로긴로긴
      </button>
      {loginIsOpen && (
        <LoginModal
          loginIsOpen={loginIsOpen}
          setLoginIsOpen={setLoginIsOpen}
        ></LoginModal>
      )} */}
    </>
  );
};

export default DashBoard;
