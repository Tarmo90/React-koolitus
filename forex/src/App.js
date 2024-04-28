import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Starfield from 'react-starfield';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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

function App() {
  
  return (
    <div >
      <NavigationBar />
      <Starfield clas
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
        <Route path="/strategies" element={<Strategies />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/standard_order" element={<StandardOrder />} />
        <Route path="/premium_order" element={<PremiumOrder />} />

        <Route path="/cart/:price" element={<Cart />} />
        <Route path="/single_strategy/:id" element={<SingleStrategy />} />

      </Routes>
    </div>
  );
}

export default App;
