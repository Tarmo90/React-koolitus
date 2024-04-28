import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Strategies() {
  
  const [strategies, setStrategies] = useState([]);

 
  useEffect(() => {
    
    fetch(process.env.REACT_APP_STRATEGIES_URL)
      .then(res => res.json())
      .then(data => setStrategies(data || [])); 
  }, []); 

  return (
    <div>
      
      {strategies.map((strategy, id) => (
        <div key={strategy.id}>
         
          <Link to={"/single_strategy/" + id}>
            <button>Vajuta</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Strategies;
