import React, { useState } from 'react'
import joogidFailist from '../data/joogid.json'


function Avaleht() {

  const [joogid] = useState(joogidFailist)

  return (
    <div>
      <h2>Avaleht</h2>
      {joogid.map((element) =>
        <div>
          <span>{element}</span>
        </div>)}
    </div>
  )
}

export default Avaleht