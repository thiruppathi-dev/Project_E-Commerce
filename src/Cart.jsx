import React from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty 😔</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-card">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div>
                <h4>{item.title}</h4>
                <p>Price: ₹{item.price.toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3 className="total">Total: ₹{total.toFixed(2)}</h3>

          {/* ✅ Pass cart & total via navigate */}
          <button
            className="proceed-btn"
            onClick={() => navigate("/payment", { state: { cart, total } })}
          >
            Proceed to Payment 💳
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
