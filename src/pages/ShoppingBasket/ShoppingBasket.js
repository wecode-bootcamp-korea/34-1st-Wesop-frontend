import React, { useEffect, useState } from 'react';
import BasketGrid from './BasketGrid/BasketGrid';
import './ShoppingBasket.scss';

const ShoppingBasket = ({ show, setShoppingBasketShow }) => {
  const [shoppingBasketItems, setShoppingBasketItems] = useState([]);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    // const localItems = JSON.parse(localStorage.getItem('shoppingBasketItems'));
    // if (!localItems || localItems.length === 0) return;
    // setShoppingBasketItems(localItems);
    setShoppingBasketItems([
      { id: 1, name: '샴푸', size: '100 ml', quantity: 2, price: 10000 },
      {
        id: 2,
        name: '레저렉션 아로마틱 핸드워시',
        size: '100 ml',
        quantity: 5,
        price: 10000,
      },
      {
        id: 3,
        name: '에이 로즈 바이 애니 아더 네임 바디 클렌저',
        size: '100 ml',
        quantity: 1,
        price: 20000,
      },
      { id: 4, name: '브레스리스', size: '500 ml', quantity: 3, price: 39000 },
    ]);
  }, []);

  const handleChangeQuantity = (id, quantity) => {
    setShoppingBasketItems(preItems => {
      return preItems.map(preItem => {
        if (preItem.id === id) preItem.quantity = quantity;
        return preItem;
      });
    });
  };

  const handleDeleteItem = id => {
    setShoppingBasketItems(preItems => {
      return preItems.filter(preItem => preItem.id !== id);
    });
  };

  const handleCloseShoppingBasket = () => {
    setShoppingBasketShow(false);
  };

  return (
    <div className="shoppingBasket">
      <BasketGrid
        shoppingBasketItems={shoppingBasketItems}
        onChangeQuantity={handleChangeQuantity}
        onDeleteItem={handleDeleteItem}
        onCloseShoppingBasket={handleCloseShoppingBasket}
      />
      <div className="wrapperPayment">
        <p className="description">전 제품 무료 배송 혜택을 즐겨보세요</p>
        <div className="wrapperAmount">
          <span className="title">소계(세금 포함)</span>
          <span className="amount">
            ₩{' '}
            {shoppingBasketItems
              .reduce((a, b) => a + b.price * b.quantity, 0)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          </span>
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
