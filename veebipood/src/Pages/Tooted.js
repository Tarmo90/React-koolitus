import React, { useState } from 'react';
import tootedFailist from '../data/tooted.json'
import { Link } from 'react-router-dom';
import ostukorvFailist from '../data/ostukorv.json'
import { ToastContainer, toast } from 'react-toastify';


function Tooted() {
  // Andmete algväärtus
  const [tooted, setTooted] = useState(tootedFailist);

  // Funktsioon A-Z järgi sorteerimiseks
  const sorteeriAZ = () => {
    tooted.sort((a, b) => a.localeCompare(b));
    setTooted(tooted.slice);
  };

  // Funktsioon Z-A järgi sorteerimiseks
  const sorteeriZA = () => {
    tooted.sort((a, b) => b.localeCompare(a));
    setTooted(tooted.slice);
  };

  // const filtreeriNgaAlgavad = () => {
  //   const vastus = tootedFailist.filter(toode => toode.nimi.startsWith('N'));
  //   setTooted(vastus);
  // }

  // const filtreeriBgaAlgavad = () => {
  //   const vastus = tootedFailist.filter(toode => toode.nimi.startsWith('B'));
  //   setTooted(vastus);
  // }

  const filtreeriAlgusT2heJ2rgi = (algust2ht) => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith(algust2ht));
    setTooted(vastus);
  }

  const lisaOstukorvi = (lisatavToode) => {
    ostukorvFailist.push(lisatavToode);
    toast.success('Edukalt ostukorvi lisatud')
  }
  return (
    <div>
      <h2>Tooted</h2>
      {/* Väljastame tooted */}
      {/* <button onClick={filtreeriNgaAlgavad}>J2ta alles Nga algavad</button>
      <button onClick={filtreeriBgaAlgavad}>J2ta alles Bga algavad</button>
      <button onClick={filtreeriTgaAlgavad}>J2ta alles Tga algavad</button> */}

      <button onClick={() => filtreeriAlgusT2heJ2rgi('N')}>J2ta alles Nga algavad</button>
      <button onClick={() => filtreeriAlgusT2heJ2rgi('B')}>J2ta alles Bga algavad</button>
      <button onClick={() => filtreeriAlgusT2heJ2rgi('T')}>J2ta alles Tga algavad</button>

      <ul>
        {tooted.map((toode, index) => (
          <div key={index}>
          <img className={toode.aktiivne ?'pilt' : 'pilt-mitteaktiivne'} src={toode.pilt} alt="" />
            <div> {toode.nimi}</div>
            <div>{toode.hind}</div>
            <div>{toode.aktiivne}</div>


            <Link to={"/toode/" + index}>
            <button>Vaata l2hemalt</button>
            </Link>
            <button disabled={toode.aktiivne === false} onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
            </div>
        ))}
      </ul>
      {/* Näitame toodete kogust */}
      <p>Kokku on {tooted.length} toodet.</p>
      
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <ToastContainer className={'toast'}/>
    </div>
  );
}

export default Tooted;
