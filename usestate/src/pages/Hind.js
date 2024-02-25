import React, {useState} from 'react'

function Hind() {
    const [hind, uuendaHind] = useState(0);

  return (
    <div>
    {hind === 0 && <div>M2lukaart on valimata!</div>}
    <div>Valitud m2lukaardiga telefoni hind: {hind} </div>
    <button className={hind === 30 ? 'aktiivne' : 'm2lukaart-nupp'} onClick={() => uuendaHind(30)}>M2lukaart 16GB</button>
    <button className={hind === 50 ? 'aktiivne' : 'm2lukaart-nupp'} onClick={() => uuendaHind(50)}>M2lukaart 32GB</button>
    <button className={hind === 80 ? 'aktiivne' : 'm2lukaart-nupp'} onClick={() => uuendaHind(80)}>M2lukaart 64GB</button>
    <button className={hind === 110 ? 'aktiivne' : 'm2lukaart-nupp'} onClick={() => uuendaHind(110)}>M2lukaart 128GB</button>
    <button className={hind === 130 ? 'aktiivne' : 'm2lukaart-nupp'} onClick={() => uuendaHind(130)}>M2lukaart 256GB</button>
    <button className={hind === 150 ? 'aktiivne' : 'm2lukaart-nupp'} onClick={() => uuendaHind(150)}>M2lukaart 512GB</button>
   </div>

  )
}

export default Hind;