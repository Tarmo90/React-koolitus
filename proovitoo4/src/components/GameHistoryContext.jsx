
import React, { createContext, useContext, useState } from 'react';

const GameHistoryContext = createContext();

export const useGameHistory = () => {
  return useContext(GameHistoryContext);
};

export const GameHistoryProvider = ({ children }) => {
  const [gameHistory, setGameHistory] = useState([]);

  const addGameResult = (result) => {
    setGameHistory([...gameHistory, result]);
  };

  return (
    <GameHistoryContext.Provider value={{ gameHistory, addGameResult }}>
      {children}
    </GameHistoryContext.Provider>
  );
};
