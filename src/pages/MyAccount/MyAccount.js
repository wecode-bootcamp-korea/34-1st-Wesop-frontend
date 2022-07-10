import React, { useEffect, useState } from 'react';
import AccountCard from '../AccountCard/AccountCard';
import './MyAccount.scss';

const MyAccount = props => {
  const [accountInfo, setAccountInfo] = useState({});

  useEffect(() => {
    fetch('http://10.58.4.126:8000/users/mypage', {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.l1SmzbSBW9SHz1kOi7uVgE4sRkSwAQmVj-7_kcYgpBA',
      },
    })
      .then(res => res.json())
      .then(data => {
        setAccountInfo(data);
      });
  }, []);

  const handleUserNameSave = (e, userInfo) => {
    e.preventDefault();
    let firstName = '';
    let lastName = '';
    userInfo.map(el => {
      if (el.name === 'last_name') {
        lastName = el.value;
      } else if (el.name === 'first_name') {
        firstName = el.value;
      }
    });
    fetch('http://10.58.4.126:8000/users/mypage', {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.l1SmzbSBW9SHz1kOi7uVgE4sRkSwAQmVj-7_kcYgpBA',
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
      }),
    })
      .then(res => res.json())
      .then(data => {});
  };

  const handlePWSave = (e, userInfo) => {
    e.preventDefault();
    let newPassword = '';
    let rePassword = '';
    userInfo.map(el => {
      if (el.name === 'password') {
        newPassword = el.value;
      } else if (el.name === 'rePassword') {
        rePassword = el.value;
      }
    });
    if (newPassword !== rePassword) {
      alert('2개의 패스워드가 일치하지 않습니다');
      return;
    }

    fetch('http://10.58.4.126:8000/users/mypage', {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.l1SmzbSBW9SHz1kOi7uVgE4sRkSwAQmVj-7_kcYgpBA',
      },
      body: JSON.stringify({
        password: newPassword,
      }),
    })
      .then(res => res.json())
      .then(data => {});
  };

  if (Object.keys(accountInfo).length === 0) return <>loading...</>;

  const accountUnfold = [
    {
      title: '성',
      name: 'last_name',
      value: accountInfo.user_information.last_name,
    },
    {
      title: '이름',
      name: 'first_name',
      value: accountInfo.user_information.first_name,
    },
    {
      title: 'email',
      name: 'email',
      value: accountInfo.user_information.email,
      disabled: true,
    },
  ];

  const pwUnfold = [
    { placeholder: '현재 패스워드', type: 'password' },
    { placeholder: '새 패스워드', type: 'password', name: 'password' },
    {
      placeholder: '새 패스워드 확인하기',
      type: 'password',
      name: 'rePassword',
    },
  ];

  return (
    <div className="myAccountWrapper">
      <div className="accountHeading">
        <h1 className="welcomeName">
          {`환영합니다 ${accountInfo.user_information.full_name} 님`}
        </h1>
      </div>
      <AccountCard
        topTitle="개인 정보"
        context1={`${accountInfo.user_information.full_name} 님`}
        context2={`${accountInfo.user_information.email}`}
        theme="border"
        unfold={accountUnfold}
        onSave={handleUserNameSave}
      />

      <AccountCard
        topTitle="패스워드"
        context1="●●●●●●●●●●●●●●●●●●●●●"
        theme="border"
        unfold={pwUnfold}
        placeholder={pwUnfold}
        onSave={handlePWSave}
      />
      <AccountCard topTitle="피부를 설명해 주세요" />
    </div>
  );
};

export default MyAccount;
