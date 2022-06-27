import React from 'react';
import './BasketRow.scss';
const BasketRow = ({ name, size, quantity, price }) => {
  return (
    <>
      <div className="info">{name}</div>
      <div className="info size">{size}</div>
      <select className="info quantities">
        {[1, 2, 3, 4, 5].map(el => (
          <option key={el} value={el} selected={el === quantity}>
            {el}
          </option>
        ))}
      </select>
      <button className="info delete">삭제</button>
      <div className="info price">₩ {price}</div>
    </>
  );
};

export default BasketRow;
