import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  setScrollTarget: (target: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  setScrollTarget,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track window scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleOutsideClick = () => {
      setActiveDropdown(null);
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleDropdownToggle = (e: React.MouseEvent, menu: string) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handlePageSelect = (page: string, target?: string) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
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

  const isNavbarTransparent = activePage === 'home' && !isScrolled;

  return (
    <nav className={`ivah-navbar ${isNavbarTransparent ? 'transparent-nav' : 'scrolled'}`}>
      <div className="nav-container">
        {/* Brand Logo */}
        <div className="nav-logo" onClick={() => handlePageSelect('home')}>
          <img src="/logo.png" alt="Ivah Media Logo" className="logo-img" />
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          <button
            className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => handlePageSelect('home')}
          >
            Home
          </button>

          {/* About Dropdown */}
          <div className="nav-dropdown-wrapper">
            <button
              className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
              onClick={(e) => handleDropdownToggle(e, 'about')}
            >
              About
              <span className="dropdown-arrow">▼</span>
            </button>
            {activeDropdown === 'about' && (
              <div className="nav-dropdown-menu">
                <button onClick={() => handlePageSelect('about', 'who-we-are')}>Who We Are</button>
                <button onClick={() => handlePageSelect('about', 'how-we-do-it')}>How We Do It</button>
                <button onClick={() => handlePageSelect('about', 'why-us')}>Why Us</button>
                <button onClick={() => handlePageSelect('about', 'industries-we-serve')}>Industries We Serve</button>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="nav-dropdown-wrapper">
            <button
              className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
              onClick={(e) => handleDropdownToggle(e, 'services')}
            >
              What We Do
              <span className="dropdown-arrow">▼</span>
            </button>
            {activeDropdown === 'services' && (
              <div className="nav-dropdown-menu">
                <button onClick={() => handlePageSelect('services', 'outdoor-marketing')}>Outdoor Marketing</button>
                <button onClick={() => handlePageSelect('services', 'design-consulting')}>Design & Consulting</button>
                <button onClick={() => handlePageSelect('services', 'digital-marketing')}>Digital Marketing</button>
                <button onClick={() => handlePageSelect('services', 'other-services')}>Other Services</button>
              </div>
            )}
          </div>

          <button
            className="nav-cta-btn"
            onClick={() => handlePageSelect('contact')}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`nav-menu-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <button
          className={`mobile-nav-link ${activePage === 'home' ? 'active' : ''}`}
          onClick={() => handlePageSelect('home')}
        >
          Home
        </button>

        <div className="mobile-dropdown-section">
          <span className="mobile-section-title">About</span>
          <div className="mobile-sub-menu">
            <button onClick={() => handlePageSelect('about', 'who-we-are')}>Who We Are</button>
            <button onClick={() => handlePageSelect('about', 'how-we-do-it')}>How We Do It</button>
            <button onClick={() => handlePageSelect('about', 'why-us')}>Why Us</button>
            <button onClick={() => handlePageSelect('about', 'industries-we-serve')}>Industries We Serve</button>
          </div>
        </div>

        <div className="mobile-dropdown-section">
          <span className="mobile-section-title">What We Do</span>
          <div className="mobile-sub-menu">
            <button onClick={() => handlePageSelect('services', 'outdoor-marketing')}>Outdoor Marketing</button>
            <button onClick={() => handlePageSelect('services', 'design-consulting')}>Design & Consulting</button>
            <button onClick={() => handlePageSelect('services', 'digital-marketing')}>Digital Marketing</button>
            <button onClick={() => handlePageSelect('services', 'other-services')}>Other Services</button>
          </div>
        </div>

        <button
          className="mobile-cta-btn"
          onClick={() => handlePageSelect('contact')}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};
