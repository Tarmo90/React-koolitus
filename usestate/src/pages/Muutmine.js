import React, { useState } from 'react';

function Muutmine() {
    const [hind, uuendaHind] = useState(39);
    const [aktiivnePakett, uuendaAktiivnePakett] = useState('family');

    const muudaPaketti = (uusHind, paketiNimi) => {
        uuendaHind(uusHind);
        uuendaAktiivnePakett(paketiNimi);
    };

    return (
        <div>
            <span className={aktiivnePakett === 'family' ? 'pakett-aktiivne' : 'pakett'} onClick={() => muudaPaketti(39, 'family')}>Family</span>
            <span className={aktiivnePakett === 'standard' ? 'pakett-aktiivne' : 'pakett'} onClick={() => muudaPaketti(59, 'standard')}>Standard</span>
            <span className={aktiivnePakett === 'mini' ? 'pakett-aktiivne' : 'pakett'} onClick={() => muudaPaketti(29, 'mini')}>Mini</span>
            <div>Kuumakse: 0$</div>
            <div>Tavahind: {hind} $</div>
        </div>
    );
}

export default Muutmine;



