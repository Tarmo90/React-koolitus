import LocalShipping from '@mui/icons-material/LocalShipping'
import { Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

function ParcelMachines() {
  const [parcelMachines, setParcelMachines] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('EE');
  const [originalPMs, setOriginalPMs] = useState([]);
  const searchRef = useRef();

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(body => {
        setParcelMachines(body);
        setOriginalPMs(body);
      })
  }, []);

  const filterParcelMachines = (countryCode) => {
    return parcelMachines.filter(pm => pm.A0_NAME === countryCode);
  };


  const searchFromPMs = () => {
   const result = originalPMs.filter(pm => pm.NAME.toLowerCase().includes(searchRef.current.value.toLowerCase()));
   setParcelMachines(result)
  }

  return (
    <div>
          <Button variant='outlined' onClick={() => setSelectedCountry('EE')}>EE</Button>
          <Button variant='outlined' onClick={() => setSelectedCountry('LV')}>LV</Button>
          <Button variant='outlined' onClick={() => setSelectedCountry('LT')}>LT</Button>

          <LocalShipping/>
          <input ref={searchRef} onChange={searchFromPMs} type="text" />
          <span>{filterParcelMachines(selectedCountry).length} pcs</span>


          {parcelMachines.length === 0 ? <div>Loading...</div> : <select>
          {filterParcelMachines(selectedCountry).map(pm => <option>{pm.NAME}</option>)}
          </select>}
    </div>
  )
}

export default ParcelMachines