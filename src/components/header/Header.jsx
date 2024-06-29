import React from "react";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.scss";

function Header() {
  const wishlist = useSelector((state) => state.wishlist);
  const wishlistCount = wishlist.length;

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
          <NavLink to="/cart" className="header__icon header__cart"> {/* Update this line */}
            <FaShoppingCart />
            <span className="header__cart-badge">2</span>
          </NavLink>
        </div>
        <div className="header__items">Items $0.00</div>
      </div>
    </header>
  );
}

export default Header;
