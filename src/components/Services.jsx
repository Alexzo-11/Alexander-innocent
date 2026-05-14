import React from 'react';
import { FaLaptopCode, FaPalette, FaChartLine, FaPrint } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Web Design',
      desc: 'Custom websites that are fast, secure, and beautifully designed.',
    },
    {
      icon: <FaPalette />,
      title: 'Graphic Design',
      desc: 'Logos, brochures, social media graphics – we create it all.',
    },
    {
      icon: <FaChartLine />,
      title: 'Branding',
      desc: 'Develop a cohesive brand strategy that resonates with your audience.',
    },
    {
      icon: <FaPrint />,
      title: 'Printing',
      desc: 'Business cards, flyers, banners – premium quality prints.',
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">What we can do for you</p>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services {
          padding: 5rem 0;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .service-card {
          background: var(--white);
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          border: 1px solid #eee;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-red);
        }
        .service-icon {
          font-size: 3rem;
          color: var(--primary-red);
          margin-bottom: 1rem;
        }
        .service-card h3 {
          margin-bottom: 0.5rem;
        }
        .service-card p {
          color: var(--gray-dark);
        }
      `}</style>
    </section>
  );
};

export default Services;