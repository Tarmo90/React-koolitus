import React, { useState } from "react"; // Impordime React'i ja useState'i haagi
import { Link } from "react-router-dom"; // Impordime Link komponendi react-router-dom'ist

function Ostukorv() {
  // Seisundi deklareerimine ostukorvi esemete jaoks
  const [ostukorv, setOstukorv] = useState(['Coca', 'Fanta', 'Sprite']);

  // Funktsioon ühe eseme eemaldamiseks ostukorvist
  const kustutaOstukorvist = (index) => {
    // Eemalda element massiivist
    ostukorv.splice(index,1);
    // Värskenda olekut uue massiiviga (slice funktsioon loomaks koopia)
    setOstukorv(ostukorv.slice());
  }

  // JSX komponenti renderdamiseks
  return (
    <div>
      <div>Ostukorv</div> {/* Pealkiri ostukorvile */}
      <div>Ostukorvis on: {ostukorv.length} eset</div> {/* Kuvab ostukorvis olevate esemete arvu */}
      
      {/* Kuvab sõnumi ja pildi, kui ostukorv on tühi */}
      {ostukorv.length === 0 && 
      <div className='ostukorv'>
        <img
          src='https://as2.ftcdn.net/v2/jpg/00/33/04/93/1000_F_33049387_PCNOkj6P1V84bB38LcoC19qshygMAYAP.jpg'
          alt='Tühi ostukorv'
        />
        <p>Ostukorv on hetkel tühi.</p>
      </div>}

      {/* Nupud ostukorvi manipuleerimiseks */}
      <button onClick={() => setOstukorv(['Coca', 'Fanta'])}>J2ta alles Coca ja Fanta</button> {/* Nupp, et jätta alles ainult Coca ja Fanta */}
      <button onClick={() => setOstukorv([])}>Tyhjenda</button> {/* Nupp ostukorvi tühjendamiseks */}

      {/* Kuvab iga eseme ostukorvis koos eemaldamise nupuga */}
      <div>{ostukorv.map((toode,index) => 
        <div key={index}>
          {toode}
          <button onClick={() => kustutaOstukorvist(index)}>x</button> {/* Nupp eseme eemaldamiseks */}
        </div> )}
      </div>

      {/* Link tagasi pealehele */}
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Ostukorv; // Ekspordib komponendi
