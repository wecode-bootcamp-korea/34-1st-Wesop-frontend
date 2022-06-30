import React, { useState } from 'react';
import './AccountCard.scss';
import AccountPlusCard from '../AccountPlusCard/AccountPlusCard';

const AccountCard = ({ topTitle, context1, context2, theme, unfold }) => {
  const [fold, setFold] = useState(true);

  const handleClick = e => {
    setFold(!fold);
  };

  const handleSave = e => {
    e.preventDefault();

    console.log({
      last_name: e.target[0].value,
      first_name: e.target[1].value,
      email: e.target[2].value,
    });
  };

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
        <form className="aaa" onSubmit={handleSave}>
          {unfold.map(value => (
            <AccountPlusCard
              key={value.title}
              inputTitle={value.title}
              inputContext={value.context}
              inputPlaceholder={value.placeholder}
              inputDisabled={value.disabled}
            />
          ))}

          <button className="goSave">저장</button>
        </form>
      )}
    </div>
  );
};

export default AccountCard;
