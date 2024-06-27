import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaRegHeart,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import "./ProductCard.scss";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/WishlistSlice";
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const wishlist = useSelector((state) => state.wishlist);
  const isLiked = wishlist.some((item) => item.id === product.id);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const getRating = (rating) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FaStar key={i} />);
    }
    if (rating % 1 >= 0.5) {
      stars.push(<FaStarHalfAlt key={"half"} />);
    }
    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} />);
    }
    return stars;
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();  // Initialize useNavigate

  const handleLikeClick = () => {
    dispatch(like(product));
  };

  if (loading) {
    return (
      <div className="product-card loading">
        <div className="product-image skeleton"></div>
        <div className="product-info">
          <div className="title skeleton"></div>
          <div className="rating skeleton"></div>
          <div className="price-info">
            <div className="price skeleton"></div>
            <div className="old-price skeleton"></div>
            <div className="discount skeleton"></div>
          </div>
        </div>
      </div>
    );
  }

  const oldPrice = product.oldPrice || product.price + 50;
  const discount = ((oldPrice - product.price) / oldPrice) * 100;

  return (
    <>
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
          <div className="overlay">
            <button className="cart-btn">
              <FaShoppingCart />
            </button>
            <button onClick={handleLikeClick} className="like-btn">
              {isLiked ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
        <div className="product-info">
          <h3 className="title" onClick={() => navigate(`/product/${product.id}`)}>
            {product.title}
          </h3>
          <div className="rating">{getRating(product.rating.rate)}</div>
          <div className="price-info" onClick={() => setIsModalOpen(true)}>
            <h2 className="price">${product.price.toFixed(2)}</h2>
            <p className="old-price">${oldPrice.toFixed(2)}</p>
            <h3 className="discount">{discount.toFixed(0)}% Off</h3>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          title={product.title}
          image={product.image}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
