import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const phoneNumber = '2348106509069'; // Replace with your actual number
  const message = 'Hi Alexzo Graphics, I am interested in your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;
