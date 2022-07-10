import React, { useEffect, useState } from 'react';
import './AccountCard.scss';
import AccountPlusCard from '../AccountPlusCard/AccountPlusCard';

const AccountCard = ({
  topTitle,
  context1,
  context2,
  theme,
  unfold,
  onSave,
}) => {
  const [fold, setFold] = useState(true);
  const [userInfo, setUserInfo] = useState(unfold);

  const handleClick = e => {
    setFold(!fold);
  };

  const handleChangeInput = (name, value) => {
    setUserInfo(preUserInfo =>
      preUserInfo.map(el => {
        if (el.name === name) el.value = value;
        return el;
      })
    );
  };

  useEffect(() => {}, [userInfo]);

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
        <form className="handleSave" onSubmit={e => onSave(e, userInfo)}>
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
            />
          ))}

          <button className="goSave">저장</button>
        </form>
      )}
    </div>
  );
};

export default AccountCard;
