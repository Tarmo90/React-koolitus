import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem('keel') || 'est');
    const emailRef = useRef();
    const aadressRef = useRef();
    const telefonRef = useRef();

    const [email, setEmail ] = useState(localStorage.getItem('email'));
    const [aadress, setAadress] = useState(localStorage.getItem('aadress'));
    const [telefon, setTelefon] = useState(localStorage.getItem('telefon'));

    const sisestaEmail = () => {
      if (emailRef.current.value === '') {
        toast.error('Emaili v2li j2i tyhjaks')
        return; //ei lase funktsioonil edasi minna
      }
      
      if(emailRef.current.value.includes('@') === false) {
        toast.error('Sisestatud e-mail ei ole korrektsel kujul');
        return;
      }

      setEmail(emailRef.current.value.includes()); //muudab html
      localStorage.setItem( 'email', emailRef.current.value ); //salvestab
      emailRef.current.value = '';
      toast.success("Email sisestatud!")
    }

    const sisestaAadress = () => {
      if(aadressRef.current.value === '') {
        toast.error('Aadressi v2li j2i tyhjaks');
        return;
      }

      if(aadressRef.current.value.toLowerCase()[0] === aadressRef.current.value[0]) {
        toast.error('Aadressi ei saa alustada v2ikese t2hega v6i numbriga');
        return;
      }

      setAadress(aadressRef.current.value);
      localStorage.setItem( 'aadress', aadressRef.current.value ); //salvestab
      aadressRef.current.value ='';
      toast.success("Aadress sisestatud!")
    }

    const sisestaTelefon = () => {
      //kontrolli kas on sisestatud
      //kontrolli kas algab +372
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
      setTelefon(telefonRef.current.value);
      localStorage.setItem( 'telefon', telefonRef.current.value ); //salvestab
      telefonRef.current.value ='';
      toast.success("Telefon sisestatud!")
    }

    const muudaKeelEst = () => {
      uuendaKeel("est")
      localStorage.setItem('keel', 'est');
    }

    const muudaKeelEng = () => {
      uuendaKeel("eng")
      localStorage.setItem('keel', 'eng');
    }

    const muudaKeelRus = () => {
      uuendaKeel("rus")
      localStorage.setItem('keel', 'rus');
    }

  return (
    <div>
      <div>Seaded</div>

      <label>Email</label> 
      <input ref={emailRef} type="text" /> 
      <button onClick={sisestaEmail}>Sisesta</button>
      <br />{email}<br />

      <label>Aadress</label> 
      <input ref={aadressRef} type="text" /> 
      <button onClick={sisestaAadress}>Sisesta</button>
      <br />{aadress}<br />

      <label>Telefon</label> 
      <input ref={telefonRef} type="text" /> 
      <button onClick={sisestaTelefon}>Sisesta</button>
      <br />{telefon}<br />

      <div className={keel === "est" ? "sinine" : null}>Keel: {keel}</div>
      { keel === "est" && <div>Leht on eesti keelne</div>}
      { keel === "eng" && <div>This page is written in english</div>}
      { keel === "rus" && <div>Cтpaницa на русском языке</div>}
      <div>
        <button onClick={muudaKeelEst}>Est</button>
        <button onClick={muudaKeelEng}>Eng</button>
        <button onClick={muudaKeelRus}>Rus</button>
      </div>
      <Link to='/'>
        <button>Tagasi</button>
      </Link>
      <ToastContainer position="bottom-right"
      autoClose={3000}
      theme="light"
      closeOnClick
      
      />

    </div>
  );
}

export default Seaded;