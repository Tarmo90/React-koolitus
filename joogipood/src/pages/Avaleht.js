import React, { useState } from 'react'
import joogidFailist from '../data/joogid.json'
import { Link } from 'react-router-dom'


function Avaleht() {

  const [joogid] = useState(joogidFailist)

  return (
    <div>
      <h2>Avaleht</h2>
      {joogid.map((element, index) =>
        <div>
          <Link to={'/jook/' + index}>
          <span>{element}</span>
          </Link>
        </div>)}
    </div>
  )
}

export default Avaleht