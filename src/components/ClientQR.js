import React, { useRef } from 'react';
import QRCode from 'react-qr-code';
import '../main.css'; // Ensure main.css is imported

const ClientQR = ({ clientId, clientPhone }) => {
  const qrRef = useRef(null);

  const handleWhatsAppShare = async () => {
    try {
      const svg = qrRef.current.querySelector('svg');
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = async () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        const blob = await fetch(dataUrl).then(res => res.blob());
        const file = new File([blob], 'qrcode.png', { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: 'Client QR Code',
            text: `Show this QR code to log your visit to Barber Show: ${clientId}`,
          });
        } else {
          console.error('Sharing not supported');
        }
      };
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    } catch (error) {
      console.error('Error generating QR code image:', error);
    }
  };

  return (
    <div className="client-qr" ref={qrRef}>
      <QRCode value={`https://barbershow.netlify.app/clients/${clientId}`} size={512} />
      <button className="whatsapp" onClick={handleWhatsAppShare}>
        Send QR
      </button>
    </div>
  );
};

export default ClientQR;
