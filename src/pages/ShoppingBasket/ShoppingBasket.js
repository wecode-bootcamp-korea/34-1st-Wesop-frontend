import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import BasketRow from './BasketRowz/BasketRow';
import './ShoppingBasket.scss';

const ShoppingBasket = ({ show, setShoppingBasketShow }) => {
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'auto';
    document.body.style.overflow = 'hidden';
  }, [show]);

  // if (!show) return;

  return (
    <div className="shoppingBasket">
      <div className="list">
        <div className="title">카트</div>
        <div className="title">사이즈</div>
        <div className="title">수량</div>
        <div className="title price">
          <FontAwesomeIcon icon={faX} />
        </div>
        <BasketRow name="샴푸" size="100 mL" quantities={2} price={2000} />
        <BasketRow name="샴푸" size="100 mL" quantities={1} price={2000} />
        <BasketRow name="샴푸" size="100 mL" quantities={2} price={2000} />
        <BasketRow name="샴푸" size="100 mL" quantities={4} price={2000} />
        <BasketRow name="샴푸" size="100 mL" quantities={5} price={2000} />
        <BasketRow name="샴푸" size="100 mL" quantities={3} price={2000} />
      </div>
      <div className="wrapperPayment">
        <p className="description">전 제품 무료 배송 혜택을 즐겨보세요</p>
        <div className="wrapperAmount">
          <span className="title">소계(세금 포함)</span>
          <span className="amount">₩ 20,000</span>
        </div>
        <button className="payment">결제하기</button>
      </div>
      {/* <div
        className="black"
        onClick={() => {
          setShoppingBasketShow(false);
        }}
      /> */}
    </div>
  );
};

export default ShoppingBasket;
