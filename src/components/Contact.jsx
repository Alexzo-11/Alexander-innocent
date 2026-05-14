import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const phoneNumber = '2348106509068';   // Replace with your WhatsApp number (with country code)
  const message = 'Hi Alexzo Graphics, I am interested in your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let’s Work Together</h2>
        <p className="section-subtitle">
          Got a project in mind? Reach out directly on WhatsApp or send an email.
        </p>

        <div className="contact-options">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card whatsapp"
          >
            <FaWhatsapp className="contact-icon" />
            <h3>Chat on WhatsApp</h3>
            <p>Fast, direct, and easy.</p>
            <span className="btn">Message Now →</span>
          </a>

          <a
            href="mailto:hello@alexanderinnocentalexis9@gmail.com"
            className="contact-card email"
          >
            <FaEnvelope className="contact-icon" />
            <h3>Send an Email</h3>
            <p>For more detailed inquiries.</p>
            <span className="btn">Email Me →</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: 5rem 0;
          background: var(--gray-light);
        }
        .contact-options {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 3rem;
        }
        .contact-card {
          background: var(--white);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          text-decoration: none;
          color: var(--black);
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
          flex: 1;
          min-width: 260px;
          max-width: 350px;
          border: 1px solid #eee;
        }
        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
        }
        .contact-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .whatsapp .contact-icon {
          color: #25d366;
        }
        .email .contact-icon {
          color: var(--primary-red);
        }
        .contact-card h3 {
          margin-bottom: 0.5rem;
        }
        .contact-card p {
          color: var(--gray-dark);
          margin-bottom: 1.5rem;
        }
        .btn {
          display: inline-block;
          padding: 8px 20px;
          background: var(--gradient-red-maroon);
          color: var(--white);
          border-radius: 50px;
          font-weight: 600;
          transition: var(--transition);
        }
        .contact-card:hover .btn {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .contact-options {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;