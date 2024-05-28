// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ScanQRPage from './pages/ScanQRPage';
import SettingsPage from './pages/SettingsPage';
import ClientsPage from './pages/ClientsPage';
import NewClientPage from './pages/NewClientPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scan-qr" element={<ScanQRPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/clients/new-client" element={<NewClientPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
