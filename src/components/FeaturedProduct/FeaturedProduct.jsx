import React from "react";
import "./FeaturedProduct.scss";

const FeaturedProduct = () => {
  const products = [
    {
      name: "Blue Swade Nike Sneakers",
      price: 499,
      originalPrice: 599,
      imageUrl:
        "https://via.placeholder.com/300x200.png?text=Green+Swade+Nike+Sneakers",
      rating: 4.5,
    },
    {
      name: "Red Swade Nike Sneakers",
      price: 399,
      originalPrice: 499,
      imageUrl:
        "https://via.placeholder.com/300x200.png?text=Red+Swade+Nike+Sneakershttps://via.placeholder.com/300x200.png?text=Green+Swade+Nike+Sneakers",
      rating: 4.0,
    },
    {
      name: "Green Swade Nike Sneakers",
      price: 299,
      originalPrice: 399,
      imageUrl:
        "https://via.placeholder.com/300x200.png?text=Green+Swade+Nike+Sneakers",
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
