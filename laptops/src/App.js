import './App.css';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaArvuti from './pages/LisaArvuti';
import VaataArvuteid from './pages/VaataArvuteid';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to='/'>
          <button>Avaleht</button>
        </Link>
        <Link to='/all'>
          <button>Sülearvutid</button>
        </Link>
        <Link to='/add'>
          <button>Lisa sülearvuti</button>
        </Link>
        <Link to='/cart'>
          <button>Ostukorv</button>
        </Link>
        <Routes>
          <Route path='/' element={<Avaleht />} />
          <Route path='/all' element={<VaataArvuteid />} />
          <Route path='/add' element={<LisaArvuti />} />
          <Route path='/cart' element={<Ostukorv/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
