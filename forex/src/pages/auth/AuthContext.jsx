// Step 1: Create a context
import React, { createContext, useState } from 'react';

 export const AuthContext = createContext();

// Step 2: Create a provider component
export const AuthContextProvider = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState(true);

 
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};