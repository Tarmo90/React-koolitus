import React, { useRef, useState } from 'react'; // Impordime Reacti ja useState'i

function Kontakt() {
    // Defineerime olekumuutujad ja nende muutmise funktsioonid koos vaikeseadetega
    const [aadress, m22raAadress] = useState('Tallinn');
    const [telefon, m22raTelefon] = useState('545456456');
    const [email, m22raEmail] = useState('Mail@mail.ee');
    const [ingliseKeelne, m22raIngliseKeelne] = useState('ei');

    const inputistLugeja = useRef();
    const [muutuvHTML, funktsioonMuutujaMuutmiseks] = useState('');

    const onClickFunktsioon = () => {
        funktsioonMuutujaMuutmiseks(inputistLugeja.current.value);
    }

    // Funktsioon 'ingliseks', mis muudab olekumuutujate väärtusi inglise keelseks
    const ingliseks = () => {
        m22raAadress('London');
        m22raTelefon('43050596');
        m22raEmail('mail@mail.com');
        m22raIngliseKeelne('jah');
    }

    // Tagastame JSX elemendid, mis kuvavad olekumuutujate väärtusi ja nende muutmise nupu
    return (
        <div>
            <div>{aadress}</div> {/* Kuvame aadressi */}
            <div>{telefon}</div> {/* Kuvame telefoni */}
            <div>{email}</div> {/* Kuvame emaili */}
            
            <button onClick={ingliseks}>Muuda inglise keelseks</button> {/* Nupp inglise keelseks muutmiseks */}
            {/* Tingimuslaused, mis kuvavad sõnumi, kui leht on inglise keelne */}
            {ingliseKeelne === 'jah' && <div>Leht on inglise keelne</div>}

            <input ref={inputistLugeja} type='text' />
            <button onClick={onClickFunktsioon}>Muuda</button>
            <div>{muutuvHTML}</div>
        </div>
    );
}

export default Kontakt; // Ekspordime Kontakt komponendi
