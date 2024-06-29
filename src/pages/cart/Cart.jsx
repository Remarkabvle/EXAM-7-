import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../../context/cartSlice';
import PaymentModal from './PaymentModal';
import './Cart.scss';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [voucherCode, setVoucherCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleRemoveClick = (product) => {
    if (window.confirm('Are you sure you want to remove this item from your cart?')) {
      dispatch(removeFromCart(product));
    }
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const handleVoucherCodeChange = (e) => {
    setVoucherCode(e.target.value);
  };

  const handleVoucherCodeSubmit = () => {
    if (voucherCode === 'DISCOUNT10') {
      setCouponDiscount(10);
    } else {
      alert('Invalid voucher code');
    }
  };

  const clearCartItems = () => {
    dispatch(clearCart());
    localStorage.removeItem('cart'); 
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = 20;
  const totalWithDiscount = (totalAmount + shippingFee - couponDiscount).toFixed(2);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QTY</th>
                <th>UNIT PRICE</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="cart-item">
                  <td className="product-column">
                    <button className="remove-btn" onClick={() => handleRemoveClick(item)}>×</button>
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                    <div className="cart-item-info">
                      <h3>{item.title}</h3>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <div className="quantity-control">
                      <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="voucher-section">
            <input type="text" placeholder="Voucher Code" value={voucherCode} onChange={handleVoucherCodeChange} />
            <button onClick={handleVoucherCodeSubmit}>Apply</button>
          </div>
          <div className="summary-section">
            <div className="summary-item">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Shipping fee</span>
              <span>${shippingFee}</span>
            </div>
            <div className="summary-item">
              <span>Coupon</span>
              <span>{couponDiscount ? `$${couponDiscount}` : 'No'}</span>
            </div>
            <hr />
            <div className="summary-total">
              <span>TOTAL</span>
              <span>${totalWithDiscount}</span>
            </div>
            <button className="checkout-button" onClick={() => setShowModal(true)}>
              Check out
            </button>
          </div>
        </>
      )}
      <PaymentModal showModal={showModal} setShowModal={setShowModal} clearCart={clearCartItems} />
    </div>
  );
}

export default Cart;
