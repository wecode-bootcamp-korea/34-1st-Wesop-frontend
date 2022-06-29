import React, { useEffect, useState } from 'react';
import Item from './Item/Item';
import './ItemLists.scss';

const ItemLists = props => {
  const [itemList, setItemList] = useState([]);
  const [selectedType] = useState(1);

  useEffect(() => {
    fetch('http://10.58.1.131:8001/product?category=1')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setItemList(data.message);
      });
  }, []);

  if (itemList.length === 0) return <>loading...</>;

  return (
    <div className="itemLists">
      <nav style={{ backgroundColor: 'yellow', height: '80px' }}> nav </nav>
      <main className="main">
        <section className="wrapperTitle">
          <h1 className="logo">Wesop</h1>
          <h1 className="itemType">클렌저</h1>
        </section>
        <ul className="wrapperItemTypes">
          {/* {itemList.map(itemtype => (
            <li key={itemtype.id} className="itemType">
              <a href="/" className="itemTypeText">
                {itemtype.type_name}
              </a>
            </li>
          ))} */}
        </ul>
        <section className="wrapperItems">
          <div className="itemDescription">
            <h1 className="title">{itemList[0].products.category_name}</h1>
            <h2 className="description">
              {/* {itemList[selectedType].type_description} */}
            </h2>
          </div>
          {/* {itemList[selectedType].items.map(item => (
            <Item key={item.id} item={item} />
          ))} */}
          {itemList.map(({ products }) => (
            <Item key={products.product_id} item={products} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default ItemLists;
