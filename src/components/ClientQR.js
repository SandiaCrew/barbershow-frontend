import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { toPng } from 'html-to-image';
import '../main.css'; // Ensure main.css is imported

const ClientQR = ({ clientId, clientPhone }) => {
  const qrRef = useRef(null);

  const handleWhatsAppShare = async () => {
    try {
      const dataUrl = await toPng(qrRef.current);
      const whatsappUrl = `https://wa.me/${clientPhone}?text=Scan this QR code to view client details: ${dataUrl}`;
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      console.error('Error generating QR code image:', error);
    }
  };

  return (
    <div className="client-qr">
      <div ref={qrRef}>
        <QRCodeCanvas value={clientId} size={256} />
      </div>
      <button className="whatsapp" onClick={handleWhatsAppShare}>
        Send QR via WhatsApp
      </button>
    </div>
  );
};

export default ClientQR;
