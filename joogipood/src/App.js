import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaJook from './pages/LisaJook';
import HaldaJooke from './pages/HaldaJooke';

function App() {
  return (
    <div>
      <Link to='/'>
        <button>Avaleht</button>
      </Link>
      <Link to='/lisajook'>
        <button>Lisa jook</button>
      </Link>
      <Link to='/haldajooke'>
        <button>Halda jooke</button>
      </Link>

      <Routes>
        <Route path='/' element={<Avaleht />} />
        <Route path='/lisajook' element={<LisaJook />} />
        <Route path='/haldajooke' element={<HaldaJooke />} />
      </Routes>
    </div>
  );
}

export default App;
