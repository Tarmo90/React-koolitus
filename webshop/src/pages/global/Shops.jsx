// Shops.jsx
import { useState, useEffect } from 'react';
import Map from '../../components/Map';
import { Button } from '@mui/material';

function Shops() {
  const [coordinates, setCoordinates] = useState({ lngLat: [59.4378, 24.7574], zoom: 11 });
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_SHOPS_URL)
      .then(res => res.json())
      .then(data => setShops(data || []))
  }, []);

  return (
    <div>
      {/* Buttons for setting coordinates */}
      <Button onClick={() => setCoordinates({ lngLat: [58.8879, 25.5409], zoom: 7 })}>Kõik poed</Button>
      <Button onClick={() => setCoordinates({ lngLat: [59.4378, 24.7574], zoom: 11 })}>Kõik Tallinna poed</Button>
      <Button onClick={() => setCoordinates({ lngLat: [59.4231, 24.7991], zoom: 13 })}>Ülemiste</Button>
      <Button onClick={() => setCoordinates({ lngLat: [59.4277, 24.7193], zoom: 13 })}>Kristiine</Button>
      <Button onClick={() => setCoordinates({ lngLat: [59.4413, 24.7350], zoom: 13 })}>Palti jaam</Button>
      <Button onClick={() => setCoordinates({ lngLat: [58.3780, 26.7308], zoom: 13 })}>Tasku</Button>
      
      {/* Map component with correct prop */}
      <Map mapCoordinates={coordinates} shops={shops} />
      
      {/* Displaying shop data */}
      <div>
        {shops.map((shop, index) => (
          <div key={index} className='shop'>
            <div className='shop_container'>
            <h3>{shop.name}</h3>
            <p>Location: {shop.latitude}, {shop.longitude}</p>
            <p>Lahtiolekuaeg: {shop.openTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shops;
