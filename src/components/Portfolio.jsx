// import React, { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';

// const Portfolio = () => {
//   const [filter, setFilter] = useState('All');
//   const [selectedImage, setSelectedImage] = useState(null);

//   const categories = ['All', 'Branding', 'Printing', 'Flyers', 'Web'];

//   const projects = [
//     {
//       id: 1,
//       title: 'Business Card Set',
//       category: 'Printing',
//       image: 'https://images.unsplash.com/photo-1603791445824-0050bd436b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     },
//     {
//       id: 2,
//       title: 'Logo Design - Coffee Shop',
//       category: 'Branding',
//       image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     },
//     {
//       id: 3,
//       title: 'Event Flyer',
//       category: 'Flyers',
//       image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     },
//     {
//       id: 4,
//       title: 'Brand Identity Pack',
//       category: 'Branding',
//       image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     },
//     {
//       id: 5,
//       title: 'Poster Design',
//       category: 'Printing',
//       image: 'https://images.unsplash.com/photo-1605721912198-700c6c8c7b0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     },
//     {
//       id: 6,
//       title: 'Website Homepage',
//       category: 'Web',
//       image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     },
//     {
//       id: 7,
//       title: 'Branded T-Shirt',
//       category: 'Printing',
//       image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     },
//     {
//       id: 8,
//       title: 'Banner Design',
//       category: 'Printing',
//       image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     },
//      {
//       id: 9,
//       title: 'Banner Design',
//       category: 'Printing',
//       image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     },
//      {
//       id: 10,
//       title: 'Banner Design',
//       category: 'Printing',
//       image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     },
//      {
//       id: 11,
//       title: 'Banner Design',
//       category: 'Printing',
//       image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     },
//      {
//       id: 12,
//       title: 'Banner Design',
//       category: 'Printing',
//       image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     },
//   ];

//   const filteredProjects =
//     filter === 'All' ? projects : projects.filter((p) => p.category === filter);

//   const openLightbox = (image) => setSelectedImage(image);
//   const closeLightbox = () => setSelectedImage(null);

//   return (
//     <section id="portfolio" className="portfolio">
//       <div className="container">
//         <h2 className="section-title">Portfolio</h2>
//         <p className="section-subtitle">Some of our recent work</p>

//         <div className="filter-buttons">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className={`filter-btn ${filter === cat ? 'active' : ''}`}
//               onClick={() => setFilter(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div className="portfolio-grid">
//           {filteredProjects.map((project) => (
//             <div
//               key={project.id}
//               className="portfolio-item"
//               onClick={() => openLightbox(project.image)}
//             >
//               <img src={project.image} alt={project.title} />
//               <div className="overlay">
//                 <h3>{project.title}</h3>
//                 <p>{project.category}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div className="lightbox" onClick={closeLightbox}>
//           <span className="close"><FaTimes /></span>
//           <img src={selectedImage} alt="Enlarged view" />
//         </div>
//       )}

//       <style jsx>{`
//         .portfolio {
//           padding: 5rem 0;
//           background: var(--gray-light);
//         }
//         .filter-buttons {
//           display: flex;
//           justify-content: center;
//           gap: 1rem;
//           flex-wrap: wrap;
//           margin-bottom: 3rem;
//         }
//         .filter-btn {
//           padding: 8px 20px;
//           border: 2px solid var(--primary-red);
//           background: transparent;
//           color: var(--primary-red);
//           border-radius: 50px;
//           cursor: pointer;
//           font-weight: 600;
//           transition: var(--transition);
//         }
//         .filter-btn:hover,
//         .filter-btn.active {
//           background: var(--gradient-red-maroon);
//           color: var(--white);
//           border-color: transparent;
//         }
//         .portfolio-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//           gap: 1.5rem;
//         }
//         .portfolio-item {
//           position: relative;
//           border-radius: 15px;
//           overflow: hidden;
//           cursor: pointer;
//           box-shadow: var(--shadow-sm);
//           aspect-ratio: 1 / 1;
//         }
//         .portfolio-item img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: var(--transition);
//         }
//         .portfolio-item:hover img {
//           transform: scale(1.1);
//         }
//         .overlay {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
//           color: var(--white);
//           padding: 1.5rem 1rem 1rem;
//           transform: translateY(100%);
//           transition: var(--transition);
//         }
//         .portfolio-item:hover .overlay {
//           transform: translateY(0);
//         }
//         .lightbox {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0,0,0,0.9);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 2000;
//           cursor: pointer;
//         }
//         .lightbox img {
//           max-width: 90%;
//           max-height: 90%;
//           border-radius: 10px;
//         }
//         .close {
//           position: absolute;
//           top: 20px;
//           right: 30px;
//           color: var(--white);
//           font-size: 3rem;
//           cursor: pointer;
//         }
//         @media (max-width: 768px) {
//           .portfolio-grid {
//             grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Portfolio;

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';



