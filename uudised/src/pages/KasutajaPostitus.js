import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function KasutajaPostitus() {
  const {kasutajaId} = useParams();
  const [postitused, uuendaPostitused] =  useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
          const result = data.filter(element => element.userId === Number(kasutajaId))
          uuendaPostitused(result)
        })    
}, [kasutajaId]);

  return (
    <div className='avaleht'>
    
        {postitused.map(element => 
        
        <div>
            <div><i>{element.userId}</i> </div>
            <div><u>{element.id}</u></div>
            <div><b>{element.title}</b></div>
            <div>{element.body}</div>
            {/* <Link to={'postitus/' + element.userId}>
            <button>K6ik kasutaja postitused</button>
            </Link> */}
        </div>
     
        )}
    </div>
  )
}

export default KasutajaPostitus