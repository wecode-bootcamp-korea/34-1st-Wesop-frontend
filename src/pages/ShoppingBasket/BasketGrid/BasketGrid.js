import React from 'react';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BasketRow from '../BasketRow/BasketRow';
import './BasketGrid.scss';

const BasketGrid = ({
  shoppingBasketItems,
  onChangeQuantity,
  onDeleteItem,
}) => (
  <section className="basketGrid">
    <div className="wrapperTitle">
      <div className="title name">카트</div>
      <div className="title size">사이즈</div>
      <div className="title quantities">수량</div>
      <div className="title delete" />
      <div className="title price">
        <FontAwesomeIcon icon={faX} />
      </div>
    </div>
    {shoppingBasketItems.length > 0 &&
      shoppingBasketItems.map(el => (
        <BasketRow
          key={el.id}
          {...el}
          onChangeQuantity={onChangeQuantity}
          onDeleteItem={onDeleteItem}
        />
      ))}
  </section>
);

export default BasketGrid;
