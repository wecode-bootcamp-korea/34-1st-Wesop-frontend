import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item/Item';
import './ItemLists.scss';

const ItemLists = ({ setShoppingBasketShow }) => {
  const [itemList, setItemList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState([]);
  const [selectedType] = useState(1);
  const params = useParams();

  const getCategory = (categories, categoryId) => {
    if (categories.length === 0 || !categoryId) return [];
    for (let i = 0; i < categories.length; i++) {
      for (let k = 0; k < categories[i].sub_category[0].category.length; k++) {
        if (categories[i].sub_category[0].category[k].id == categoryId) {
          return [
            { id: 0, name: '전체보기' },
            ...categories[i].sub_category[0].category,
          ];
        }
      }
    }
    return [];
  };

  useEffect(() => {
    setShowCategories(getCategory(categories, params.id));
  }, [categories, params]);

  useEffect(() => {
    fetch(`http://10.58.4.206:8000/products?category_id=${params.id}`)
      .then(response => response.json())
      .then(data => {
        setItemList(data.message);
      });
  }, [params]);

  useEffect(() => {
    fetch('http://10.58.4.206:8000/products/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data.results);
      });
  }, []);

  if (itemList.length === 0) return <>loading...</>;

  return (
    <div className="itemLists">
      <main className="main">
        <section className="wrapperTitle">
          <h1 className="logo">Wesop</h1>
          <h1 className="itemType">{itemList[0].products.category_name}</h1>
        </section>
        <ul className="wrapperItemTypes">
          {showCategories.map(itemtype => (
            <li key={itemtype.id} className="itemType">
              <span className="itemTypeText">{itemtype.name}</span>
            </li>
          ))}
        </ul>
        <section className="wrapperItems">
          <div className="itemDescription">
            <h1 className="title">핵심이 되는 준비과정</h1>
            <h2 className="description">
              토닝은 깨끗한 피부를 탄생시키는 핵심적인 역할을 합니다. 오랫동안
              남아있는 잔여물과 피지를 씻어내고 피부의 밸런스를 잡아주며 수분
              공급을 위해 피부를 준비합니다.
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
