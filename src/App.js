// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ScanQRPage from './pages/ScanQRPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
          {/* Placeholder for other routes */}
=======
          <Route path="/scan-qr" element={<ScanQRPage />} />
>>>>>>> 798d8e2 (Integrate ScanQRPage into App component)
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
