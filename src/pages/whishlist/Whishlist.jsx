import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/products/ProductCard';
import './Wishlist.scss'; // Import the new SCSS file

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div className="wishlist-wrapper">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="wishlist-products">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
