import React from 'react';
import QrScanner from 'react-qr-scanner';
import { compose } from 'redux';

// Higher-Order Component to handle default props
const withDefaults = (defaultProps) => (Component) => (props) => {
  return <Component {...defaultProps} {...props} />;
};

const CustomQRReader = ({ delay, onError, onScan, style, constraints }) => {
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

const EnhancedCustomQRReader = compose(
  withDefaults({
    delay: 300,
    style: { height: 240, width: 320 },
    constraints: { video: { facingMode: 'environment' } },
  })
)(CustomQRReader);

export default EnhancedCustomQRReader;
