import React, { useState } from 'react';
import CustomQRReader from './CustomQRReader';
import axios from '../axios';
import '../main.css'; // Ensure main.css is imported

const QRScanner = () => {
  const [scannedData, setScannedData] = useState('');

  const handleScan = async (data) => {
    if (data) {
      setScannedData(data.text);
      try {
        await axios.post('/visits', { clientId: data.text, date: new Date().toISOString().split('T')[0] });
        alert('Visit logged successfully');
      } catch (error) {
        console.error('Error logging visit:', error);
      }
    }
  };

  const handleError = (error) => {
    console.error('QR Scanner Error:', error);
  };

  return (
    <div className="qr-code-scanner">
      <CustomQRReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ height: 240, width: 320 }}
        constraints={{ video: { facingMode: 'environment' } }} // Ensure video is requested and back camera is used
      />
      <p>{scannedData ? `Scanned data: ${scannedData}` : 'Scan a QR code to log a visit'}</p>
    </div>
  );
};

export default QRScanner;
