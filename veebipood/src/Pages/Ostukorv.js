import React, { useState } from "react"; 
import { Link } from "react-router-dom"; 
import ostukorvFailist from '../data/ostukorv.json'
import {useDispatch} from 'react-redux'
import {add} from '../store/kogusumma'
import {empty} from '../store/kogusumma'
import {deduct} from '../store/kogusumma'

function Ostukorv() {
  const [ostukorv, setOstukorv] = useState(ostukorvFailist)
  const dispatch = useDispatch()

  const tyhjenda = () => {
    ostukorvFailist.splice(0)
    setOstukorv(ostukorvFailist.slice())
    dispatch(empty())
  }

  const kustutaOstukorvist = (index) => { 
    dispatch(deduct(ostukorvFailist[index].hind))
    ostukorvFailist.splice(index,1);  
    setOstukorv(ostukorvFailist.slice());
  }

  const lisaOstukorvi = (toode) => {
    ostukorvFailist.push(toode);
    setOstukorv(ostukorvFailist.slice());
    dispatch(add(toode.hind))
  }

  const arvutaKogusumma = () => {
    let summa = 0;
    ostukorv.forEach(toode => summa = summa + toode.hind);
    return summa;
  }
 
  return (
    <div>
      <div>Ostukorv</div> 
      <div>Ostukorvis on: {ostukorv.length} eset</div> 
      
      {ostukorv.length === 0 && 
      <div className='ostukorv'>
        <img
          src='https://as2.ftcdn.net/v2/jpg/00/33/04/93/1000_F_33049387_PCNOkj6P1V84bB38LcoC19qshygMAYAP.jpg'
          alt='Tühi ostukorv'
        />
        <p>Ostukorv on hetkel tühi.</p>
      </div>}

      <button onClick={tyhjenda}>Tyhjenda</button> 

      <div>{ostukorv.map((toode,index) => 
        <div key={index}>
          {toode.nimi} {toode.hind}$
          <button onClick={() => kustutaOstukorvist(index)}>x</button> 
          <button onClick={() => lisaOstukorvi(toode)}>Lisa l6ppu</button> 

        </div> )}
      </div>

      <div>Summa: {arvutaKogusumma()} $</div>

      <Link to='/'>
        <button>Tagasi</button>
      </Link>
    </div>
  );
}

export default Ostukorv; 