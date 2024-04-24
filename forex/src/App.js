import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Starfield from 'react-starfield';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Chart from './pages/global/Chart';
import Hobbies from './pages/global/Hobbies';
import Courses from './pages/global/Courses';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Local from './pages/global/Local';
import HomePage from './pages/global/HomePage';
import BuyOrder from './pages/global/BuyOrder';


function App() {
  
  return (
    <div >
      <NavigationBar />
      <Starfield
        starCount={4000}
        starColor={[242, 12, 242]}
        speedFactor={0.03}
        backgroundColor="black"
      />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            {/* Sisu siin, mis kuvatakse täisekraanilaiusel kõigis seadmetes */}
          </Col>
          <Col xs={12} md={6}>
            {/* Sisu siin, mis kuvatakse täisekraanilaiusel ainult suurematel ekraanidel (MD ja üles) */}
          </Col>
        </Row>
      </Container>

      <Routes>
        <Route path="/" element={<Local />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/buy_order" element={<BuyOrder />} />
      </Routes>
    </div>
  );
}

export default App;
