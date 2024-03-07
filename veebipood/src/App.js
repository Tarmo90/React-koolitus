//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './Pages/Avaleht';
import Esindused from './Pages/Esindused';
import Kinkekaart from './Pages/Kinkekaart';
import Arikliendile from './Pages/Arikliendile';
import LisaToode from './Pages/LisaToode';
import Ostukorv from './Pages/Ostukorv';
import Seaded from './Pages/Seaded';
import NotFound from './Pages/NotFound';
import Hinnad from './Pages/Hinnad';
import Tootajad from './Pages/Tootajad';
import Tooted from './Pages/Tooted';
import HaldaTooted from './Pages/HaldaTooted';
import HaldaEsindused from './Pages/HaldaEsindused';
import HaldaHinnad from './Pages/HaldaHinnad';
import HaldaTootajad from './Pages/HaldaTootajad';
import LisaHind from './Pages/LisaHind';
import LisaEsindus from './Pages/LisaEsindus';
import LisaTootaja from './Pages/LisaTootaja';

function App() {
  return (
    <div className="App">

      <Link to="/">     
      <img className="pilt" src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt="" />
      </Link>   
     
     <Link to="/osta-kinkekaart">
      <button className="nupp">Osta kinkekaart</button>
     </Link>

     <Link to="/arikliendile">
      <button className="nupp">2rikliendile</button>
     </Link>

      <Link to='/ostukorv'>
        <button className='nupp'>Ostukorv</button>
      </Link>

      <Link to='/seaded'>
        <button className='nupp'>Seaded</button>
      </Link>
      <br /><br />

      <Link to="/esindused">
      <button className="nupp">Esindused</button>
     </Link>
     
      <Link to='/hinnad'>
        <button className='nupp'>Hinnad</button>
      </Link>
      <Link to='/tooted'>
        <button className='nupp'>Tooted</button>
      </Link>
      <Link to='/tootajad'>
        <button className='nupp'>Tootajad</button>
      </Link>
      <br /><br />

      <Link to='/halda-tooted'>
        <button className='nupp'>Halda tooteid</button>
      </Link>
      <Link to='/halda-esindused'>
        <button className='nupp'>Halda esindusi</button>
      </Link>
      <Link to='/halda-hinnad'>
        <button className='nupp'>Halda hindu</button>
      </Link>
      <Link to='/halda-tootajad'>
        <button className='nupp'>Halda tootajaid</button>
      </Link>
      <br /><br />

      <Link to='/lisa-hind'>
        <button className='nupp'>Lisa hind</button>
      </Link>
      <Link to='/lisa-esindus'>
        <button className='nupp'>Lisa esindus</button>
      </Link>
      <Link to='/lisa-tootaja'>
        <button className='nupp'>Lisa tootaja</button>
      </Link>
      <Link to='/lisa-toode'>
        <button className='nupp'>Lisa toode</button>
      </Link>

     <Routes>
      <Route path="" element={ <Avaleht /> } />
      <Route path="esindused" element={<Esindused /> } />
      <Route path="osta-kinkekaart" element={<Kinkekaart /> } />
      <Route path="arikliendile" element={<Arikliendile /> } />
      <Route path="lisa-toode" element={<LisaToode/> } />
      <Route path="ostukorv" element={<Ostukorv /> } />
      <Route path="seaded" element={<Seaded /> } />
      <Route path="hinnad" element={<Hinnad /> } />
      <Route path="Tooted" element={<Tooted /> } />
      <Route path="Tootajad" element={<Tootajad /> } />
      <Route path="halda-tooted" element={<HaldaTooted /> } />
      <Route path="halda-esindused" element={<HaldaEsindused /> } />
      <Route path="halda-hinnad" element={<HaldaHinnad /> } />
      <Route path="halda-tootajad" element={<HaldaTootajad /> } />
      <Route path="lisa-hind" element={<LisaHind/> } />
      <Route path="lisa-esindus" element={<LisaEsindus/> } />
      <Route path="lisa-tootaja" element={<LisaTootaja/> } />
      <Route path="*" element={<NotFound /> } />
     </Routes>
    
    </div>
  );
}

export default App;
