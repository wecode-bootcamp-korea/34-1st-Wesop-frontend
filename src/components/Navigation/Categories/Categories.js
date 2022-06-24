import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';

const Categories = ({ name, items }) => {
  return (
    <div className="categories">
      <ul className="categoriesWrap">
        <h2 className="categoryTitle">{name}</h2>
        {items.map(menu => {
          return (
            <li className="categoryInList" key={menu.id}>
              <Link to="/" className="listLink">
                <span className="listLabel">{menu.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
