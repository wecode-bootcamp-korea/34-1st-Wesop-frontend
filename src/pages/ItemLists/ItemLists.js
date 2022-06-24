import React, { useEffect, useState } from 'react';
import Item from './Item/Item';
import './ItemLists.scss';

const ItemLists = props => {
  const [itemList, setItemList] = useState([]);
  const [selectedType, setSelectedType] = useState(1);

  useEffect(() => {
    fetch('/data/itemList.json')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(result => {
        console.log(result);
        setItemList(result);
      });
  }, []);

  return (
    <div className="itemLists">
      <nav style={{ backgroundColor: 'yellow', height: '80px' }}> nav </nav>
      <main className="main">
        <section className="wrapperTitle">
          <h1 className="logo">Wesop</h1>
          <h1 className="itemType">클렌저</h1>
        </section>
        <ul className="wrapperItemTypes">
          {itemList.map(itemtype => (
            <li key={itemtype.id} className="itemType">
              <a href="/" className="itemTypeText">
                {itemtype.type_name}
              </a>
            </li>
          ))}
        </ul>
        <section className="wrapperItems">
          <div className="itemDescription">
            <h1 className="title">{itemList[selectedType]?.type_title}</h1>
            <h2 className="description">
              {itemList[selectedType]?.type_description}
            </h2>
          </div>
          {itemList[selectedType] &&
            itemList[selectedType].items.map(item => (
              <Item key={item.id} item={item} />
            ))}
        </section>
      </main>
    </div>
  );
};

export default ItemLists;
