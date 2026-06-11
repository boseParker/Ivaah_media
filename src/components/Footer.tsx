import React from 'react';

interface FooterProps {
  setActivePage: (page: string) => void;
  setScrollTarget: (target: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, setScrollTarget }) => {
  const handlePageSelect = (page: string, target?: string) => {
    setActivePage(page);
    if (target) {
      setTimeout(() => {
        setScrollTarget(target);
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="ivah-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/logo.png" alt="Ivah Media" className="footer-logo" />
          <p className="footer-tagline">"All great marketing begins with a plan!"</p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <button onClick={() => handlePageSelect('home')}>Home</button>
            <button onClick={() => handlePageSelect('about', 'who-we-are')}>About Us</button>
            <button onClick={() => handlePageSelect('services')}>Services</button>
            <button onClick={() => handlePageSelect('contact')}>Contact</button>
          </div>

          <div className="footer-column">
            <h4>Our Services</h4>
            <button onClick={() => handlePageSelect('services', 'outdoor-marketing')}>Outdoor Marketing</button>
            <button onClick={() => handlePageSelect('services', 'design-consulting')}>Design & Consulting</button>
            <button onClick={() => handlePageSelect('services', 'digital-marketing')}>Digital Marketing</button>
            <button onClick={() => handlePageSelect('services', 'other-services')}>Other Services</button>
          </div>

          <div className="footer-column">
            <h4>Contact Info</h4>
            <p><strong>Address:</strong> Downtown Dubai, UAE</p>
            <p><strong>Phone:</strong> +971 4 123 4567</p>
            <p><strong>Email:</strong> hello@ivahmedia.ae</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ivah Media. All rights reserved.</p>
      </div>
    </footer>
  );
};
