import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* <a href="#home" className="logo">Alexzo Graphics</a> */}
        <a href="#home" className="logo">
  <img src={logo} alt="Alexzo Graphics" className="logo-img" />
  Alexzo Graphics
</a>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: transparent;
          padding: 1.5rem 0;
          z-index: 1000;
          transition: var(--transition);
        }
        .navbar.scrolled {
          background: var(--white);
          box-shadow: var(--shadow-sm);
          padding: 0.8rem 0;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: var(--gradient-red-maroon);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-list {
          display: flex;
          gap: 2rem;
        }
        .nav-list a {
          font-weight: 500;
          transition: var(--transition);
          position: relative;
        }
        .nav-list a:hover {
          color: var(--primary-red);
        }
        .nav-list a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--gradient-red-maroon);
          transition: var(--transition);
        }
        .nav-list a:hover::after {
          width: 100%;
        }
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.8rem;
          cursor: pointer;
          color: var(--black);
        }
        @media (max-width: 768px) {
          .nav-toggle {
            display: block;
          }
          .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: var(--white);
            flex-direction: column;
            transition: var(--transition);
            padding: 2rem;
          }
          .nav-menu.active {
            left: 0;
          }
          .nav-list {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }
          .navbar.scrolled .nav-menu {
            top: 60px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;