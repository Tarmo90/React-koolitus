import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import numbrid from '../data/Numbrid.json';

function Numbrid() {
  const [arvud, setArvud] = useState(numbrid);
  const [originaalArvud] = useState(numbrid);

  const sortAsc = () => {
    const sortedArvud = [...arvud].sort((a, b) => a - b);
    setArvud(sortedArvud);
  };

  const sortDesc = () => {
    const sortedArvud = [...arvud].sort((a, b) => b - a);
    setArvud(sortedArvud);
  };

  const sortByFirstNumber = () => {
    const sortedArvud = [...arvud].sort((a, b) => {
      const firstA = parseInt(a.toString()[0]);
      const firstB = parseInt(b.toString()[0]);
      return firstA - firstB;
    });
    setArvud(sortedArvud);
  };

  const sortByFirstNumberDesc = () => {
    const sortedArvud = [...arvud].sort((a, b) => {
      const firstA = parseInt(a.toString()[0]);
      const firstB = parseInt(b.toString()[0]);
      return firstB - firstA;
    });
    setArvud(sortedArvud);
  };

  const filterGreaterThan8 = () => {
    const filteredArvud = originaalArvud.filter(num => num > 8);
    setArvud(filteredArvud);
  };

  const filterLessThan10 = () => {
    const filteredArvud = originaalArvud.filter(num => num < 10);
    setArvud(filteredArvud);
  };

  const filterEvenNumbers = () => {
    const filteredArvud = originaalArvud.filter(num => num % 2 === 0);
    setArvud(filteredArvud);
  };

  const filterOddNumbers = () => {
    const filteredArvud = originaalArvud.filter(num => num % 2 !== 0);
    setArvud(filteredArvud);
  };

  const filterStartsWith1 = () => {
    const filteredArvud = originaalArvud.filter(num => num.toString().startsWith('1'));
    setArvud(filteredArvud);
  };

  const filterContains3 = () => {
    const filteredArvud = originaalArvud.filter(num => num.toString().includes('3'));
    setArvud(filteredArvud);
  };

  const reset = () => {
    setArvud(originaalArvud);
  };

  return (
    <div>
      <Link to="/">
        <button>Tagasi</button>
      </Link>
      <br /><br />

      {arvud.map((number, index) => (
        <div key={index}>{number}</div>
      ))}

      <br /><br />
      <button onClick={sortAsc}>Sorteeri kasvavalt</button>
      <button onClick={sortDesc}>Sorteeri kahanevalt</button>
      <button onClick={sortByFirstNumber}>Sorteeri esimese numbri järgi</button>
      <button onClick={sortByFirstNumberDesc}>Sorteeri esimese numbri järgi kahanevalt</button>

      <br /><br />
      <button onClick={filterGreaterThan8}>Jäta alles suuremad kui 8</button>
      <button onClick={filterLessThan10}>Jäta alles väiksemad kui 10</button>
      <button onClick={filterEvenNumbers}>Jäta alles paarisarvud</button>
      <button onClick={filterOddNumbers}>Jäta alles paaritud arvud</button>
      <button onClick={filterStartsWith1}>Jäta alles numbrid, mis algavad 1-ga</button>
      <button onClick={filterContains3}>Jäta alles numbrid, mis sisaldavad 3-e</button>

      <br /><br />
      <button onClick={reset}>Originaal</button>

    
      
    </div>
  );
}

export default Numbrid;
