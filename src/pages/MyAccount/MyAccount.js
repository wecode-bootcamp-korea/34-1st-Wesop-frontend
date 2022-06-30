import React, { useEffect, useState } from 'react';
import AccountCard from '../AccountCard/AccountCard';
import './MyAccount.scss';

const MyAccount = props => {
  const [accountInfo, setAccountInfo] = useState({});

  useEffect(() => {
    fetch('http://10.58.4.206:8000/users/mypage', {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.l1SmzbSBW9SHz1kOi7uVgE4sRkSwAQmVj-7_kcYgpBA',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAccountInfo(data);
      });
  }, []);

  if (Object.keys(accountInfo).length === 0) return <>loading...</>;

  const accountUnfold = [
    { title: '성', context: accountInfo.user_information.last_name },
    { title: '이름', context: accountInfo.user_information.first_name },
    {
      title: 'email',
      context: accountInfo.user_information.email,
      disabled: true,
    },
  ];

  const pwUnfold = [
    { placeholder: '현재 패스워드' },
    { placeholder: '새 패스워드' },
    { placeholder: '새 패스워드 확인하기' },
  ];

  return (
    <div className="myAccountWrapper">
      <nav className="navi">nav</nav>
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
      />

      <AccountCard
        topTitle="패스워드"
        context1={`${accountInfo.user_information.password}`}
        theme="border"
        unfold={pwUnfold}
        placeholder={pwUnfold}
      />
      <AccountCard topTitle="피부를 설명해 주세요" />
    </div>
  );
};

export default MyAccount;
