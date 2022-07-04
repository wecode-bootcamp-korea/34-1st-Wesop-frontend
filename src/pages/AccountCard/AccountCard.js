import React, { useEffect, useState } from 'react';
import './AccountCard.scss';
import AccountPlusCard from '../AccountPlusCard/AccountPlusCard';

const AccountCard = ({ topTitle, context1, context2, theme, unfold }) => {
  const [fold, setFold] = useState(true);
  const [userInfo, setUserInfo] = useState(unfold);

  const handleClick = e => {
    setFold(!fold);
  };

  const handleSave = e => {
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
    fetch('http://10.58.2.100:8000/users/mypage', {
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
      .then(data => {
        console.log(data);
      });
  };

  const handleChangeInput = (name, value) => {
    setUserInfo(preUserInfo =>
      preUserInfo.map(el => {
        if (el.name === name) el.value = value;
        return el;
      })
    );
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className={`accountCard ${theme}`}>
      <div className="topTitleWrapper">
        <p className="topTitle">{topTitle}</p>
        <button onClick={handleClick}>편집</button>
      </div>

      {fold ? (
        <div className="contextWrapper">
          <p>{context1}</p>
          <p>{context2}</p>
        </div>
      ) : (
        <form className="handleSave" onSubmit={handleSave}>
          {unfold.map(value => (
            <AccountPlusCard
              key={value.title}
              inputTitle={value.title}
              inputContext={value.value}
              inputPlaceholder={value.placeholder}
              inputDisabled={value.disabled}
              inputType={value.type}
              inputName={value.name}
              onChangeInput={handleChangeInput}
              handleSaveInput={handleSave}
            />
          ))}

          <button className="goSave" onClick={handleSave}>
            저장
          </button>
        </form>
      )}
    </div>
  );
};

export default AccountCard;
