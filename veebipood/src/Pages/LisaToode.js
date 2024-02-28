import React, { useRef, useState } from "react"; // Imporditakse Reacti ja Reacti hook'id useRef ja useState
import { Link } from "react-router-dom"; // Imporditakse React Router'i Link komponent

function LisaToode() { // Defineeritakse funktsioonikomponent LisaToode
  const [sonum, uuendaSonum] = useState(""); // Tekitatakse state sonum ja selle uuendamise funktsioon uuendaSonum ning kasutatakse Reacti hook'i useState
  const inputiluger = useRef(); // Luuakse ref inputiluger, mis viitab input väljale
  const kategooriaLuger = useRef(); // Luuakse ref kategooriaLuger, mis viitab input väljale

  const lisa = () => { // Defineeritakse funktsioon lisa
    if (inputiluger.current.value === "") { // Kui input välja väärtus on tühi
      uuendaSonum('Tyhja nimetusega ei saa toodet lisada!'); // Uuendatakse sonumit vastava teatega
    } else { // Vastasel juhul
      uuendaSonum( // Uuendatakse sonumit
        "Toode lisatud:" + // Lisatakse tekst "Toode lisatud:"
        inputiluger.current.value + // Lisatakse input välja väärtus
        '. Kategooria - ' + // Lisatakse tekst ". Kategooria - "
        kategooriaLuger.current.value // Lisatakse kategooria input välja väärtus
      );
    }   
  }

  return ( // Tagastatakse JSX-i kood
    <div>
      <div>LisaToode</div> {/* Div, mis sisaldab teksti "LisaToode" */}
      <div>
        {/* Input välja ja selle silt */}
        <label >Toote nimi: </label>
        <input ref={inputiluger} type='text' />
        <br /> <br />
        {/* Input välja ja selle silt */}
        <label >Toote kategooria: </label>
        <input ref={kategooriaLuger} type="text"  />
        <br /> <br />
        {/* Nupp, millel on sündmus onClick, mis kutsub välja funktsiooni lisa */}
        <button onClick={lisa} >Sisesta</button>
        
        {/* Tekstiplokk sonum, mis kuvatakse punase tekstiga */}
        <p style={{ color:'red', background: 'lightgray' }}>
          {sonum}
        </p>
      </div>
      {/* Lingi komponent, mis suunab tagasi avalehele */}
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default LisaToode; // Eksporditakse komponent LisaToode
