import React, { useRef, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht'
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';
import Leht from './pages/Leht'; 
import { ToastContainer, toast } from 'react-toastify';

function Logimine({ onLogin }) {
    const kasutajaNimiRef = useRef();
    const paroolRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const kasutajanimi = kasutajaNimiRef.current.value;
        const parool = paroolRef.current.value;

        // Siselogimise loogika
        if (parool === '123') {
            onLogin(kasutajanimi);
            toast.success("Oled sisse logitud!");
        } else {
            toast.error("Vale parool!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Kasutajanimi</label><br />
                <input ref={kasutajaNimiRef} type="text" /> <br />

                <label>Parool</label> <br />
                <input ref={paroolRef} type="password" />
            </div>
            <button type="submit">Logi sisse</button>
        </form>
    );
}

function App() {
    const [sisseLogitud, muudaSisseLogitud] = useState(false);
    const [kasutajaNimi, setKasutajaNimi] = useState('');

    const handleLogin = (kasutajanimi) => {
        setKasutajaNimi(kasutajanimi);
        muudaSisseLogitud(true);
    };

    const handleLogout = () => {
        setKasutajaNimi('');
        muudaSisseLogitud(false);
        toast.success("Oled välja logitud!");
    };

    return (
        <div className='App'>
            {sisseLogitud ? (
                <div>
                    <p>Tere tulemast, {kasutajaNimi}!</p>
                    <button onClick={handleLogout}>Logi välja</button>
                </div>
            ) : (
                <Logimine onLogin={handleLogin} />
            )}
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
                {/* <Link to='/logi'>
                    <button>Logi sisse</button>
                </Link> */}

            <Routes>
                <Route path='/' element={<Avaleht />} />
                <Route path='/meist' element={<Meist />} />
                <Route path='/kontakt' element={<Kontakt />} />
                <Route path='/seaded' element={<Seaded />} />
                {/* <Route path='/logi' element={<Logimine />} /> */}
            </Routes>

            <Leht />
            
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
            
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default App;

