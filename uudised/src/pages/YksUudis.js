import React from 'react'
import {useParams} from 'react-router-dom'

function YksUudis() {
  const {index} = useParams();
  const uudiesdLS = JSON.parse(localStorage.getItem('uudised')) || []
  const leitudUudis = uudiesdLS[index];
  
  return (

    <div>
      {leitudUudis}
    </div>
  )
}

export default YksUudis