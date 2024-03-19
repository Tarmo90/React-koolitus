import React, {useRef, useState} from 'react'

function LisaUusTegelane() {
  const [sonum, uuendaSonum] = useState('');
  const eesnimiRef=useRef();
  const perenimiRef=useRef();
  const elukohtRef=useRef();
  const vanusRef=useRef();


  const lisaUusTegelane= () => {
    
    // Kontrollime, kas nimi on tyhi v6i mitte
    if (eesnimiRef.current.value === ''){
      // Kuvame s6numi, kui nimi on tyhi
    uuendaSonum('Tyhja nimega ei saa sisestada!') ;
    }
    else {
      // Kuvame s6numi, kui nimi ei ole tyhi
     uuendaSonum('Tegelane lisatud');
    const tegelased = JSON.parse(localStorage.getItem('tegelased')) || [];
    tegelased.push({
      'eesnimi': eesnimiRef.current.value,
      'perenimi': perenimiRef.current.value,
      'elukoht': elukohtRef.current.value,
      'vanus': vanusRef.current.value,
    })
    localStorage.setItem('tegelased', JSON.stringify(tegelased));
    }
    };
  return (
    <div>
      <div>{sonum}</div>
      <label>Tegelase eesnimi</label> <br />
      <input ref={eesnimiRef} type="text" /> <br />
      <label>Tegelase perenimi</label> <br />
      <input ref={perenimiRef} type="text" /> <br />
      <label>Tegelase elukoht</label> <br />
      <input ref={elukohtRef} type="text" /> <br />
      <label>Tegelase vanus</label> <br />
      <input ref={vanusRef} type="number" /> <br />
      <button onClick={lisaUusTegelane}>Lisa uus</button>
    </div>
  )
}

export default LisaUusTegelane ;