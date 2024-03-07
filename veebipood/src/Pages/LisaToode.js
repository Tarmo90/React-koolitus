import React, { useRef, useState } from "react"; 
import { Link } from "react-router-dom";
import tootedFailist from '../data/tooted.json'

function LisaToode() { 
  const [sonum, uuendaSonum] = useState(""); 
  const inputiluger = useRef(); 
  const kategooriaLuger = useRef(); 

  const lisa = () => { 
    if (inputiluger.current.value === "") { 
      uuendaSonum('Tyhja nimetusega ei saa toodet lisada!'); 
    } else { 
      uuendaSonum( 
        "Toode lisatud:" + 
        inputiluger.current.value +
        '. Kategooria - ' + 
        kategooriaLuger.current.value 
      );
      tootedFailist.push(inputiluger.current.value);
    }   
  }

  return ( 
    <div>
      <h2>Toote lisamine</h2>
      <div>
        
        <label >Toote nimi: </label>
        <input ref={inputiluger} type='text' />
        <br /> <br />
       
        <label >Toote kategooria: </label>
        <input ref={kategooriaLuger} type="text"  />
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
