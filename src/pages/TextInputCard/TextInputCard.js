import React from 'react';

const TextInputCard = {textTitle, textContext} => {
  return (
    <div className="textInputCard">
      <p className="textTitle">{textTitle}</p>
      <input className="textContext">{textContext}</input>
    </div>
  );
};
export default TextInputCard;
