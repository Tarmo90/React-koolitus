import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from './pages/global/Chart';
import Courses from './pages/global/Courses';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Local from './pages/global/Local';
import HomePage from './pages/global/HomePage';
import NavigationBar from './components/NavigationBar';
import StandardOrder from './components/StandardOrder';
import PremiumOrder from './components/PremiumOrder';
import Cart from './pages/global/singleProducts/Cart';
import Strategies from './pages/global/Strategies';
import SingleStrategy from './pages/global/singleProducts/SingleStrategy';
import SingleCourse from './pages/global/singleProducts/SingleCourse';
import Starfield from 'react-starfield';
import News from './pages/News';
import Test from './pages/Test';
import { ContactUs } from './pages/global/ContactUs';

function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <Starfield
        starCount={4000}
        starColor={[242, 12, 181]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      
        <Routes>
          <Route path="/" element={<Local />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/standard_order" element={<StandardOrder />} />
          <Route path="/premium_order" element={<PremiumOrder />} />
          <Route path="/news" element={<News />} />
          <Route path="/test" element={<Test />} />
          <Route path="/contactUs" element={<ContactUs />} />

          <Route path="/cart/:price" element={<Cart />} />
          <Route path="/single_strategy/:id" element={<SingleStrategy />} />
          <Route path="/single_course/:id" element={<SingleCourse />} />

        </Routes>
    </div>
  );
}

export default App;
