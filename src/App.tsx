import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Advantages from './components/Advantages';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UserAgreement from './pages/UserAgreement';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Services />
              <Process />
              <Advantages />
              <About />
              <Reviews />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/privacy-policy" element={
            <PrivacyPolicy />
          } />
          <Route path="/user-agreement" element={
            <UserAgreement />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;