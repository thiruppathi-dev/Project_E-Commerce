import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Navbar({ cartCount }) {
  return (
    <nav className="nav">
      <h2 className="logo">🛍️ Ecamus</h2>
      <div className="nav-links">
        <Link to="/" className="link">Home</Link>
        <Link to="/products" className="link">Products</Link>
        <Link to="/cart" className="link">Cart ({cartCount})</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/payment" className="link">Payment</Link>
      </div>
    </nav>
  );
}

export default Navbar;
