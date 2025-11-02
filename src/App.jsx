import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import ProductList from "./ProductList.jsx";
import Cart from "./Cart.jsx";
import About from "./About.jsx";
import Payment from "./payment.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <>

      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment />} />

      </Routes>

      
    </>
  );
}

export default App;
