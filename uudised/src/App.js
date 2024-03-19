// import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import YksUudis from './pages/YksUudis'
import Muuda from './pages/MuudaUudiseid'



function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
        </Link>
        <Link to="/uudised">
        <button>Uudiste lehele</button>
        </Link>
        <Link to="/kontakt">
        <button>Vota meiega uhendust</button>
        </Link>
        <Link to="/meist">
        <button>Info meist</button>
      </Link>
      <Link to="/lisaUudis">
        <button>Lisa uudis</button>
      </Link>
      <Link to="/halda">
        <button>Halda uudiseid</button>
      </Link>
      
      <Routes>
        <Route path='' element={ <Avaleht />} />
        <Route path='uudised' element={ <Uudised />} />
        <Route path='kontakt' element={ <Kontakt />} />
        <Route path='meist' element={ <Meist />} />
        <Route path='lisaUudis' element={ <LisaUudis />} />
        <Route path='halda' element={ <HaldaUudiseid />} />
        <Route path='uudis/:index' element={ <YksUudis />} />
        <Route path='muuda/:index' element={ <Muuda />} />


      </Routes>
   
    </div>
  );
}

export default App;
