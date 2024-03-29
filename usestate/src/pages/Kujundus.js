import React, {useState} from 'react'

function Kujundus() {
    const [valitud, uuendaValituid] = useState('family');

  return (
    <div>
        <span 
        className={valitud === 'family' ? 'pakett-aktiivne':'pakett'}
        onClick={() => uuendaValituid('family')}>Family 
        </span>

        <span 
        className={valitud === 'standard' ? 'pakett-aktiivne':'pakett'}
        onClick={() => uuendaValituid('standard')}>Standard
        </span>

        <span 
        className={valitud === 'mini' ? 'pakett-aktiivne':'pakett'}
        onClick={() => uuendaValituid('mini')}>Mini
        </span>
    </div>
  )
}

export default Kujundus;