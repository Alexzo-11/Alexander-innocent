import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Loader from './components/Loader';
import GitHubProjects from './components/GitHubProjects';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or wait for images
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <GitHubProjects />
          <Contact />
          <Footer />
          <ScrollToTop />
          <FloatingWhatsApp />
        </>
      )}
    </>
  );
}

export default App;