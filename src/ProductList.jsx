import React, { useEffect, useState } from "react";
import axios from "axios";
import "./productlist.css";

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
 


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
     
  }, []);

  return (
    <div className="product-container">
      {products.map(item => (
        <div key={item.id} className="product-card">
          
          <img src={item.image} alt={item.title} className="product-image" />
          <h3>{item.title.slice(0, 25)}...</h3>
          <p>💰 ₹{item.price}</p>
          
          
          <button onClick={() => addToCart(item)  } className="product-button">
            Add to Cart
          </button>
         
          
        </div>
        
     
      ))}
    </div>
    
  );
}

export default ProductList;
