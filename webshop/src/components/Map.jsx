import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
import { useEffect, useState } from 'react';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) { 
  const [shops, setShops] = useState([])
  
  // useEffect, et laadida andmed shops muutujasse
  useEffect(() => {
    fetch(process.env.REACT_APP_SHOPS_URL)
    .then(res => res.json())
    .then(data => setShops(data || []))
  }, []);

  return (
    <div>
      <MapContainer className='map' center={props.mapCoordinates.lngLat} zoom={props.mapCoordinates.zoom} scrollWheelZoom={false}>
        <ChangeView center={props.mapCoordinates.lngLat} zoom={props.mapCoordinates.zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Kontrolli, kas shops muutuja on täidetud enne map funktsiooni rakendamist */}
        {shops.length > 0 && shops.map((shop, index) => (
          <Marker key={index} position={[shop.latitude, shop.longitude]}>
            <Popup>
              {shop.name}. <br /> Avatud {shop.openTime}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;