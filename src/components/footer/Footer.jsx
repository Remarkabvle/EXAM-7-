import React from 'react';
import { FaFacebookF, FaTwitter, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex } from 'react-icons/fa';
import logo from '../../assets/logo.svg'; 
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container"> 
      <div className="footer__top container">
        <ul>
          <img src={logo} alt="E-Comm Logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever. Since the 1500s, when an unknown printer.
          </p>
        </ul>
        <ul>
          <h3>Follow Us</h3>
          <p>
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div className="socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </ul>
        <ul>
          <h3>Contact Us</h3>
          <p>E-Comm, 4578</p>
          <p>Marmora Road,</p>
          <p>Glasgow D04 89GR</p>
        </ul>
        <ul>
          <h3>Information</h3>
          <p>About Us</p>
          <p>Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </ul>
        <ul>
          <h3>Service</h3>
          <p>About Us</p>
          <p>Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </ul>
        <ul>
          <h3>My Account</h3>
          <p>About Us</p>
          <p>Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </ul>
        <ul>
          <h3>Our Offers</h3>
          <p>About Us</p>
          <p>Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </ul>
      </div>
      <div className="footer__bottom container">
        <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
        <div className="payments">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcAmex />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
