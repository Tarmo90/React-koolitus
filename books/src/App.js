import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Books from './pages/Books';
import Numbrid from './pages/Numbrid';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/numbrid" element={<Numbrid />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Link to="/books">
        <button>Raamatud</button>
      </Link>
      <Link to="/numbrid">
        <button>Numbrid</button>
      </Link>
    </div>
  );
}

export default App;
