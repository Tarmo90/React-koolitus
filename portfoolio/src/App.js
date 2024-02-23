import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Avaleht />} />
                <Route path="/work" element={<Work />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/courses" element={<Courses />} />
            </Routes>
        </Router>
    );
}

export default App;