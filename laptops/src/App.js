import './App.css';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import LisaArvuti from './pages/LisaArvuti';
import VaataArvuteid from './pages/VaataArvuteid';
import Ostukorv from './pages/Ostukorv';
import Tooted from './pages/Tooted';
import { useEffect } from 'react';
import Net from 'vanta/dist/vanta.net.min';

function App() {
  useEffect(() => {
    // Initsialiseerime Vanta efekti
    const netEffect = Net({
      el: '#vanta', // Valime HTML elemendi, kuhu Vanta efekt rakendatakse
      mouseControls: true, // Lülitame sisse hiire kontrolli efekti üle
      touchControls: true, // Lülitame sisse puuteekraani kontrolli efekti üle
      gyroControls: false, // Lülitame välja gyroskoobi kontrolli efekti üle
      minHeight: 200, // Määrame minimaalse kõrguse efektile (soovi korral)
      minWidth: 200, // Määrame minimaalse laiuse efektile (soovi korral)
      scale: 1, // Määrame efekti skaala (soovi korral)
      scaleMobile: 1, // Määrame efekti skaala mobiilseadmetele (soovi korral)
      color: 0x8c8c8c, // Määrame efekti värvi (soovi korral)
      backgroundColor: 0x0, // Määrame efekti taustavärvi (soovi korral)
      points: 6.00, // Määrame efekti punktide arvu (soovi korral)
      maxDistance: 20.00, // Määrame maksimaalse kauguse efekti vahel (soovi korral)
      spacing: 22.00 // Määrame punktide vahekauguse (soovi korral)
    });

    // Kui komponent unmountitakse, lõpetame Vanta efekti
    return () => {
      if (netEffect) netEffect.destroy();
    };
  }, []); // useEffect käivitatakse ainult esmakordselt

  return (
    <BrowserRouter>
      <div>
        <div className="bg" id="vanta"></div>

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
        <Link to='/products'>
          <button>Tooted</button>
        </Link>

        <Routes>
          <Route path='/' element={<Avaleht />} />
          <Route path='/all' element={<VaataArvuteid />} />
          <Route path='/add' element={<LisaArvuti />} />
          <Route path='/cart' element={<Ostukorv />} />
          <Route path='/products' element={<Tooted />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
