// src/App.js
import React from 'react';
import HomeNavbar from './components/HomeNavbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HomeNavbar />
      <div className="content">
        {/* Main content will go here */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
