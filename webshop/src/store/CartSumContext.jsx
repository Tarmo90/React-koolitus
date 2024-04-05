import React, { createContext, useState } from 'react';

// Step 1: Create a context
export const CartSumContext = createContext();

// Step 2: Create a provider component
export const CartSumContextProvider = ({ children }) => {
  

  const calculateTotal = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let sum = 0;
    cart.forEach(cp => sum += cp.product.price * cp.quantity);
    return sum.toFixed(2);
  };
  const [cartSum, setCartSum] = useState(calculateTotal());
  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
};
