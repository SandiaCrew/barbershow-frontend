import React from 'react';
import QrScanner from 'react-qr-scanner';

const CustomQRReader = ({ delay = 300, onError, onScan, style = { height: 240, width: 320 }, constraints = { video: { facingMode: 'environment' } } }) => {
  return (
    <QrScanner
      delay={delay}
      onError={onError}
      onScan={onScan}
      style={style}
      constraints={constraints}
    />
  );
};

export default CustomQRReader;
