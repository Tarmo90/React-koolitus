import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Gamepage from './pages/Gamepage'; 

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='game/:index' element={<Gamepage />} />  
      </Routes>
    </div>
  );
}

export default App;
