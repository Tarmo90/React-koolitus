import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Avaleht() {

    const [sisselogitud, muudaSisselogitud] = useState('ei');
    const [sonum, muudaSonum] = useState('');
    const kasutajaNimiRef = useRef();
    const paroolRef = useRef();

    const logiSisse = () => {
            

            if (paroolRef.current.value.length < 8) {
            toast.error('Liiga lyhike')
            return;   
           }

            if (paroolRef.current.value.toLowerCase() === paroolRef.current.value) {
            toast.error('Peab sisaldama suut t2hte')
            return;   
           }

           if (paroolRef.current.value.toUpperCase() === paroolRef.current.value) {
            toast.error('Peab sisaldama v2ikest t2hte')
            return;   
           }

           if (paroolRef.current.value.includes('%') === false) {
            toast.error('Peab sisaldama protsenti')
            return;   
           }

           if (paroolRef.current.value === '123') {
            muudaSisselogitud('jah');
            muudaSonum(kasutajaNimiRef.current.value + 'Oled sisse logitud');
            toast.success('S6num');
            return;
            }
        toast.error('Vale parool');
        muudaSonum('Vale parool');
        return;
    }
    return (
        <div className='app'>
            <div>{sonum}</div>
            <div>
                <label>Kasutajanimi</label>
                <br />
                <input ref={kasutajaNimiRef} type="text" />
                <br />
                <label>Parool</label>
                <br />
                <input ref={paroolRef} type="password" />
                <br />
            </div>
            { sisselogitud === 'ei' && <button onClick={logiSisse}>Logi sisse</button>}
            { sisselogitud === 'jah' && <button onClick={() => muudaSisselogitud('ei')}>Logi v2lja</button>}

            <ToastContainer/>
        </div>
    )
}

    

export default Avaleht;
