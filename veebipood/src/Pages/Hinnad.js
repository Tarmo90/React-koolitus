import React, { useState } from 'react';
import hinnadJSON from "../data/hinnad.json";
 
function Hinnad() {
  const [hinnad, setHinnad] = useState(hinnadJSON);
 
  const originaali = () => {
    setHinnad(hinnadJSON);
  }
 
  const sorteeriAZ = () => {
    hinnad.sort();
    setHinnad(hinnad.slice());
  }
 
  const sorteeriZA = () => {
    hinnad.sort((a, b) => b.toString().localeCompare(a.toString()));
    setHinnad(hinnad.slice());
  }
 
  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a.number - b.number)
    setHinnad(hinnad.slice());
  }
 
  const sorteeriKahanevalt = () => {
    hinnad.sort((a, b) => b.number - a.number);
    //hinnad.sort((a, b) => -1 * (a - b));
    // hinnad.reverse();
    setHinnad(hinnad.slice());
  }
 
  const filtreeriSuuremKui50 = () => {
    const vastus = hinnad.filter(hind => hind.number > 50);
    setHinnad(vastus);
  }
 
  const filtreeriVaiksemKui20 = () => {
    const vastus = hinnad.filter(hind => hind.number < 20);
    setHinnad(vastus);
  }
 
  const arvutaKokku = () => {
    let summa = 0;
    hinnad.forEach(hind => summa = summa + hind.number)
    return summa;
  
  }
 
  return (
    <div>
      <div>Hindade kogusumma:{arvutaKokku()} $</div>
      <div>Hindade koguarv: {hinnad.length} tk</div>
      <button onClick={originaali}>Originaali</button>
      <button onClick={() => setHinnad([])}>Peida ajutiselt</button>
      <br /><br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
 
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
 
      <br /><br />
 
      <button onClick={filtreeriSuuremKui50}>Jäta alles suuremad kui 50</button>
      <button onClick={filtreeriVaiksemKui20}>Jäta alles väiksemad kui 20</button>
 
      <br /><br />
      
      {hinnad.map((hind,index) => 
        <div key={index}>
          {hind.number}
          
        </div> )}
    </div>
  )
}
 
export default Hinnad
// index:  0   1   2   3   4  5     6
// hind:   6  12  55  123  8  41  2345
//        [6, 12, 55, 123, 8, 41, 2345]