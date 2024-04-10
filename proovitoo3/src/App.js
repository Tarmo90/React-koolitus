import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Article from './pages/Article';
import  List  from './pages/List';
import NavigationBar from './components/NavigationBar';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <div>
      <NavigationBar/>
    

      <Routes>
        <Route path="" element={<Homepage />}/>
        <Route path="article" element={<Article />}/>
        <Route path="list" element={<List />}/>
        <Route path="details/:index" element={<UserDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
