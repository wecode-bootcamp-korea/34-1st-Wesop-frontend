import React, { useState } from 'react';
import './Item.scss';
const Item = ({ item: { id, name, subTexts, models } }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemTypeChange = ({ target: { value } }) => {
    setSelectedIndex(parseInt(value));
  };
  return (
    <div className="item">
      <img className="image" src={models[selectedIndex]?.image} alt="test" />
      <p className="name">{name}</p>
      {models.length === 1 ? (
        <div className="wrapperOneModel">
          <p className="model">
            {`${models[selectedIndex]?.name} / ₩ ${models[selectedIndex]?.price}`}
          </p>
        </div>
      ) : (
        <div className="wrapperManyModel">
          <p className="model">
            {`${models.length} 사이즈 / ₩ ${models[0].price} 원 부터`}
          </p>
          <div className="wrapperCheckModel">
            {models.map((model, index) => {
              return (
                <label key={index} className="labelModel">
                  <input
                    className="checkModel"
                    type="radio"
                    name={`${id}itemType`}
                    value={index}
                    defaultChecked={selectedIndex === index}
                    onChange={handleItemTypeChange}
                  />
                  {model.name}
                </label>
              );
            })}
          </div>
        </div>
      )}
      <div className="wrapperSubText">
        {subTexts.map(({ id, title, discription }) => {
          return (
            <div key={id} className="subText">
              <span className="title">{title}</span>
              <span className="discription">{discription}</span>
            </div>
          );
        })}
      </div>
      <button className="addCart">
        카트에 추가 - ₩ {models[selectedIndex]?.price}
      </button>
    </div>
  );
};

export default Item;
