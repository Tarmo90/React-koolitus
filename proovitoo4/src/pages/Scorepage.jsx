import '../css/ScorePage.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useGameHistory } from '../components/GameHistoryContext';

const Scorepage = () => {
  const { gameHistory } = useGameHistory();

  return (
    <div className='scorepage'>
      <h1>Score Page</h1>
      <ul>
        {gameHistory.map((result, id) => (
           <div 
            key={id}> mängija {result}
           </div>
        ))}
      </ul>
      <Link to="/game">Tagasi mängulehele</Link>
    </div>
  );
};

export default Scorepage;
