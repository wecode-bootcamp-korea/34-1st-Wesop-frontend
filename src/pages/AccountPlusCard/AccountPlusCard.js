import React from 'react';
import './AccountPlusCard.scss';

const AccountPlusCard = ({
  inputTitle,
  inputContext,
  inputPlaceholder,
  inputDisabled,
  inputType,
  inputName,
  onChangeInput,
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
          type={inputType}
          name={inputName}
          onChange={e => onChangeInput(e.target.name, e.target.value)}
        />
      </div>
    </div>
  );
};

export default AccountPlusCard;
