import React, { useState } from 'react'

function Animals() {

  const [animals, m22raAnimals] = useState(['pigs', 'goats', 'sheep', 'lions'])

  function kustutaAnimals(index) {
    animals.splice(index, 1);
    m22raAnimals(animals.slice());
  }
  return (
    <div>Animals:
      <br /><br />
      <div>{animals.length} tk</div>
      {animals.length === 0 &&
      <div>No animals</div>}
      {animals.map((element, index) =>
      <div key={index}>
        <span>{element}</span>

        <button onClick={() => kustutaAnimals(index)}>x</button>
        </div>
      )}
    </div>
    
  )
}

export default Animals