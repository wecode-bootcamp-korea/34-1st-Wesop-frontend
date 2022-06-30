import React from 'react';
import './AccountPlusCard.scss';

const AccountPlusCard = ({
  inputTitle,
  inputContext,
  inputPlaceholder,
  inputDisabled,
}) => {
  return (
    <div className="accountPlusCard">
      <div className="textInputWrapper">
        <p className="inputTitle">{inputTitle}</p>
        <input
          className="inputContext"
          defaultValue={inputContext}
          placeholder={inputPlaceholder}
          disabled={inputDisabled}
        />
      </div>
    </div>
  );
};

export default AccountPlusCard;
