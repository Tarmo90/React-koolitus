import React, { useRef, useState } from 'react';

function Leht() {
    const inputistLugeja = useRef();
    const [muutuvHTML, funktsioonMuutujaMuutmiseks] = useState('');

    const onClickFunktsioon = () => {
        funktsioonMuutujaMuutmiseks(inputistLugeja.current.value);
    }

    return (
        <div >
            <input ref={inputistLugeja} type='text' />
            <button onClick={onClickFunktsioon}>Muuda</button>
            <div>{muutuvHTML}</div>
            
        </div>
    );
}

export default Leht;
