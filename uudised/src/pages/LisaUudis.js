import React from 'react'
import {useRef, useState} from 'react';


function LisaUudis() {
  const uudisedRef = useRef()
  const[s6num, uuendaS6num] = useState('')

function lisaUusUudis() {
 const uudised= JSON.parse(localStorage.getItem('uudised')) || [];
  uudised.push(uudisedRef.current.value);
  localStorage.setItem('uudised', JSON.stringify(uudised));
}
 const kontrolli = () => {
  uuendaS6num('')

  if (uudisedRef.current.value.charAt(0) === uudisedRef.current.value.charAt(0).toLowerCase()) {
    uuendaS6num('Sisestasid uudise v2ikese t2hega, palun paranda!')
  } else {
   
  }
  
  if (uudisedRef.current.value.includes('  ')) {
    uuendaS6num('Sisetasid kaks tyhikut, palun paranda!')
  } else {
  }
 }

  return (
    <div className='konteiner'>
      <div className='App'>
      <div className='lisa-uudised-text'>
        <div>{s6num}</div>
        <div>TEST</div><br />
        <label>Uudise nimi</label><br />
        <input onChange={kontrolli} ref={uudisedRef} type="text" />
        <br />
        <button onClick={() => lisaUusUudis()}>Lisa uudis</button>
        </div>
      </div>

    </div>
  )
}

export default LisaUudis