import React from 'react';
import './ItemCard.scss';

const ItemCard = ({ itemPhoto, itemName, itemDescription }) => {
  return (
    <div className="itemCard">
      <img className="itemPhoto" src={itemPhoto} alt="itemPhoto" />
      <div className="itemInfo">
        <h5 className="itemName">{itemName}</h5>
        <div className="itemDescription">{itemDescription}</div>
      </div>
    </div>
  );
};

export default ItemCard;
