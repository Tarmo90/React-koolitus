import React from 'react'
import {useRef, useState} from 'react'

function Logimine() {

  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const [paroolKorrektne, setParoolKorrektne] = useState(true) 

  const kontrolliParooli = () => {
    if (paroolRef.current.value.length < 8 ||
      paroolRef.current.value.toLowerCase() === paroolRef.current.value ||
      paroolRef.current.value.toUpperCase() === paroolRef.current.value ||
      paroolRef.current.value.includes('%') === false) {
        setParoolKorrektne(false);
      } else {
        setParoolKorrektne(true);
      }

  }

  return (

    <div>
      <label>Kasutjanimi</label>
      <br />
      <input ref ={kasutajaNimiRef} type="text" />
      <br />
      <label>Parool</label>
      <br />
      <input ref ={paroolRef} onChange={kontrolliParooli} type="password" />
      <br />
      <button>Logi sisse</button>
      {paroolKorrektne === false && <div>Parool pole korrektne</div>}

    </div>
  )
}

export default Logimine