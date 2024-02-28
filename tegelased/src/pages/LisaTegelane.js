import React, {useRef, useState} from 'react'

function LisaUusTegelane() {
  const [tegelased, uuendaTegelased] = useState([]);
  const [sonum, uuendaSonum] = useState('');
  const nimiRef=useRef();

  const lisaUusTegelane= () => {
    
    // Kontrollime, kas nimi on tyhi v6i mitte
    if (nimiRef.current.value === ''){

      // Kuvame s6numi, kui nimi on tyhi
    uuendaSonum('Tyhja nimega ei saa sisestada!') ;
    }
    else {
      // Kuvame s6numi, kui nimi ei ole tyhi
     uuendaSonum('Tegelane lisatud');

     uuendaTegelased([...tegelased, {nimi: nimiRef.current.value} ]);
    }
    };
  return (
    <div>
      <div>{sonum}</div>
      {/* Input vli, mis on seotud nimiRef refi-ga */}
      <input ref={nimiRef} type="text" />

      {/* Nupp, mis kutsub v2lja lisaUusTegelane funktsiooni */}
      <button onClick={lisaUusTegelane}>Lisa uus tegelane</button>
      

      <div>
        <br />
        <div>Lisatud tegelane:</div>
        {/* Kuvatakse lisatud tegelased */}
        {tegelased.map((tegelane, index) => (
        <h1 key={index}>{tegelane.nimi}</h1> 
        ))}
      </div>
    </div>
  )
}

export default LisaUusTegelane ;