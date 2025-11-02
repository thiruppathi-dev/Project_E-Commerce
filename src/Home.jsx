import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>
          Welcome to <span className="highlight">Ecamus 🛍️</span>
        </h1>
        <p className="home-text">
          Discover amazing products with a seamless shopping experience. Add items
          to your cart effortlessly and enjoy our exclusive deals!
        </p>
        <Link to="/products" className="shop-button">
          Start Shopping
        </Link>
        <div className="features">
          <div className="feature">
            <span>🚀 Fast Delivery</span>
          </div>
          <div className="feature">
            <span>💳 Secure Payment</span>
          </div>
          <div className="feature">
            <span>⭐ Quality Products</span>
          </div>
        </div>
      </div>
      <div className="home-decor">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
    </div>
  );
}

export default Home;
