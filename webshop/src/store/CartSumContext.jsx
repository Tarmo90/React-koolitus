import React, { createContext, useState } from 'react';
// import { calculateTotal } from '../util/CalculatationUtil';

// Step 1: Create a context
export const CartSumContext = createContext();

// Step 2: Create a provider component
export const CartSumContextProvider = ({ children }) => {
  

  const calculateInitial = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let sum = 0;
    cart.forEach(cp => sum += cp.product.price * cp.quantity);
    return sum.toFixed(2);
    // return calculateTotal(cart)
  };
  const [cartSum, setCartSum] = useState(calculateInitial());
  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
};
