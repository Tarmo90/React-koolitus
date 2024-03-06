import React, { useState } from 'react'
import hinnadJSON from "../data/hinnad.json";



function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadJSON);

  const kustutaEsimene = () => {
    hinnadJSON.splice(0, 1); // .remove()   .delete()
    setHinnad(hinnad.slice());
  }
 
  const kustutaTeine = () => {
    hinnadJSON.splice(1, 1);
    setHinnad(hinnad.slice());
  }
 
  const kustutaKolmas = () => {
    hinnadJSON.splice(2, 1);
    setHinnad(hinnad.slice());
  }
 
  const kustutaNeljas = () => {
    hinnadJSON.splice(3, 1);
    setHinnad(hinnad.slice());
  }
 
  const kustutaHind = (index) => {
    hinnadJSON.splice(index, 1);
    setHinnad(hinnad.slice());
  }
  return (
    <div>
      <button disabled={hinnad.length < 1} onClick={kustutaEsimene}>Kustuta esimene</button>
      <button disabled={hinnad.length < 2} onClick={kustutaTeine}>Kustuta teine</button>
      <button disabled={hinnad.length < 3} onClick={kustutaKolmas}>Kustuta kolmas</button>
      <button disabled={hinnad.length < 4} onClick={kustutaNeljas}>Kustuta neljas</button>
      <br /><br />
 
      {hinnad.map((hind,index) => 
        <div key={index}>
          {hind}
          <button onClick={() => kustutaHind(index)}>x</button>
        </div> )}
    </div>
  )
}

export default HaldaHinnad