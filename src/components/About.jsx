import React from 'react';
import { FaLaptopCode, FaPalette, FaChartLine, FaPrint } from 'react-icons/fa';

const About = () => {
  const features = [
    { icon: <FaLaptopCode />, title: 'Web Design', desc: 'Modern, responsive websites that captivate.' },
    { icon: <FaPalette />, title: 'Graphic Design', desc: 'Eye-catching visuals for print and digital.' },
    { icon: <FaChartLine />, title: 'Branding', desc: 'Build a strong, memorable brand identity.' },
    { icon: <FaPrint />, title: 'Printing', desc: 'High-quality prints for all your needs.' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Alexzo Graphics</h2>
        <p className="section-subtitle">We turn ideas into stunning visuals</p>
        <div className="about-grid">
          {features.map((item, idx) => (
            <div className="card" key={idx}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 5rem 0;
          background: var(--gray-light);
        }
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .icon {
          font-size: 3rem;
          color: var(--primary-red);
          margin-bottom: 1rem;
        }
        .card h3 {
          margin-bottom: 0.5rem;
          color: var(--black);
        }
        .card p {
          color: var(--gray-dark);
        }
      `}</style>
    </section>
  );
};

export default About;