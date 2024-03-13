import React, { useState } from 'react';
import kasutajadFail from '../data/Kasutajad.json';

function Kasutajad() {
  const [kasutajad, uuendaKasutajad] = useState(kasutajadFail);

  const allBack = () => {
    uuendaKasutajad(kasutajadFail);
  };

  const filterName = () => {
    const result = kasutajad.filter(kasutaja => kasutaja.username.length >= 10);
    uuendaKasutajad(result);
  };

  const findIndexAndDelete = (index) => {
    const updatedKasutajad = [...kasutajad];
    updatedKasutajad.splice(index, 1);
    uuendaKasutajad(kasutajad.slice());
  };

  const findIndexLucio = () => {
    const index = kasutajad.findIndex(user => user.email === 'Lucio_Hettinger@annie.ca')
    console.log(index)
  }

  const findFirstNameC = () => {
    const found = kasutajad.find(user => user.name.substring(0,1) === 'C')
    console.log(found)
  }
  
  const sortByLatitude = () => {
    kasutajad.sort((a, b) => parseFloat(a.address.geo.lat) - parseFloat(b.address.geo.lat));
    uuendaKasutajad(kasutajad.slice);
  };
  
   
  const filterByLongtitude = () => {
    const result = kasutajad.filter(user => parseFloat(user.address.geo.lng) > 0);
    uuendaKasutajad(result);
  };
  
  return (
    <div>
      <div>{kasutajad.length}</div>
      <button onClick={() => allBack()}>0</button>
      <button onClick={() => filterName()}>1</button>
      <button onClick={() => findIndexLucio()}>3</button>
      <button onClick={() => findFirstNameC()}>4</button>
      <button onClick={() => sortByLatitude()}>5</button>
      <button onClick={() => filterByLongtitude()}>6</button>




      {kasutajad.map((kasutaja, index) => (
        <div>
          <div>{kasutaja.id}</div>
          <div>{kasutaja.name}</div>
          <div>{kasutaja.username}</div>
          <div>{kasutaja.email}</div>
          <div>{kasutaja.address}</div>
          <div>{kasutaja.street}</div>
          <div>{kasutaja.suite}</div>
          <div>{kasutaja.city}</div>
          <div>{kasutaja.zipcode}</div>
          <div>{kasutaja.geo}</div>
          <div>{kasutaja.lat}</div>
          <div>{kasutaja.lng}</div>
          <div>{kasutaja.phone}</div>
          <div>{kasutaja.website}</div>
          <div>{kasutaja.company}</div>
          <button onClick={() => findIndexAndDelete(index)}>2</button>
        </div>
      ))}
    </div>
  );
}

export default Kasutajad;
