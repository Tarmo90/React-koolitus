//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
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
import YksTootja from './Pages/YksTootja';
import YksEsindus from './Pages/YksEsindus';
import YksHind from './Pages/YksHind';
import YksToode from './Pages/YksToode';
import MuudaTootaja from './Pages/MuudaTootaja';
import MuudaEsindus from './Pages/MuudaEsindus';
import MuudaHind from './Pages/MuudaHind';
import MuudaToode from './Pages/MuudaToode';
import Menyy from './components/Menyy';

function App() {
  return (
    <div className="App">

      <Menyy/>

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

      <Route path="tootaja/:index" element={<YksTootja/> } />
      <Route path="esindus/:index" element={<YksEsindus/> } />
      <Route path="hind/:index" element={<YksHind/> } />
      <Route path="toode/:index" element={<YksToode/> } />

      <Route path="muuda-tootaja/:indeks" element={<MuudaTootaja/> } />
      <Route path="muuda-esindus/:indeks" element={<MuudaEsindus/> } />
      <Route path="muuda-hind/:indeks" element={<MuudaHind/> } />
      <Route path="muuda-toode/:indeks" element={<MuudaToode/> } />

      <Route path="*" element={<NotFound /> } />
     </Routes>
    
    </div>
  );
}

export default App;
