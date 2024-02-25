import './App.css';
import { Route, Routes} from 'react-router-dom';
import Avaleht from './components/Avaleht';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';


function App() {
  return (
    <div>
      
      

      <Routes>
        <Route path='' element={<Avaleht />} />
        <Route path='/work' element={<Work />} />
        <Route path='/hobbies' element={<Hobbies />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
      
    </div>
  );
}

export default App;

