import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';
import logo from '../../assets/logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <img src={logo} alt="E-Comm Logo" />
      </div>
      {!isOpen && (
        <div className="navbar-toggle" onClick={toggleMenu}>
          <FaBars size={24} />
        </div>
      )}
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <div className="navbar-toggle" onClick={toggleMenu}>
            <FaTimes size={24} />
          </div>
        )}
        <li><a href="#home">HOME</a></li>
        <li><a href="#bags">BAGS</a></li>
        <li><a href="#sneakers">SNEAKERS</a></li>
        <li><a href="#belt">BELT</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
