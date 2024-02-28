import React, { useState } from 'react'

function Kontakt() {
    const [n2itaTelTallinn, muudaN2itaTelTallinn] = useState(false)
    const [n2itaTelYlemiste, muudaN2itaYlemiste] = useState(false)
    const [n2itaTelTasku, muudaN2itaTasku] = useState(false)
    // const [kontakt, n2itaKontakt] = useState('');
    return ( 
        // <div className="konteiner">
        // <div className="kontaktid">See on kontaktide leht</div>
        <div>
        <div>Meie tootajad</div>
        <br />
        <div onClick={() => muudaN2itaTelTallinn(!n2itaTelTallinn)}> Kristiine keskus</div>
        {n2itaTelTallinn && <div>+3728903499</div> }
        <div>Endla 45</div>
        <br />
        <div onClick={() => muudaN2itaYlemiste(!n2itaTelYlemiste)}>Ylemiste keskus</div>
        {n2itaTelYlemiste && <div>+3728903499</div> }
        <div>Suur-S6jam2e 4</div>
        <br />
        <div onClick={() => muudaN2itaTasku(!n2itaTelTasku)}>Tasku keskus</div>
        {n2itaTelTasku && <div>+3728903499</div> }
        <div>Riia 2</div>

    </div> );
}

export default Kontakt ;