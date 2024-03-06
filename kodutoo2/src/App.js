
import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht'
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';
import Leht from './pages/Leht'; 
import Logimine from './pages/Logimine'; 



// import Leht from './pages/Leht'; 

function App() {
  return (
    <div>
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
            <Link to='/leht'>
                <button>Leht</button>
            </Link>
                <Link to='/logimine'>
                    <button>Logi sisse</button>
                </Link>


              <Routes>
                <Route path='/' element={<Avaleht />} />
                <Route path='/meist' element={<Meist />} />
                <Route path='/kontakt' element={<Kontakt />} />
                <Route path='/seaded' element={<Seaded />} />
                <Route path='/leht' element={<Leht />} />
                <Route path='/logimine' element={<Logimine />} />
              </Routes>

              

    </div>
  );
}

export default App;
