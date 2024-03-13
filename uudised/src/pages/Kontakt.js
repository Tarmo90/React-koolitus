import React, { useState } from 'react';

function Kontakt() {

    const [kontakt, n2itaKontakt] = useState('');
    const tootajad = [
        {"Nimi": "Arvo", "Ala": "Muusika", "Telefon": "+3725435006"},
        {"Nimi": "Kelly","Ala": "Reporter","Telefon": "+3725435006"},
        {"Nimi": "Edward","Ala": "Kujundus","Telefon": "+3725435006"},
        {"Nimi": "Kerli","Ala": "Ajakirjanik","Telefon": "+3725435006"},
        {"Nimi": "Arvo", "Ala": "Muusika", "Telefon": "+3725435006"},
        {"Nimi": "Kelly","Ala": "Reporter","Telefon": "+3725435006"},
        {"Nimi": "Edward","Ala": "Kujundus","Telefon": "+3725435006"},
        {"Nimi": "Kerli","Ala": "Ajakirjanik","Telefon": "+3725435006"}
    ];

    const [valitud, uuendaValikud] = useState('');

    const v6taYhendust = (tootaja) => {
        n2itaKontakt(tootaja.Telefon);
        uuendaValikud(tootaja.Nimi)
    }
    return ( 
        <div>
            <div>Meie tootajad</div>
            VALITUD INIMENE: {valitud}
            {kontakt !== '' && <div>Tema kontakt: {kontakt}</div>}
            <br />
            <div>
                {tootajad.map(tootaja =>
                     <div className={tootaja.Nimi === valitud ? 'valitud' : undefined}>
                        
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
