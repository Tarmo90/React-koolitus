import {useState} from 'react'
import { Link } from 'react-router-dom';

function HaldaUudiseid() {

  const [uudised, muudaUudised] = useState(JSON.parse(localStorage.getItem('uudised')) || []);

  const kustuta = (index) => {
    uudised.splice(index, 1);
    muudaUudised(uudised.slice())
    localStorage.setItem('uudised', JSON.stringify(uudised))
  }


  return (
    <div className='konteiner'>
      {uudised.map((uudis, index) => 
      <div key={index}>
        <div className='halda'> {uudis} </div>
        <button onClick={() => kustuta(index)}>Kustuta</button>
        <Link to={'/muuda/' + index}>
          <button>Muuda</button>
        </Link>
      </div>)}
    </div>
  )
}

export default HaldaUudiseid