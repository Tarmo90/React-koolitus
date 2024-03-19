import React from 'react';
import { useState } from 'react';

function Avaleht() {
  // const tegelased = [
  //   { eesnimi: 'Mickey', perenimi: 'Mouse', vanus: '10', elukoht: 'Disneyland' },
  //   { eesnimi: 'Minnie', perenimi: 'Mouse', vanus: '5', elukoht: 'Disneyland' },
  //   { eesnimi: 'Winnie', perenimi: 'Pooh', vanus: '7', elukoht: 'Hundred Acre Wood' },
  //   { eesnimi: 'Roo', perenimi: 'Kangaroo', vanus: '9', elukoht: 'Hundred Acre Wood' },
  //   { eesnimi: 'Scooby', perenimi: 'Doo', vanus: '15', elukoht: 'Crystal Cove' }
  // ];

  const tegelased = JSON.parse(localStorage.getItem('tegelased')) || []

  const [klikitudNimi, uuendaKlikitudNimi] = useState('');
  const kuvaNimi = (tegelane) => {
    uuendaKlikitudNimi(tegelane.eesnimi);
  };

  const valiTegelane = (klikitudTegelane) => {
    const valitudTegelased = JSON.parse(localStorage.getItem('valitudTegelased')) || [];
    valitudTegelased.push(klikitudTegelane);
    localStorage.setItem('valitudTegelased', JSON.stringify(valitudTegelased));
  };

  return (
    <div>
      {klikitudNimi !== '' && <div>Klikkisid tegelase {klikitudNimi} peal</div>}
      {tegelased.map((tegelane, index) => (
    <div key={index}>
    <div>{tegelane.eesnimi}</div>
    <div>{tegelane.perenimi}</div>
    <div>{tegelane.elukoht}</div>
    <div>{tegelane.vanus}</div>
    <button onClick={() => valiTegelane(tegelane)}>Vali</button>
    <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
  </div>
))}
    </div>
  );
}

export default Avaleht;
