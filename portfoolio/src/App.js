import './App.css';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={ <div></div>} />
        <Route path='teenused' exact element={ <div> Teenused </div> } />
        <Route path='kontaktid' exact element={ <div> Kontaktid </div> } />
        <Route path='meist' exact element={ <div> Meist </div> } />
      </Routes>
    </div> 
   
  );
}

export default App;
