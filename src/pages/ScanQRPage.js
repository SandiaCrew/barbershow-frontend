// src/pages/ScanQRPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import QRScanner from '../components/QRScanner';

const ScanQRPage = () => (
  <div className="main">
    <div className="container container--page">
      <Navbar />
      <div className="container container-body">
        <h1 className="page-title">Scan QR code</h1>
        <QRScanner />
      </div>
    </div>
  </div>
);

export default ScanQRPage;
