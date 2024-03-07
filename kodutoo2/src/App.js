import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';
import Leht from './pages/Leht'; 
import Logimine from './pages/Logimine'; 
import Kuud from './pages/Months'; 
import Loomad from './pages/Animals'; 
import S6nad from './pages/Words'; 




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
      <Link to='/months'>
        <button>Kuud</button>
      </Link>
      <Link to='/animals'>
        <button>Loomad</button>
      </Link>
      <Link to='/words'>
        <button>S6nad</button>
      </Link>

      <Routes>
        <Route path='/' element={<Avaleht />} />
        <Route path='/meist' element={<Meist />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='/seaded' element={<Seaded />} />
        <Route path='/leht' element={<Leht />} />
        <Route path='/logimine' element={<Logimine />} />
        <Route path='/months' element={<Kuud />} />
        <Route path='/animals' element={<Loomad />} />
        <Route path='/words' element={<S6nad />} />

      </Routes>
    </div>
  );
}

export default App;
