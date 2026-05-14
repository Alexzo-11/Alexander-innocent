import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Alexzo Graphics</h1>
        <p className="hero-subtitle">Web Design | Graphic Design | Branding | Printing</p>
        <div className="hero-buttons">
          <a href="#portfolio" className="btn btn-primary">View Portfolio</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          height: 100vh;
          background: url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80') no-repeat center center/cover;
          position: relative;
          display: flex;
          align-items: center;
          color: var(--white);
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--gradient-black-maroon);
          opacity: 0.8;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          animation: fadeInUp 1s ease;
        }
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        }
        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          letter-spacing: 2px;
        }
        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.2rem;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;