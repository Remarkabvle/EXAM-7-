import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="navbar container" ref={menuRef}>
      <div className="navbar-logo">
        <img src={logo} alt="E-Comm Logo" />
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/bags" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
            BAGS
          </NavLink>
        </li>
        <li>
          <NavLink to={isAuthenticated ? "/admin" : "/login"} onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
            {isAuthenticated ? "ADMIN" : "LOGIN"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => (isActive ? 'active-link' : '')}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
