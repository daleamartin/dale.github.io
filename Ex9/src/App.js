import React, { useState } from 'react';
import Header from './components/Header';
import NavigationButton from './components/NavigationButton';
import Product from './components/Product';
import Cart from './components/Cart'; // Import the Cart component
import './App.css';

const menus = [
  { name: "Appliances", url: "#1", id: 1 },
  { name: "Groceries", url: "#2", id: 2 },
  { name: "Gadgets", url: "#3", id: 3 },
  { name: "Clothing", url: "#4", id: 4 },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemName) => {
    const newItem = {
      id: cartItems.length + 1,
      name: itemName,
    };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="app">
      <Header name="Lazado" />
      <div className="navigation-panel">
        {menus.map(menu => (
          <NavigationButton key={menu.id} name={menu.name} url={menu.url} />
        ))}
      </div>
      <div className="products">
        <Product
          name="Washing Machine"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9UJK5RNIZQOokieBrBlOGcTv_J7fxg980ac_uzfGwbw&s"
          addToCart={() => addToCart("Washing Machine")}
        />
        <Product
          name="Television"
          image="https://d2e43a34qx5asz.cloudfront.net/mf_webp/jpg/media/catalog/product/cache/fda0efda5617cff72f1b9651d1be5a15/h/i/hisense-32a4gs-32-hd-smart-led-tv_3.webp"
          addToCart={() => addToCart("Television")}
        />
      </div>
      <Cart items={cartItems} removeFromCart={removeFromCart} /> {/* Render the Cart component */}
    </div>
  );
}

export default App;
