import React, { useEffect } from "react";
import { FaTimes, FaCreditCard, FaPaypal, FaUniversity } from "react-icons/fa";
import "./PaymentModal.scss";
import { useState } from "react";

const BOT_TOKEN = "7313879684:AAH0lhoKddXhkYP-YO5QnYueauqqT3J9hzE";
const CHAT_ID = "-1002180292093";

const PaymentModal = ({ showModal, setShowModal, clearCart, data }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "Buyurtma:%0A";
    text += `FirstName: <b>${fname}</b>%0A`;
    text += `LastName: <b>${lname}</b>%0A%0A`;
    text += `Email Address: <b>${email}</b>%0A`;
    text += `Address Deliver: <b>${address}</b>%0A`;
    text += `Telephone Number: <b>${phone}</b>%0A%0A`;

    data.forEach((product) => {
      text += `${product.title} %0A`;
      text += `${product.amount}ta %0A`;
      text += `${product.price}USD %0A%0A`;
    });

    let url = ` https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    // setFname("");
    // setLname("");
    // setEmail("");
    // setAddress("");
    // setPhone("");

    clearCart();
    setShowModal(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
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
              <input
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                type="text"
                placeholder="First Name"
                required
              />
              <input
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="input-row">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                required
              />
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address for Delivery"
                required
              />
            </div>
            <h3>Select Method Of Payment</h3>
            <div className="payment-methods">
              <label>
                <FaCreditCard className="icon" />
                <input
                  type="radio"
                  name="payment"
                  value="credit"
                  defaultChecked
                />
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
            <button type="submit" className="submit-btn">
              Go to Payment
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default PaymentModal;
