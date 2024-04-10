import React from 'react'

function GamePage() {
  const m2ngijad = JSON.parse(localStorage.getItem('m2ngijad')) || [];
  
  return (
    <div>
      <h3>Tere tulemast!</h3>
      {m2ngijad.map((m2ngija, index) => (
        <div key={index}>
          <div>{m2ngija.m2ngija}</div>
        </div>
      ))}
    </div>
  )
}

export default GamePage
