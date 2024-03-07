import React, { useRef } from 'react'
import joogidFailist from '../data/joogid.json'

function LisaJook() {

  const jookRef = useRef();

  function lisaUusJook() {
    joogidFailist.push(jookRef.current.value);
   
  }


  return (
    <div>
      <label>Lisa uus jook: </label>
    <input ref={jookRef} type="text" />
    <button onClick={() => lisaUusJook()}>Sisesta</button>
    </div>
    
  )
}

export default LisaJook