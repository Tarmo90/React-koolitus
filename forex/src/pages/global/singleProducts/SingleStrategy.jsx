import '../../../css/SingleStrategy.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function SingleStrategy() {
  const [dbStrategies, setDbStrategies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(process.env.REACT_APP_STRATEGIES_URL)
      .then(res => res.json())
      .then(data => {
        setDbStrategies(data || []);
      })
  }, []);

  const found = dbStrategies.find(strategy => strategy.id === Number(id));

  return (
    <div>
      {!dbStrategies.length ? (
        <div>Laadimine...</div>
      ) : found ? (
        <div className='text'>
          <h3>Title: {found.title}</h3>
          <p>Description: {found.description}</p>
          <p>Title 2: {found.title2}</p>
          <p>Description 2: {found.description2}</p>
          <p>Description 3: {found.description3}</p>
         
           <div>
           <div><img src={process.env.PUBLIC_URL + '/' + found.image} className='chart_img' alt="" /></div>
           </div>
          
         
        </div>
      ) : (
        <div>Strateegiat ei leitud</div>
      )}
    </div>
  );
}

export default SingleStrategy;
