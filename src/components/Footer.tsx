import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handlePageSelect = (page: string, target?: string) => {
    const path = page === 'home' ? '/' : `/${page}`;
    if (target) {
      navigate(`${path}#${target}`);
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed successfully with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="pecunia-style-footer">
      {/* Internal CSS - High Contrast Theme */}
      <style>{`
        .pecunia-style-footer {
          background-color: #0b0c10; /* Deep Obsidian Black */
          color: #f5f5f7; /* Off-white crisp text */
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          padding: 80px 40px 40px 40px;
        }

        .footer-inner-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Newsletter Banner Block */
        .newsletter-banner {
          background-color: #ff6600; /* Vibrant Alert Orange */
          border-radius: 24px;
          padding: 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
          margin-bottom: 60px;
          color: #ffffff;
          box-shadow: 0 10px 30px rgba(255, 102, 0, 0.15);
        }

        .newsletter-left {
          max-width: 50%;
        }

        .newsletter-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin: 0 0 12px 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .newsletter-desc {
          font-size: 0.95rem;
          color: #fff0e6;
          line-height: 1.5;
          margin: 0;
        }

        .newsletter-right {
          flex-grow: 1;
          max-width: 400px;
        }

        .input-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .newsletter-form {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }

        .newsletter-input {
          flex-grow: 1;
          background-color: #ffffff; /* Stark white input fields */
          border: 2px solid transparent;
          border-radius: 50px;
          padding: 14px 24px;
          font-size: 0.9rem;
          color: #0b0c10;
          outline: none;
          transition: border-color 0.2s;
        }

        .newsletter-input:focus {
          border-color: #222222;
        }

        .newsletter-input::placeholder {
          color: #888888;
        }

        .newsletter-btn {
          background-color: #0b0c10; /* Pure black contrast button */
          color: #ffffff;
          border: none;
          border-radius: 50px;
          padding: 14px 28px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.1s;
          white-space: nowrap;
        }

        .newsletter-btn:hover {
          background-color: #1f212a;
          transform: scale(1.02);
        }

        .terms-text {
          font-size: 0.75rem;
          color: #fff0e6;
          margin: 0;
        }

        .terms-text a {
          color: #ffffff;
          text-decoration: underline;
        }

        /* Bottom Links Grid Architecture */
        .footer-main-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
          padding-bottom: 60px;
        }

        .brand-block {
          max-width: 300px;
        }

        .footer-logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .footer-logo {
          height: 36px;
          width: auto;
          filter: brightness(0) invert(1); /* Forces logo layout icon context to render white */
        }

        .brand-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .footer-tagline {
          font-size: 0.95rem;
          color: #a0a5b5;
          line-height: 1.4;
          margin: 0 0 24px 0;
        }

        /* Modern Vector Social Icons Row */
        .social-media-row {
          display: flex;
          gap: 12px;
        }

        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #1f212a;
          color: #ffffff;
          text-decoration: none;
          transition: background-color 0.2s, transform 0.2s;
        }

        .social-icon-btn:hover {
          background-color: #ff6600; /* Pops Orange on Hover */
          color: #ffffff;
          transform: translateY(-3px);
        }

        .links-columns-group {
          display: flex;
          gap: 80px;
        }

        .links-column {
          display: flex;
          flex-direction: column;
        }

        .column-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0 0 20px 0;
        }

        .links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .links-list button, 
        .contact-item-value {
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          text-align: left;
          color: #a0a5b5;
          font-size: 0.95rem;
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s, transform 0.2s;
        }

        .links-list button:hover, 
        .contact-item-value:hover {
          color: #ff6600; /* Interactive link states turn Orange */
        }

        .contact-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #525866;
          font-weight: 600;
          margin-top: 4px;
          letter-spacing: 0.03em;
        }

        .copyright-section {
          border-top: 1px solid #1f212a;
          padding-top: 24px;
          font-size: 0.85rem;
          color: #525866;
          text-align: center;
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .newsletter-banner {
            flex-direction: column;
            align-items: stretch;
            padding: 36px;
          }
          .newsletter-left {
            max-width: 100%;
          }
          .footer-main-content {
            flex-direction: column;
            gap: 48px;
          }
          .links-columns-group {
            width: 100%;
            justify-content: space-between;
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .links-columns-group {
            flex-direction: column;
            gap: 36px;
          }
          .newsletter-form {
            flex-direction: column;
          }
          .newsletter-input, .newsletter-btn {
            border-radius: 50px;
          }
        }
      `}</style>

      <div className="footer-inner-container">
        
        {/* Top Newsletter Placement Box styled from image_438064.png */}
        <div className="newsletter-banner">
          <div className="newsletter-left">
            <h3 className="newsletter-title">Subscribe to our newsletter</h3>
            <p className="newsletter-desc">
              Join our newsletter to get exclusive marketing insights, timely design trends, and expert plans to accelerate your media reach.
            </p>
          </div>
          <div className="newsletter-right">
            <span className="input-label">Stay Informed</span>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                required 
                placeholder="Enter your email" 
                className="newsletter-input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
            <p className="terms-text">
              By subscribing you agree to our <a href="#privacy">Privacy Policy</a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-main-content">
          
          {/* Brand Presentation */}
          <div className="brand-block">
            <div className="footer-logo-container">
              <img src="/logo.png" alt="Ivah Media Logo" className="footer-logo" />
              <span className="brand-name">Ivah Media</span>
            </div>
            <p className="footer-tagline">"All great marketing begins with a plan!"</p>
            
            {/* Social Icons Container with custom SVG vectors */}
            <div className="social-media-row">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                aria-label="Instagram"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/+97141234567" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-3.559c1.6.951 3.43 1.453 5.314 1.454 5.514 0 10.003-4.491 10.006-10.01.001-2.673-1.04-5.186-2.932-7.079-1.892-1.893-4.407-2.934-7.08-2.935-5.516 0-10.007 4.491-10.01 10.01-.001 1.884.501 3.719 1.456 5.323L1.45 22.518l4.197-1.077zm12.333-7.01c-.328-.165-1.947-.961-2.247-1.071-.299-.11-.518-.165-.736.165-.218.33-.846 1.071-1.037 1.291-.191.22-.383.247-.711.082-.328-.165-1.385-.511-2.639-1.63-1.01-.902-1.636-2.106-1.833-2.436-.197-.33-.021-.508.143-.672.148-.147.328-.385.492-.578.164-.193.218-.33.328-.55.11-.22.055-.413-.028-.578-.082-.165-.736-1.774-1.009-2.434-.267-.641-.539-.553-.736-.563-.19-.01-.409-.01-.628-.01s-.573.082-.873.413c-.299.33-1.146 1.121-1.146 2.735 0 1.614 1.174 3.172 1.338 3.393.164.22 2.313 3.532 5.6 4.951.782.338 1.392.54 1.867.691.786.25 1.5.215 2.066.13.63-.095 1.947-.797 2.22-1.529.273-.733.273-1.36.191-1.492-.082-.132-.299-.214-.627-.379z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Clean Ordered Columns Architecture */}
          <div className="links-columns-group">
            
            <div className="links-column">
              <h4 className="column-title">Corporate</h4>
              <ul className="links-list">
                <li><button onClick={() => handlePageSelect('who-we-are')}>Who We Are</button></li>
                <li><button onClick={() => handlePageSelect('how-we-do-it')}>How We Do It</button></li>
                <li><button onClick={() => handlePageSelect('why-us')}>Why Us</button></li>
                <li><button onClick={() => handlePageSelect('industry-services')}>Industry Services</button></li>
                <li><button onClick={() => handlePageSelect('careers')}>Careers</button></li>
              </ul>
            </div>

            <div className="links-column">
              <h4 className="column-title">Our Services</h4>
              <ul className="links-list">
                <li><button onClick={() => handlePageSelect('services', 'outdoor-marketing')}>Outdoor Marketing</button></li>
                <li><button onClick={() => handlePageSelect('services', 'design-consulting')}>Design & Consulting</button></li>
                <li><button onClick={() => handlePageSelect('services', 'digital-marketing')}>Digital Marketing</button></li>
                <li><button onClick={() => handlePageSelect('services', 'other-services')}>Other Services</button></li>
              </ul>
            </div>

            <div className="links-column">
              <h4 className="column-title">Contact</h4>
              <ul className="links-list">
                <li>
                  <span className="contact-item-value">Downtown Dubai, UAE</span>
                  <span className="contact-label">Address</span>
                </li>
                <li>
                  <a href="tel:+97141234567" className="contact-item-value">+971 4 123 4567</a>
                  <span className="contact-label">Phone</span>
                </li>
                <li>
                  <a href="mailto:hello@ivahmedia.ae" className="contact-item-value">hello@ivahmedia.ae</a>
                  <span className="contact-label">Email</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-section">
          <p>&copy; {new Date().getFullYear()} Ivah Media. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};