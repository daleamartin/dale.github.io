// components/Product.js
import React from 'react';

const Product = ({ name, image, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(name, price); 
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price} Price </p> { 1500.00 }
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
