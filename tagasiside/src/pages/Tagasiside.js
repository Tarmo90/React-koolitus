import React, { useState } from 'react'
import { useRef } from 'react';


function Tagasiside() {

  const [tagasisided, m22raTagasisided] = useState(['Oli hea', 'Huvitav', 'Teistsugune', 'P6nev']);
  const tagasisideRef = useRef();

  function kustuta(index) {
    tagasisided.splice(index,1)
    m22raTagasisided(tagasisided.slice());
  }

  function lisaUusTagasiside() {
    tagasisided.push(tagasisideRef.current.value);
    m22raTagasisided(tagasisided.slice());
  }

  return (
    <div>Tagasisided:
    
      { tagasisided.map((element, index) =>
      <div>
        <span>{element}</span>
        <button onClick={() => kustuta(index)}>x</button>
      </div> )}
      <br />
      <label>Lisa uus tagasiside:</label>
      <input ref={tagasisideRef} type='text' />
      <button onClick={() => lisaUusTagasiside}>Sisesta</button>
    </div>)

}

export default Tagasiside