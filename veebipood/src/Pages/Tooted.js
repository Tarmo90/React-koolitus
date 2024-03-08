import React, { useState } from 'react';
import tootedFailist from '../data/tooted.json'
import { Link } from 'react-router-dom';

function Tooted() {
  // Andmete algväärtus
  const [tooted, setTooted] = useState(tootedFailist);

  // Funktsioon A-Z järgi sorteerimiseks
  const sorteeriAZ = () => {
    const sortedTooted = [...tooted].sort((a, b) => a.localeCompare(b));
    setTooted(sortedTooted);
  };

  // Funktsioon Z-A järgi sorteerimiseks
  const sorteeriZA = () => {
    const sortedTooted = [...tooted].sort((a, b) => b.localeCompare(a));
    setTooted(sortedTooted);
  };

  return (
    <div>
      <h2>Tooted</h2>
      {/* Väljastame tooted */}
      <ul>
        {tooted.map((toode, index) => (
          <div key={index}>
          <img className={toode.aktiivne ?'pilt' : 'pilt-mitteaktiivne'} src={toode.pilt} alt="" />
            <div> {toode.nimi}</div>
            <div>{toode.hind}</div>
            <div>{toode.aktiivne}</div>


            <Link to={"/toode/" + index}>
            <button>Vaata l2hemalt</button>
            </Link>
            </div>
        ))}
      </ul>
      {/* Näitame toodete kogust */}
      <p>Kokku on {tooted.length} toodet.</p>
      {/* Nupud sorteerimiseks */}
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
    </div>
  );
}

export default Tooted;
