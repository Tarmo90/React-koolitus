import React, { useRef, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';
import Leht from './pages/Leht'; 
import { ToastContainer, toast } from 'react-toastify';


function App() {
    const [sisseLogitud, muudaSisseLogitud] = useState('ei');
    const [sonum, muudaSonum] = useState('');
    const kasutajaNimiRef = useRef();
    const paroolRef = useRef();


    const logiSisse = () => {
        if (paroolRef.current.value === '') {
            toast.warning('Parooli väli jäi tühjaks');
            return;
        }
        
        if (kasutajaNimiRef.current.value === '') {
            toast.warning('Kasutaja väli jäi tühjaks');
            return;
        }

        if (paroolRef.current.value.length < 8) {
            toast.error('Parool peab olema vähemalt 8 tähemärki pikk');   
        }
        // Kontrolli, kas parool algab suure tähega
        if (paroolRef.current.value[0] !== paroolRef.current.value[0].toUpperCase()) {
            toast.error('Parool peab algama suure tähega!');
            return;
        }
        if (paroolRef.current.value.toUpperCase() === paroolRef.current.value) {
            toast.error('Parool peab sisaldama vähemalt ühte väikest tähte!');
            return;
        }

        // Kontrolli, kas parool sisaldab tähemärki „%“
        if (paroolRef.current.value.includes('%') === false) {
            toast.error('Parool peab sisaldama tähemärki „%“!');
            return;
        }
        if (paroolRef.current.value === '123') {    
            muudaSisseLogitud('jah');
            muudaSonum(kasutajaNimiRef.current.value);
            toast.success("Oled sisse logitud!");
        } else {
            toast.error("Vale parool!");
        }
    };
    
        
    const logiValja = () => {
      muudaSisseLogitud('ei');
    //   muudaSonum(' Oled välja logitud');
      toast.success("Oled välja logitud!");
  }

    return (
        <div className='App'>
            <div>{sonum}</div>

            {sisseLogitud === 'ei' && (
                <div>
                    <label>Kasutajanimi</label><br />
                    <input ref={kasutajaNimiRef} type="text" /> <br />

                    <label>Parool</label> <br />
                    <input ref={paroolRef} type="password" />
                </div>
            )}

            {sisseLogitud === 'ei' && <button onClick={logiSisse}>Logi sisse</button>}
            {sisseLogitud === 'jah' && <button onClick={logiValja}>Logi välja</button>}
            <br /><br />

            <Link to='/'>
                <button>Avaleht</button>
            </Link>
            <Link to='/meist'>
                <button>Meist</button>
            </Link>
            <Link to='/kontakt'>
                <button>Kontakt</button>
            </Link>
            <Link to='/seaded'>
                <button>Seaded</button>
            </Link>

            <Routes>
                <Route path='' element={<Avaleht />} />
                <Route path='meist' element={<Meist />} />
                <Route path='kontakt' element={<Kontakt />} />
                <Route path='seaded' element={<Seaded />} />
            </Routes>

            <Leht /> {/* Lisa Leht komponent */}
            
            <ToastContainer
            position="bottom-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"

            />
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default App;
