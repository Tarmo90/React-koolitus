import React, { useState } from 'react'

function Words() {

  const [words, m22raWords] = useState(['spray', 'elite', 'exuberant', ' destruction', 'present'])
  
  function kustutaWords(index) {
    words.splice(index, 1);
    m22raWords(words.slice());
  }
  return (
    <div>
      Words:
      <br /><br />
      <div>{words.length} tk</div>
      {words.length === 0 && 
      <div>No words</div>}
      {words.map((element, index) => (
        <div key={index}>
          <span>{element}</span>
          <button onClick={() => kustutaWords(index)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default Words;