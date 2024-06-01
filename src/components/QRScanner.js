import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomQRReader from './CustomQRReader';
import axios from '../axios';
import '../main.css'; // Ensure main.css is imported

const QRScanner = () => {
  const [scannedData, setScannedData] = useState('');
  const navigate = useNavigate();

  const handleScan = async (data) => {
    if (data) {
      setScannedData(data);
      try {
        await axios.post(`/visits/${data}/log-visit`);
        navigate(`/clients/${data}`);
      } catch (error) {
        console.error('Error logging visit:', error);
      }
    }
  };

  const handleError = (error) => {
    console.error('QR Scanner Error:', error);
  };

  const simulateScan = async () => {
    const simulatedData = '665b49b8c8b6a822ec3299b1'; // Replace with a valid client ID from your app
    await handleScan(simulatedData);
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
      <button onClick={simulateScan}>Simulate QR Scan</button>
      <p>{scannedData ? `Scanned data: ${scannedData}` : 'Scan a QR code to log a visit'}</p>
    </div>
  );
};

export default QRScanner;
