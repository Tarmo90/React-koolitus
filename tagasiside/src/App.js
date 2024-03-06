import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tagasiside  from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';



function App() {
  return (
    <div>
      <Link to = '/'>
        <button>Avalehele</button>
      </Link>
      <Link to = '/tagasiside'>
        <button>Tagasisided lehele</button>
      </Link>
      <Link to = '/andjad'>
        <button>Vaata, kes tagasisidet on andnud</button>
      </Link>

      <Routes>
        <Route path='/' element={<div>Tere</div>} />
        <Route path='/tagasiside' element={<Tagasiside />} />
        <Route path='/andjad' element={<TagasisideAndjad />} />

      </Routes>
    </div>
  );
}

export default App;
