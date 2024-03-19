import React, { useState } from 'react'

function ValitudTegelased() {
  const [valitudTegelased, uuendValitudTegelased] = useState (
    JSON.parse(localStorage.getItem('valitudTegelased')) || []
  )

  const eemalda = (index) => {
    valitudTegelased.splice(index,1);
    uuendValitudTegelased(valitudTegelased.slice());
    localStorage.setItem('valitudTegelased', JSON.stringify(valitudTegelased));
  }

  const tyhjenda = () => {
    uuendValitudTegelased([]);
    localStorage.setItem('valitudTegelased', JSON.stringify([]));
  }
  return (
    <div>
      {valitudTegelased.length > 0 && <div>Valitud on {valitudTegelased.length} tegelast</div>}
      {valitudTegelased.length > 0 && <button onClick={tyhjenda}>Tyhjenda</button>}      
      {valitudTegelased.length > 0 && <div>Yhtegi tegelast pole valitud</div>}      

      {valitudTegelased.map((tegelane, index) =>
      <div key={index}>
        <div>{tegelane.eesnimi}</div>
        <div>{tegelane.perenimi}</div>
        <div>{tegelane.elukoht}</div>
        <div>{tegelane.vanus}</div>
        <button onClick={() => eemalda(index)}>Eemalda</button>
      </div>
        )}
    </div>
  )
}

export default ValitudTegelased;