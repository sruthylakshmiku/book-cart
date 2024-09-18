import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cartItems.map((item) => (
          <li key={item.id} style={{ margin: '20px 0' }}>
            <img src={item.imageUrl} alt={item.title} style={{ width: '250px', marginRight: '150px' }} />
            <span>{item.title}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
    </div>
  );
};

export default Cart;
