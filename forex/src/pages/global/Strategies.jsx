import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Strategy.css'

function Strategies() { 
const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_STRATEGIES_URL)
      .then(res => res.json())
      .then(data => setStrategies(data || [])); 
  }, []); 

  return (
    <div>
      <h3 className='strategy_title'>Strategy</h3>
      <div className='strategy_cont'>
      {strategies.map((strategy, id) => (
        <div  key={strategy.id}>
          <Link to={"/single_strategy/" + id}>
            <button className='strategy_button'>{strategy.title}</button>
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Strategies;
