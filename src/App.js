import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/Mainpage/Main';
import PetServices from './components/Pet-Services/Services';
import PetEssentials from './components/Pet-Essential/Essentials';
import PetHealth from './components/Pet-Health/Health';
import AboutUs from './components/About-Us/About';
import Join from './components/Join/Join';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path="/Pet-Services" element={<PetServices />} />
        <Route path="/pet-essentials" element={<PetEssentials />} />
        <Route path="/pet-health" element={<PetHealth />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
