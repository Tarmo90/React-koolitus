import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tagasiside  from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import YksikTagasisideAndja from './pages/YksikTagasisideAndja';
import Tegevused from './pages/Tegevused';
import Kasutajad from './pages/Kasutajad';



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
      <Link to = '/tegevused'>
        <button>Vaata, mis ylesandeid veel tegema pead</button>
      </Link>
      <Link to = '/kasutajad'>
        <button>Vaata kasutajaid</button>
      </Link>

      <Routes>
        <Route path='/' element={<div>Tere</div>} />
        <Route path='/tagasiside' element={<Tagasiside />} />
        <Route path='/andjad' element={<TagasisideAndjad />} />
        <Route path='/yks-andja/:index' element={<YksikTagasisideAndja />} />
        <Route path='/tegevused' element={<Tegevused />} />
        <Route path='/kasutajad' element={<Kasutajad />} />



      </Routes>
    </div>
  );
}

export default App;
