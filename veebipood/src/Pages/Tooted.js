import React, { useState } from 'react';
import tootedFailist from '../data/tooted.json'

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
          <div key={index}>{toode}</div>
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
