import React from 'react';
import './BasketRow.scss';

const BasketRow = ({ id, name, size, quantity, price, onChangeQuantity }) => {
  const handleChangeQuantity = ({ target: { value } }) => {
    onChangeQuantity(id, parseInt(value));
  };
  return (
    <div className="basketRow">
      <div className="col name">{name}</div>
      <div className="col size">{size}</div>
      <div className="col quantities">
        <select
          className="select"
          defaultValue={quantity}
          onChange={handleChangeQuantity}
        >
          {[1, 2, 3, 4, 5].map(el => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <button className="col delete">삭제</button>
      <div className="col price">
        ₩{' '}
        {(price * quantity)
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
      </div>
    </div>
  );
};

export default BasketRow;
