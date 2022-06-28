import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';

const Categories = ({ name, category, modalChange }) => {
  return (
    <div className="categories">
      <ul className="categoriesWrap">
        <h2 className="categoryTitle">{name}</h2>
        {category.map(({ id, name }) => {
          return (
            <li className="categoryInList" key={id}>
              <Link
                to={`/item-lists/${id}`}
                className="listLink"
                onClick={() => modalChange(false)}
              >
                <span className="listLabel">{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
