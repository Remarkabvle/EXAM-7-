import React, { useState } from "react";
import { useGetProductsQuery } from "./productsApi";
import ProductCard from "../../components/products/ProductCard";
import "./ProductsList.scss";

const ProductsList = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(5); // Initial number of products to show

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const categories = [...new Set(products.map((product) => product.category))];
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5);
  };

  return (
    <div className="products-list-wrapper" style={{marginTop: '150px'}}>
      <div className="category-filter">
        <ul>
          <li
            className={!selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory("")}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="products-list container">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {visibleProducts < filteredProducts.length && (
        <button className="load-more-btn" onClick={loadMoreProducts}>
          LOAD MORE
        </button>
      )}
    </div>
  );
};

export default ProductsList;
