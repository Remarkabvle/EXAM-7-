import React from "react";
import "./FeaturedProduct.scss";
import nt1 from '../../assets/nt1.png'

const FeaturedProduct = () => {
  const products = [
    {
      name: "Blue Swade Nike Sneakers",
      price: 499,
      originalPrice: 599,
      imageUrl:
        nt1
      ,
      rating: 4.5,
    },
    {
      name: "Red Swade Nike Sneakers",
      price: 399,
      originalPrice: 499,
      imageUrl:nt1,
      rating: 4.0,
    },
    {
      name: "Green Swade Nike Sneakers",
      price: 299,
      originalPrice: 399,
      imageUrl:
        nt1,
      rating: 4.2,
    },
  ];

  return (
    <div className="app">
      <h1>Featured Products</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="featured-product">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <div>
              <h2 className="product-name">{product.name}</h2>
              <div className="product-rating">{product.rating} ★★★★★</div>
              <div className="product-prices">
                <span className="product-price">${product.price}</span>
                <span className="product-original-price">
                  ${product.originalPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
