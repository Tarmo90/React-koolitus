import React, { useState } from 'react'

function Avaleht() {
  const [kogus, setkogus] = useState(0); //numbrid
  const [sonum, setSonum] = useState('');
  const[laigitud, setLaigitud] = useState(false);
  function nulli() {
    setkogus(0);
    setSonum('Nullisid koguse!');
  }

  function vahenda() {
    setkogus(kogus - 1);
    setSonum('V2hendasid kogust!');
  }

  function suurenda() {
    setkogus(kogus + 1);
    setSonum('Suurendasid kogust!');
  }

  // KUI ma midagi kaasa saadan
  // onClick={() => fnktsMidaVäljaKutsun(KAASA_SAADETAV_SAADAV)}
  // KUI ma midagi kaasa ei saada
  // onClick={fnktsMidaVäljaKutsun}
  return (

    <div>
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      <button onClick={() => setLaigitud(!laigitud)}>Muuda like-i</button>
      <br />

    <div>{sonum}</div>
    {kogus !== 0 &&<button onClick={nulli}>Tagasi nulli</button>} 
    <br />
    <button disabled ={kogus === 0}onClick={vahenda}>-</button>
    <span className={kogus >= 10 ? 'kuldne' : undefined}>{kogus}</span>
    <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht;