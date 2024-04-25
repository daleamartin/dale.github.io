import React from 'react';

const Product = ({ name, image, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(name);
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
