import React, { useState } from 'react';

function Kontakt() {

    const [kontakt, n2itaKontakt] = useState('');
    const tootajad = [
        {"Nimi": "Arvo", "Ala": "Muusika", "Telefon": "+3725435006"},
        {"Nimi": "Kelly","Ala": "Reporter","Telefon": "+3725556446"},
        {"Nimi": "Edward","Ala": "Kujundus","Telefon": "+3725875465"},
        {"Nimi": "Liina","Ala": "Ajakirjanik","Telefon": "+3725456473"},
        {"Nimi": "Peeter", "Ala": "Muusika", "Telefon": "+3725564543"},
        {"Nimi": "Mari","Ala": "Reporter","Telefon": "+3725455455"},
        {"Nimi": "Andres","Ala": "Kujundus","Telefon": "+372555334"},
        {"Nimi": "Kerli","Ala": "Ajakirjanik","Telefon": "+3725423454"}
    ];

    const [valitud, uuendaValikud] = useState('');

    const v6taYhendust = (tootaja) => {
        n2itaKontakt(tootaja.Telefon);
        uuendaValikud(tootaja.Nimi)
    }
    return ( 
        <div className='konteiner'>
            <div className='kontaktide-text'>
          
            <div>Meie tootajad</div>
            <br />
            VALITUD INIMENE: <div className='valitud'>{valitud}</div> 
            {kontakt !== '' && <div>Tema kontakt: <span className='valitud'>{kontakt}</span> </div>}
            <br />
            </div>
            <div className='kontaktide-text'>
                {tootajad.map(tootaja =>
                     <div key={tootaja.Nimi} className={tootaja.Nimi === valitud ? 'valitud' : undefined}>
                        
                        <div>
                            <div>{tootaja.Nimi}</div>
                            <div>{tootaja.Ala}</div>
                            <button onClick={() => v6taYhendust(tootaja)}>Võta ühendust</button>
                        </div>
                    </div>
                    
                )}
            </div> 
           
            
        </div>
    );
}

export default Kontakt;
