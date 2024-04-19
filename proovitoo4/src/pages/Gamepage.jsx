import React, { useState, useEffect } from 'react';
import '../css/GamePage.css';
import { Link } from 'react-router-dom';
import { useGameHistory } from '../components/GameHistoryContext';

function Gamepage() {
  const m2ngijad = JSON.parse(localStorage.getItem('mängijad')) || [];
  const [game, setGame] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);
  const { addGameResult } = useGameHistory();

    // useEffect(() => {
    //   if (turn === 'O') {
    //     const timer = setTimeout(() => {
    //       makeComputerMove();
    //     }, 500);
    //     return () => clearTimeout(timer);
    //   }
    // }, []); 

  const handleClick = (i) => {
    if (!game[i] && !winner) {
      const newGame = [...game];
      newGame[i] = turn;
      setGame(newGame);
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  };

  const calculateWinner = (game) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (game[a] && game[a] === game[b] && game[a] === game[c]) {
        return game[a];
      }
    }
    return null;
  };

    // const makeComputerMove = () => {
    //   const newGame = [...game];
    //   for (let i = 0; i < newGame.length; i++) {
    //     if (!newGame[i]) {
    //       newGame[i] = 'O';
    //       setGame(newGame);
    //       setTurn('X');
    //       break;
    //     }
    //   }
    // };

  useEffect(() => {
    const gameWinner = calculateWinner(game);
    if (gameWinner && !winner) { 
      setWinner(gameWinner);
      addGameResult(gameWinner); 
    }
  }, [game]); 

  return (
    <div className='gamepage'>
      <h3>Tere tulemast m2ngu TIC-TAC-TOE!</h3>
      {m2ngijad.map((m2ngija, index) => (
        <div key={index}>
          <div>{m2ngija.mängija}</div>
        </div>
      ))}
      <div className='game'>
        {game.map((cell, i) => (
          <div
            className={cell === 'X' ? 'x' : cell === 'O' ? 'o' : ''}
            onClick={() => handleClick(i)}
            key={i}
          >
            {cell}
          </div>
        ))}
      </div>
      <div>
        {winner ? 'Võitja: ' + winner : turn === 'X' ? 'Sinu käik (X)' : 'Arvuti käik (O)'}
      </div>
      <div>
        <Link to="/score">Vaata tulemusi</Link>
      </div>
    </div>
  );
}

export default Gamepage;
