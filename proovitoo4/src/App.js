import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Gamepage from './pages/Gamepage'; 
import { GameHistoryProvider } from './components/GameHistoryContext';
import Scorepage from './pages/Scorepage';

function App() {
  return (
    <div>
      <GameHistoryProvider>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/game' element={<Gamepage />} />  
        <Route path="/score" element={<Scorepage />} />
      </Routes>
      </GameHistoryProvider>
    </div>
  );
}

export default App;
