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

function App() {
  return (
    <div className="App">
      <Link to="avaleht">     
      <img className="pilt" src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt="" />
</Link>   
     

     <Link to="/esindused">
      <button className="nupp">Esindused</button>
     
     </Link>
     <Link to="/osta-kinkekaart">
      <button className="nupp">Osta kinkekaart</button>
     
     </Link>
     <Link to="/arikliendile">
      <button className="nupp">ärikliendile</button>
     </Link>

     <Link to='/lisa-toode'>
        <button className='nupp'>Lisa toode</button>
      </Link>

      <Link to='/ostukorv'>
        <button className='nupp'>Ostukorv</button>
      </Link>

      <Link to='/seaded'>
        <button className='nupp'>Seaded</button>
      </Link>

     <Routes>
    
      <Route path="avaleht" element={ <Avaleht /> } />
      <Route path="esindused" element={<Esindused /> } />
      <Route path="osta-kinkekaart" element={<Kinkekaart /> } />
      <Route path="arikliendile" element={<Arikliendile /> } />
      <Route path="lisa-toode" element={<LisaToode/> } />
      <Route path="ostukorv" element={<Ostukorv /> } />
      <Route path="seaded" element={<Seaded /> } />
      <Route path="*" element={<NotFound /> } />
     </Routes>
    
    </div>
  );
}

export default App;