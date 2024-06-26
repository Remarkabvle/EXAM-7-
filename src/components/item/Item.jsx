import React from 'react';
import './Item.scss';
import h1 from '../../assets/h1.png';

const items = [
  {
    name: 'FS - QUILTED MAXI CROSS BAG',
    imageUrl: h1,
    oldPrice: 534.33,
    discount: 24,
    price: 299.43,
  },
  {
    name: 'FS - Nike Air Max 270 React...',
    imageUrl: h1,
    oldPrice: 534.33,
    discount: 24,
    price: 299.43,
  },
  {
    name: 'FS - Nike Air Max 270 React...',
    imageUrl: h1,
    oldPrice: 534.33,
    discount: 24,
    price: 299.43,
  },
];

const Item = () => {
  return (
    <div className="items container">
      {items.map((item, index) => (
        <div key={index} className="item">
          <div className="item-image" style={{ backgroundImage: `url(${item.imageUrl})` }}>
            <div className="item-info">
              <h2>{item.name}</h2>
              <p>
                <span className="old-price">${item.oldPrice.toFixed(2)}</span> <span className="discount">{item.discount}% Off</span>
              </p>
              <p className="price">${item.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
