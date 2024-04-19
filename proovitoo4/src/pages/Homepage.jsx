import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/HomePage.css'

function Homepage() {
  const [s6num, uuendaS6num] = useState('')
  const m2ngijaNimiRef = useRef()

  const lisaUusM2ngija = () =>{
    if (m2ngijaNimiRef.current.value === '') {
      uuendaS6num('Tyhja nimega ei saa sisestada!');
    }
    else {
      const m2ngijaNimi = m2ngijaNimiRef.current.value;
      uuendaS6num('M2ngija ' + m2ngijaNimi + ' on lisatud');
      const m2ngijad = JSON.parse(localStorage.getItem('m2ngijad')) || [];
      m2ngijad.push({
        'm2ngija' : m2ngijaNimiRef.current.value
      })
      localStorage.setItem('m2ngijad', JSON.stringify(m2ngijad))
    }
  }
  return (
    <div className='homepage'>
      <h2><label>M2ngija nimi</label></h2>
      <input ref={m2ngijaNimiRef} type="text" /><br />
      <button onClick={lisaUusM2ngija}>Lisa m2ngija</button><br /><br />
      <Link to={'/game/' }>
      <button>Alusta m2ngu</button>
      </Link><br /><br />
      <div>{s6num}</div>
    </div>
  )
}

export default Homepage