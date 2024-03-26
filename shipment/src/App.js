import './App.css';
import { Routes, Route } from 'react-router-dom';
import YksDetail from './pages/YksDetail';
import HomePage from './pages/HomePage';

function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/yks-detail/:index' element={<YksDetail />} />
      </Routes>
    </div>
  );
}

export default App; // Export the enhanced component
