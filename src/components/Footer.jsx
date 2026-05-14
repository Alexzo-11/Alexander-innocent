import React from 'react';
import { FaInstagram, FaYoutube, FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Alexzo Graphics</h3>
            <p>Creating stunning designs that tell your story.</p>
          </div>

          <div className="footer-social">
            <a href="https://www.instagram.com/alexzo_graphics/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="http://www.youtube.com/@alexzographics4381" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="mailto:info@alexanderinnocentalexis9@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/08106509069?text=Hi%20Alexzo%20Graphics,%20I'm%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/Alexzo-11" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alexzo Graphics. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--black);
          color: var(--white);
          padding: 3rem 0 1.5rem;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-brand h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          background: var(--gradient-red-maroon);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .footer-brand p {
          color: #aaa;
        }
        .footer-social {
          display: flex;
          gap: 1.5rem;
        }
        .footer-social a {
          color: var(--white);
          font-size: 1.8rem;
          transition: var(--transition);
        }
        .footer-social a:hover {
          color: var(--primary-red);
          transform: translateY(-3px);
        }
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #333;
          color: #aaa;
        }
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
