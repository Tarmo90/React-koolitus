import React from 'react'
import {useRef} from 'react';


function LisaUudis() {
  const uudisedRef = useRef()

function lisaUusUudis() {
 const uudised= JSON.parse(localStorage.getItem('uudised')) || [];
  uudised.push(uudisedRef.current.value);
  localStorage.setItem('uudised', JSON.stringify(uudised));
}


  return (
    <div className='konteiner'>
      <div className='lisa-uudised-text'>

        <label>Lisa uudis</label>
        <br /> <br />
        <input ref={uudisedRef} type="text" />
        <br />
        <button onClick={() => lisaUusUudis()}>Lisa uudis</button>

      </div>

    </div>
  )
}

export default LisaUudis