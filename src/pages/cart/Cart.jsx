import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../context/cartSlice';
import './Cart.scss';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveClick = (product) => {
    dispatch(removeFromCart(product));
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <button onClick={() => handleRemoveClick(item)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <h3>Total Amount: ${totalAmount}</h3>
      </div>
    </div>
  );
}

export default Cart;
