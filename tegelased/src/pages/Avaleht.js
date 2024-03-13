import React from 'react';
import {useState} from 'react'

function Avaleht() {

  const tegelased = [
    {eesnimi: 'Mickey', perenimi:'Mickey', elukoht:'Disneyland'},
    {eesnimi: 'Minnie', perenimi:'Mouse', elukoht:'Disneyland'},
    {eesnimi: 'Winnie', perenimi:'Pooh', elukoht:'Hundred Acre Wood'},
    {eesnimi: 'Roo', perenimi:'Kangaroo', elukoht:'Hundred Acre Wood'},
    {eesnimi: 'Scooby', perenimi:'Doo', elukoht:'Crystal Cove'}
    ]

    const [klikitudNimi, uuendaKlikitudNimi] = useState('')
    const kuvaNimi = (tegelane) => {
     // console.log(tegelane.eesnimi)
     uuendaKlikitudNimi(tegelane.eesnimi);
    }
  return (
    
      <div>
        {klikitudNimi !== '' && <div>Klikkisid tegelase {klikitudNimi} peal</div>}
       {tegelased.map(tegelane =>
        <div> 
          <div>{tegelane.eesnimi}</div>
          <div>{tegelane.perenimi}</div>
          <div>{tegelane.elukoht}</div>
          <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
          </div>)} 
      </div>
    
  );
}

export default Avaleht;

