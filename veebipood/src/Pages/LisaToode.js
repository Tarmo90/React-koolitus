import React, { useRef, useState } from "react"; 
import { Link } from "react-router-dom";
import tootedFailist from '../data/tooted.json'

function LisaToode() { 
  const [sonum, uuendaSonum] = useState(""); 
  const inputiluger = useRef(); 
  const hindLuger = useRef();
  const piltRef = useRef(); 
  const aktiivneRef = useRef(); 
 

  const lisa = () => { 
    if (inputiluger.current.value === "") { 
      uuendaSonum('Tyhja nimetusega ei saa toodet lisada!'); 
    } else { 
      uuendaSonum( 
        "Toode lisatud:" + 
        inputiluger.current.value +
        '. Hind - ' + 
        hindLuger.current.value 
      );
      tootedFailist.push({
        "nimi": inputiluger.current.value, 
        "hind": Number(hindLuger.current.value), 
        'aktiivne': aktiivneRef.current.checked,
        "pilt": piltRef.current.value 
    } )
  }
  }

  return ( 
    <div>
      <h2>Toote lisamine</h2>
      <div>
        
        <label >Toote nimi: </label>
        <input ref={inputiluger} type='text' />
        <br /> <br />
        <label >Toote hind: </label>
        <input ref={hindLuger} type="number"  />
        <br /> <br />
        <label >Toote pilt: </label>
        <input ref={piltRef} type='text' />
        <br /> <br />
        <label >Toote aktiivsus: </label>
        <input ref={hindLuger} type="checkbox"  />
        <br /> <br />

        
        <button onClick={lisa} >Sisesta</button>
        
       
        <p style={{ color:'red', background: 'lightgray' }}>
          {sonum}
        </p>
      </div>
     
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default LisaToode; 
