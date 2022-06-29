import React, { useState } from 'react';
import './Item.scss';
const Item = ({
  item: { product_id, product_name, product_detail, product_feature },
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemTypeChange = ({ target: { value } }) => {
    setSelectedIndex(parseInt(value));
  };
  return (
    <div className="item">
      <img
        className="image"
        src={product_detail[selectedIndex]?.image_url}
        alt="test"
      />
      <p className="name">{product_name}</p>
      {product_detail.length === 1 ? (
        <div className="wrapperOneModel">
          <p className="model">
            {`${product_detail[selectedIndex]?.name} / ₩ ${product_detail[selectedIndex]?.price}`}
          </p>
        </div>
      ) : (
        <div className="wrapperManyModel">
          <p className="model">
            {`${product_detail.length} 사이즈 / ₩ ${product_detail[0].price} 원 부터`}
          </p>
          <div className="wrapperCheckModel">
            {product_detail.map((model, index) => {
              return (
                <label key={index} className="labelModel">
                  <input
                    className="checkModel"
                    type="radio"
                    name={`${product_id}itemType`}
                    value={index}
                    defaultChecked={selectedIndex === index}
                    onChange={handleItemTypeChange}
                  />
                  {`${model.size_mL} mL`}
                </label>
              );
            })}
          </div>
        </div>
      )}
      <div className="wrapperSubText">
        {product_feature.map(({ id, feature, content }) => {
          return (
            <div key={id} className="subText">
              <span className="title">{feature}</span>
              <span className="discription">{content}</span>
            </div>
          );
        })}
      </div>
      <button className="addCart">
        카트에 추가 - ₩ {product_detail[selectedIndex]?.price}
      </button>
    </div>
  );
};

export default Item;
