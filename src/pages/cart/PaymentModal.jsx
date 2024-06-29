import React, { useEffect } from 'react';
import { FaTimes, FaCreditCard, FaPaypal, FaUniversity } from 'react-icons/fa';
import './PaymentModal.scss';

const PaymentModal = ({ showModal, setShowModal, clearCart }) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setShowModal(false); 
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      setShowModal(false);
    }
  };

  return (
    showModal && (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content">
          <button className="close-btn" onClick={() => setShowModal(false)}>
            <FaTimes />
          </button>
          <h2>Make Payment</h2>
          <form className="payment-form" onSubmit={handleSubmit}>
            <div className="input-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="input-row">
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Address for Delivery" required />
            </div>
            <input type="tel" placeholder="Mobile Phone" required />
            <h3>Select Method Of Payment</h3>
            <div className="payment-methods">
              <label>
                <FaCreditCard className="icon" />
                <input type="radio" name="payment" value="credit" defaultChecked />
                Credit Card Or Debit
              </label>
              <label>
                <FaPaypal className="icon" />
                <input type="radio" name="payment" value="paypal" />
                PayPal
              </label>
              <label>
                <FaUniversity className="icon" />
                <input type="radio" name="payment" value="bank" />
                Bank Transfer
              </label>
            </div>
            <button type="submit" className="submit-btn">Go to Payment</button>
          </form>
        </div>
      </div>
    )
  );
};

export default PaymentModal;
