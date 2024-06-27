// pages/wishlist/Wishlist.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/products/ProductCard';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        wishlist.map((product) => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
};

export default Wishlist;
