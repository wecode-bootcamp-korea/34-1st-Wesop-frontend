import React from 'react';
import './UseALink.scss';

const UseALink = ({ theme = 'white', text }) => {
  return (
    <div className={`useALink ${theme}`}>
      <a className="plusButton" href="/">
        {text}
      </a>
    </div>
  );
};

export default UseALink;
