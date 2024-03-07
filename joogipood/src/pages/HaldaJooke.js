import React, { useState } from 'react'
import joogidFailist from '../data/joogid.json'


function HaldaJooke() {

  const [joogid, uuendaJoogid] = useState(joogidFailist)

  function kustutaJoogid(index) {
    joogidFailist.splice(index, 1);
    uuendaJoogid(joogidFailist.slice())
  }

  
  return (
<div>Joogid:
  {joogid.map((element, index) =>
  <div>
    <span>{element}</span>
    <button onClick={()=> kustutaJoogid(index)}>x</button>
    <br />
    
  </div> )}
  

</div> )

}
export default HaldaJooke