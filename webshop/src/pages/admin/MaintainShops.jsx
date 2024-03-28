import { TextField, Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { Button as BButton } from 'react-bootstrap';

function MaintainShops() {
  const [shops, setShops] = useState([]);
  const shopRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const openTimeRef = useRef();

  useEffect(() => {
    fetch(process.env.REACT_APP_SHOPS_URL)
    .then(res => res.json())
    .then(data => setShops(data || []))
  }, []);

  const add = () => {
    const newShop = {
      'name': shopRef.current.value,
      'latitude': Number(latitudeRef.current.value),
      'longitude': Number(longitudeRef.current.value),
      'openTime': openTimeRef.current.value
    };
    setShops([...shops, newShop]); 
    fetch(process.env.REACT_APP_SHOPS_URL, {'method': 'PUT', 'body': JSON.stringify(shops)})
  }

  const remove = (index) => {
    shops.splice(index, 1)
    setShops(shops.slice())
    fetch(process.env.REACT_APP_SHOPS_URL, {'method': 'PUT', 'body': JSON.stringify(shops)})
  }

  return (
    <div>
      <TextField label='shop' inputRef={shopRef}/>
      <TextField label='latitude' inputRef={latitudeRef}/>
      <TextField label='longitude' inputRef={longitudeRef}/>
      <TextField label='open-time' inputRef={openTimeRef}/>
      <Button variant='contained' onClick={add}>Sisesta</Button>
      {shops.map((newShop, index) =>
      <div key={index}>
        <span>{newShop.name}; </span>
        <span>{newShop.latitude}; </span>
        <span>{newShop.longitude}; </span>
        <span>{newShop.openTime}; </span>
        <BButton variant='danger' onClick={() => remove(index)}>Kustuta</BButton>
      </div>
      )}
    </div>
  )
}

export default MaintainShops

//name: '', latitude: 22, longitude: 22, openTime: '9-21'
