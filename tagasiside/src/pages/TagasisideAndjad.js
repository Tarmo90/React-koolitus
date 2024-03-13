import React, { useState, useRef } from 'react';
import andjateFail from '../data/Nimed.json';
import { Link } from 'react-router-dom';

function TagasisideAndjad() {
  const [andjad, uuendaAndjad] = useState(andjateFail);
  const andjaRef = useRef();

  const filtreeriM = () => {
    const vastus = andjateFail.filter(element => element.startsWith('M'));
    uuendaAndjad(vastus);
  };

  const filterSixLetters = () => {
    const vastus = andjateFail.filter(element => element.length === 6);
    uuendaAndjad(vastus);
  };

  const filterEndingY = () => {
    const vastus = andjateFail.filter(element => element.endsWith('y'));
    uuendaAndjad(vastus);
  };

  const sortZA = () => {
    const vastus = [...andjad].sort((a, b) => b.localeCompare(a));
    uuendaAndjad(vastus);
  };

  const insertEST = () => {
    const vastus = andjad.map(element => 'EST-' + element);
    uuendaAndjad(vastus);
  };

  const kustuta = (index) => {
    const uusAndjad = andjad.filter((_, i) => i !== index);
    uuendaAndjad(uusAndjad);
  };

  const lisa = () => {
    const uusNimi = andjaRef.current.value;
    if (uusNimi) {
      const uusAndjad = [...andjad, uusNimi];
      uuendaAndjad(uusAndjad);
      andjaRef.current.value = '';
    }
  };

  return (
    <div>
      <div>Kuva palju nimesid on . length abil: {andjad.length} tk</div>
      <button onClick={filtreeriM}>Filtreeri ehk jäta kõik M-tähega algavad nimed alles</button>
      <button onClick={filterSixLetters}>Filtreeri ehk jäta kõik täpselt 6-kohalised nimed alles</button>
      <button onClick={filterEndingY}>Filtreeri ehk jäta kõik Y-tähega lõppevad nimed alles</button>
      <button onClick={sortZA}>Sorteeri Z-A</button>
      <button onClick={insertEST}>Proovi .map funktsiooni - kirjuta iga nime ette 'EST'</button>
      
      {andjad.map((element, index) => (
        <div key={index}>
          <span>{element}</span>
          <button onClick={() => kustuta(index)}>Võimalda kustutada igaüht</button>
          <Link to={'/yks-andja/' + index}>
            <button>Vaata detailsemalt</button>
          </Link>
        </div>
      ))}

      <label>Võimalda uut nime kõige lõppu lisada</label>
      <input ref={andjaRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
    </div>
  );
}

export default TagasisideAndjad;
