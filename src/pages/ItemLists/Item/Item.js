import React, { useState } from 'react';
import './Item.scss';
const Item = ({ item }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemTypeChange = ({ target: { value } }) => {
    setSelectedIndex(parseInt(value));
  };
  return (
    <div className="item">
      <p className="title" />
      <img
        className="image"
        src={item.models[selectedIndex]?.image}
        alt="test"
      />
      <p className="name">{item.name}</p>
      {item.models.length === 1 ? (
        <div className="wrapperOneModel">
          <p className="model">
            {`${item.models[selectedIndex]?.name} / ₩ ${item.models[selectedIndex]?.price}`}
          </p>
        </div>
      ) : (
        <div className="wrapperManyModel">
          <p className="model">
            {`${item.models.length} 사이즈 / ₩ ${item.models[0].price} 원 부터`}
          </p>
          <div className="wrapperCheckModel">
            {item.models.map((model, index) => {
              return (
                <label key={index} className="labelModel">
                  <input
                    className="checkModel"
                    type="radio"
                    name={`${item.id}itemType`}
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
        {item.subTexts.map(({ id, title, discription }) => {
          return (
            <div key={id} className="subText">
              <span className="title">{title}</span>
              <span className="discription">{discription}</span>
            </div>
          );
        })}
      </div>
      <button className="addCart">
        카트에 추가 - ₩ {item.models[selectedIndex]?.price}
      </button>
    </div>
  );
};

export default Item;
