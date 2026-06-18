import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Home,
  Info,
  Briefcase,
  Building2,
  Users,
  Activity,
  Target,
  Layers,
  Map,
  Palette,
  Globe,
  HelpCircle,
  FileText,
  ShieldCheck,
  Mail,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  activePage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Track scroll position to alter styles and visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 40);

      if (currentY < 10) {
        setNavVisible(true);
      } else if (currentY > lastScrollY.current) {
        // Hide navbar on scroll down
        setNavVisible(false);
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      } else {
        // Show navbar on scroll up
        setNavVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking anywhere outside
  useEffect(() => {
    const handleOutsideClick = () => setActiveDropdown(null);
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  const handlePageSelect = (page: string, target?: string) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    const path = page === 'home' ? '/' : `/${page}`;
    
    if (target) {
      navigate(`${path}#${target}`);
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isNavbarTransparent = activePage === 'home' && !isScrolled;

  return (
    <>
      {/* Internal CSS Injector for Hover States & Responsive Queries */}
      <style>{`
        .ivah-navbar {
          position: fixed;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1200px;
          height: 72px;
          border-radius: 50px;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }

        .transparent-nav {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
        }

        .ivah-navbar.scrolled {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.07);
        }

        .nav-show { opacity: 1; top: 24px; }
        .nav-hide { opacity: 0; top: -90px; pointer-events: none; }

        .nav-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px 0 24px;
        }

        .nav-logo { cursor: pointer; display: flex; align-items: center; }
        .logo-img { height: 38px; object-fit: contain; }

        .nav-menu-desktop { display: flex; align-items: center; gap: 4px; }

        .nav-link {
          background: transparent;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          font-size: 14px;
          font-weight: 500;
          color: #334155;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .transparent-nav .nav-link { color: #ffffff; }

        .nav-link:hover, .nav-link.active { background: rgba(0, 0, 0, 0.04); color: #0f172a; }
        .transparent-nav .nav-link:hover, .transparent-nav .nav-link.active { background: rgba(255, 255, 255, 0.2); color: #ffffff; }

        .nav-dropdown-wrapper { position: relative; }

        .nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          min-width: 230px;
          border-radius: 24px;
          padding: 8px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nav-dropdown-menu button {
          background: transparent;
          border: none;
          text-align: left;
          padding: 10px 14px;
          font-size: 14px;
          font-weight: 500;
          color: #475569;
          border-radius: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.2s ease;
        }

        .nav-dropdown-menu button:hover { background: #f1f5f9; color: #0f172a; padding-left: 18px; }

        .nav-cta-btn {
          background: #0f172a;
          color: #ffffff;
          border: none;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 30px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          margin-left: 8px;
          transition: all 0.2s ease;
        }

        .transparent-nav .nav-cta-btn { background: #ffffff; color: #0f172a; }
        .nav-cta-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(0,0,0,0.1); }

        .nav-mobile-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 22px;
          height: 16px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          margin-right: 12px;
        }

        .hamburger-bar { width: 100%; height: 2px; background-color: #0f172a; border-radius: 2px; transition: all 0.3s ease; }
        .transparent-nav .hamburger-bar { background-color: #ffffff; }

        .hamburger-bar.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger-bar.open:nth-child(2) { opacity: 0; }
        .hamburger-bar.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .nav-menu-mobile {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(20px);
          border-radius: 32px;
          padding: 24px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          gap: 16px;
          opacity: 0;
          transform: translateY(-10px) scale(0.96);
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }

        .nav-menu-mobile.open { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
        
        .mobile-nav-link {
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          padding: 8px 0;
          text-align: left;
          cursor: pointer;
        }

        .mobile-dropdown-section { display: flex; flex-direction: column; gap: 8px; }
        .mobile-section-title { font-size: 13px; font-weight: 700; color: #94a3b8; text-transform: uppercase; tracking-letter: 0.05em; display: flex; align-items: center; gap: 6px; margin-top: 4px; }
        .mobile-sub-menu { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; padding-left: 4px; }
        
        .mobile-sub-menu button {
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          text-align: left;
          padding: 10px 12px;
          font-size: 13px;
          font-weight: 500;
          color: #475569;
          border-radius: 14px;
          cursor: pointer;
        }

        .mobile-cta-btn {
          background: #0f172a;
          color: white;
          border: none;
          border-radius: 24px;
          padding: 14px;
          font-size: 15px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
          cursor: pointer;
        }

        @media (max-width: 992px) {
          .nav-menu-desktop { display: none; }
          .nav-mobile-toggle { display: flex; }
          .ivah-navbar { width: 92%; height: 64px; }
        }
      `}</style>

      {/* Modern Oval Floating Nav Chassis */}
      <nav
        className={`ivah-navbar ${isNavbarTransparent ? 'transparent-nav' : 'scrolled'} ${
          navVisible ? 'nav-show' : 'nav-hide'
        }`}
      >
        <div className="nav-container">
          {/* Brand Logo */}
          <div className="nav-logo" onClick={() => handlePageSelect('home')}>
            <img src="/logo.png" alt="Ivah Media Logo" className="logo-img" />
          </div>

          {/* Desktop Capsule Menu */}
          <div className="nav-menu-desktop">
            <button
              className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
              onClick={() => handlePageSelect('home')}
            >
              <Home size={15} />
              Home
            </button>

            {/* About Dropdown */}
            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
                onClick={() => handlePageSelect('about')}
              >
                <Info size={15} />
                About
                <ChevronDown size={13} style={{ marginLeft: 2 }} />
              </button>
              {activeDropdown === 'about' && (
                <div className="nav-dropdown-menu">
                  <button onClick={() => handlePageSelect('about', 'who-we-are')}>
                    <Users size={14} /> Who We Are
                  </button>
                  <button onClick={() => handlePageSelect('about', 'how-we-do-it')}>
                    <Activity size={14} /> How We Do It
                  </button>
                  <button onClick={() => handlePageSelect('about', 'why-us')}>
                    <Target size={14} /> Why Us
                  </button>
                  <button onClick={() => handlePageSelect('about', 'industries-we-serve')}>
                    <Layers size={14} /> Industries Served
                  </button>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
                onClick={() => handlePageSelect('services')}
              >
                <Briefcase size={15} />
                What We Do
                <ChevronDown size={13} style={{ marginLeft: 2 }} />
              </button>
              {activeDropdown === 'services' && (
                <div className="nav-dropdown-menu">
                  <button onClick={() => handlePageSelect('services', 'outdoor-marketing')}>
                    <Map size={14} /> Outdoor Marketing
                  </button>
                  <button onClick={() => handlePageSelect('services', 'design-consulting')}>
                    <Palette size={14} /> Design & Consulting
                  </button>
                  <button onClick={() => handlePageSelect('services', 'digital-marketing')}>
                    <Globe size={14} /> Digital Marketing
                  </button>
                  <button onClick={() => handlePageSelect('services', 'other-services')}>
                    <HelpCircle size={14} /> Other Services
                  </button>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`nav-link ${activePage === 'company' ? 'active' : ''}`}
                onClick={() => handlePageSelect('company')}
              >
                <Building2 size={15} />
                Company
                <ChevronDown size={13} style={{ marginLeft: 2 }} />
              </button>
              {activeDropdown === 'company' && (
                <div className="nav-dropdown-menu">
                  <button onClick={() => handlePageSelect('company', 'careers')}>
                    <Users size={14} /> Careers
                  </button>
                  <button onClick={() => handlePageSelect('company', 'terms')}>
                    <FileText size={14} /> Terms
                  </button>
                  <button onClick={() => handlePageSelect('company', 'privacy-policy')}>
                    <ShieldCheck size={14} /> Privacy Policy
                  </button>
                  <button onClick={() => handlePageSelect('company', 'contact-us')}>
                    <Mail size={14} /> Contact Us
                  </button>
                </div>
              )}
            </div>

            <button className="nav-cta-btn" onClick={() => handlePageSelect('contact')}>
              Get Started
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Hamburg Trigger Toggle */}
          <button
            className="nav-mobile-toggle"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Floating Under-Chassis Mobile Drawer Panel */}
        <div className={`nav-menu-mobile ${isMobileMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
          <button
            className={`mobile-nav-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => handlePageSelect('home')}
          >
            <Home size={16} /> Home
          </button>

          <div className="mobile-dropdown-section">
            <span className="mobile-section-title"><Info size={14} /> About</span>
            <div className="mobile-sub-menu">
              <button onClick={() => handlePageSelect('about', 'who-we-are')}>Who We Are</button>
              <button onClick={() => handlePageSelect('about', 'how-we-do-it')}>How We Do It</button>
              <button onClick={() => handlePageSelect('about', 'why-us')}>Why Us</button>
              <button onClick={() => handlePageSelect('about', 'industries-we-serve')}>Industries Served</button>
            </div>
          </div>

          <div className="mobile-dropdown-section">
            <span className="mobile-section-title"><Briefcase size={14} /> What We Do</span>
            <div className="mobile-sub-menu">
              <button onClick={() => handlePageSelect('services', 'outdoor-marketing')}>Outdoor Marketing</button>
              <button onClick={() => handlePageSelect('services', 'design-consulting')}>Design & Consult</button>
              <button onClick={() => handlePageSelect('services', 'digital-marketing')}>Digital Marketing</button>
              <button onClick={() => handlePageSelect('services', 'other-services')}>Other Services</button>
            </div>
          </div>

          <div className="mobile-dropdown-section">
            <span className="mobile-section-title"><Building2 size={14} /> Company</span>
            <div className="mobile-sub-menu">
              <button onClick={() => handlePageSelect('company', 'careers')}>Careers</button>
              <button onClick={() => handlePageSelect('company', 'terms')}>Terms</button>
              <button onClick={() => handlePageSelect('company', 'privacy-policy')}>Privacy Policy</button>
              <button onClick={() => handlePageSelect('company', 'contact-us')}>Contact Us</button>
            </div>
          </div>

          <button className="mobile-cta-btn" onClick={() => handlePageSelect('contact')}>
            Get Started <ArrowRight size={16} />
          </button>
        </div>
      </nav>
    </>
  );
};