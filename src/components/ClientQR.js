import React from 'react';
import { QRCode } from 'qrcode.react';
import '../main.css'; // Ensure main.css is imported

const ClientQR = ({ clientId }) => {
  const qrValue = `https://yourapp.com/client/${clientId}`;

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(qrValue)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="client-qr">
      <QRCode value={qrValue} size={256} />
      <button className="whatsapp" onClick={handleWhatsAppShare}>
        Send QR via WhatsApp
      </button>
    </div>
  );
};

export default ClientQR;
