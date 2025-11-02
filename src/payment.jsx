import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Receive state safely
  const { cart = [], total = 0 } = location.state || {};

  const [method, setMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handlePayment = (e) => {
    e.preventDefault();

    if (!method) {
      alert("⚠️ Please select a payment method!");
      return;
    }

    if (method === "GPay" && !upiId) {
      alert("⚠️ Please enter your UPI ID!");
      return;
    }

    if (
      method === "Card" &&
      (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvv)
    ) {
      alert("⚠️ Please fill all card details!");
      return;
    }

    alert("✅ Payment Successful!");
    navigate("/");
  };

  return (
    <div className="payment-wrapper">
      <div className="payment-container">
        <h2 className="payment-title">💳 Payment Page</h2>

        <div className="payment-summary">
          <h3>Order Summary</h3>
          <p>Items: <strong>{cart.length}</strong></p>
          <p>Total Amount: <strong>₹{total.toFixed(2)}</strong></p>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods">
          <button
            className={method === "GPay" ? "selected" : ""}
            onClick={() => setMethod("GPay")}
          >
            GPay / UPI
          </button>
          <button
            className={method === "Card" ? "selected" : ""}
            onClick={() => setMethod("Card")}
          >
            Debit / Credit Card
          </button>
          <button
            className={method === "COD" ? "selected" : ""}
            onClick={() => setMethod("COD")}
          >
            Cash on Delivery
          </button>
        </div>

        <form className="payment-form" onSubmit={handlePayment}>
          {method === "Card" && (
            <>
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.number}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, number: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Card Holder Name"
                value={cardDetails.name}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Expiry (MM/YY)"
                value={cardDetails.expiry}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, expiry: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
              />
            </>
          )}

          {method === "GPay" && (
            <input
              type="text"
              placeholder="Enter your UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          )}

          {method && (
            <button type="submit" className="confirm-btn">
              Confirm Payment
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Payment;
