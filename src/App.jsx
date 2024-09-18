import React, { useState } from 'react';
import BookList from './components/BookList';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Book Cart App</h1>
      <BookList addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
