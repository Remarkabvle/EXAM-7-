import React, { useState } from "react";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.scss";

function Header() {
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);

  const [debouncedClick, setDebouncedClick] = useState(false);

  const wishlistCount = wishlist.length;
  const cartCount = cart.length; 
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleCartClick = () => {
    if (!debouncedClick) {
      setDebouncedClick(true);
      setTimeout(() => setDebouncedClick(false), 1000); 
    }
  };

  return (
    <header className="header header__container">
      <div className="header__left">
        <div className="header__language">EN ▾</div>
        <div className="header__currency">USD ▾</div>
      </div>
      <div className="header__right">
        <div className="header__icons">
          <div className="header__icon">
            <FaUser />
          </div>
          <NavLink to="/wishlist" className="header__icon">
            <FaHeart />
            {wishlistCount > 0 && (
              <span className="header__wishlist-badge">{wishlistCount}</span>
            )}
          </NavLink>
          <NavLink to="/cart" className="header__icon header__cart" onClick={handleCartClick}>
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="header__cart-badge">{cartCount}</span>
            )}
          </NavLink>
        </div>
        <div className="header__items">Items: {cartCount} - ${cartTotal}</div>
      </div>
    </header>
  );
}

export default Header;
