import React, { useState } from 'react'

function Kontakt() {
   
    const [kontakt, n2itaKontakt] = useState('');
    return ( 
        <div className="konteiner">
        <div className="kontaktid">See on kontaktide leht</div>
        <div className= "info">Võta meiega ühendust:</div> <br />

        <div className= "info2">nimi: 'Jaan Tamm',<br />
        email: 'jaan.tamm@example.com',<br />
      
       
        ametikoht: 'Müügijuht',<br />
        asukoht: 'Tallinn' <br />
        <button onClick={() => n2itaKontakt('+372 54643234')}>Vota yhendust</button> <br />
        { kontakt !== '' && <div>Tema kontakt: {kontakt}</div> }
        </div>

        <div className="info3">nimi: 'Mari Mets',<br />
        email: 'mari.mets@example.com',<br />
        
        <button onClick={() => n2itaKontakt('+372 54643234')}>Vota yhendust</button> <br />
        { kontakt !== '' && <div>Tema kontakt: {kontakt}</div> }
        </div>

        <div className="info4">nimi: 'Peeter Puu',<br />
        email: 'peeter.puu@example.com',<br />
        
        <button onClick={() => n2itaKontakt('+372 54643234')}>Vota yhendust</button> <br />
        { kontakt !== '' && <div>Tema kontakt: {kontakt}</div> }
        </div>

        </div> );
}

export default Kontakt ;