// Import your images
import businessCard from '../assets/images/business-card.jpg';
import logoDesign from '../assets/images/logo-design.jpg';
import eventFlyer from '../assets/images/event-flyer.jpg';
import brandIdentity from '../assets/images/brand-identity.jpg';
import Cozyflyer from '../assets/images/Cozyflyer.jpg';
import websiteHome from '../assets/images/website-home.jpg';
import brandedShirt from '../assets/images/branded-shirt.jpg';
import bannerDesign from '../assets/images/banner-design.jpg';
import Churchflyer from '../assets/images/Church-flyer.jpg';
import productflyer from '../assets/images/product-flyer.jpg';
import graduationdesign from '../assets/images/graduation design.jpg';
import flexbanner from '../assets/images/flex banner.jpg';
import schoolbanner from '../assets/images/school banner.jpg';
import webpage from '../assets/images/webpage.jpg';
import Brainwaveconference from '../assets/images/Brainwave conference.jpg';
import weddigncard from '../assets/images/weddigncard.jpg';
import Branded from '../assets/images/Branded.jpg';
import Marydesign from '../assets/images/Mary design.jpg';
import RestaurantLogoBranding from '../assets/images/Restaurant Logo Branding.jpg';
import Mugbranding from '../assets/images/Mugbranding.jpg';
import Pictureframe from '../assets/images/Picture frame.jpg';



const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Branding', 'Printing', 'Flyers', 'Web'];

  const projects = [
    {
      id: 1,
      title: 'Business Card',
      category: 'Printing',
      image: businessCard,
    },
    {
      id: 2,
      title: 'Logo Design',
      category: 'Branding',
      image: logoDesign,
    },
    {
      id: 3,
      title: 'Event Flyer',
      category: 'Flyers',
      image: eventFlyer,
    },
    {
      id: 4,
      title: 'Product Flyer',
      category: 'Flyers',
      image: productflyer,
    },
    {
      id: 5,
      title: 'Church Flyer',
      category: 'Flyers',
      image: Churchflyer,
    },
    {
      id: 6,
      title: 'Website Home',
      category: 'Web',
      image: websiteHome,
    },
    {
      id: 7,
      title: 'Branded Tshirts',
      category: 'Branding',
      image: brandedShirt,
    },
    {
      id: 8,
      title: 'Flex Banner',
      category: 'Printing',
      image: bannerDesign,
    },
    {
      id: 9,
      title: 'Tutorial Flyer',
      category: 'Flyer',
      image: Cozyflyer,
    },
    {
      id: 10,
      title: 'Brand Package',
      category: 'Branding',
      image: brandIdentity,
    },
    {
      id: 11,
      title: 'Induction Flyer',
      category: 'Flyer',
      image: graduationdesign,
    },
    {
      id: 12,
      title: 'Admission Flyer',
      category: 'Flyer',
      image: schoolbanner,
    },
     {
      id: 13,
      title: 'Banner Prinitng',
      category: 'Printing',
      image: flexbanner,
    }, 
    {
      id: 14,
      title: 'Website Home page',
      category: 'Web',
      image: webpage,
    },
    {
      id: 15,
      title: 'Conference Banner ',
      category: 'Printing',
      image: Brainwaveconference,
    },
    {
      id: 16,
      title: 'Wedding Card',
      category: 'Printing',
      image: weddigncard,
    },
    {
      id: 17,
      title: 'ID Card Design',
      category: 'Printing',
      image: Branded,
    },
    {
      id: 18,
      title: 'Business Flyer ',
      category: 'Flyer',
      image: Marydesign,
    },
    {
      id: 19,
      title: 'Banner Design ',
      category: 'Printing',
      image: RestaurantLogoBranding,
    },
    {
      id: 20,
      title: 'Mug Design',
      category: 'Branding',
      image: Mugbranding,
    },
    {
      id: 21,
      title: 'Photo Printing & Framing ',
      category: 'Printing',
      image: Pictureframe,
    },
  ];

  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">Some of our recent work</p>

        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-item"
              onClick={() => openLightbox(project.image)}
            >
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close"><FaTimes /></span>
          <img src={selectedImage} alt="Enlarged view" />
        </div>
      )}

      <style jsx>{`
        /* (keep the same CSS as before) */
      `}</style>
    </section>
  );
};

export default Portfolio;