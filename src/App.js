// src/App.js
import React from 'react';
import HomeNavbar from './components/HomeNavbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <HomeNavbar />
      <div className="content">
        {/* Main content will go here */}
      </div>
    </div>
  );
}

export default App;
