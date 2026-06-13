import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp,
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
            <Home size={16} className="nav-icon" />
            Home
          </button>

          {/* About Dropdown */}
          <div className="nav-dropdown-wrapper">
            <button
              className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
              onClick={(e) => handleDropdownToggle(e, 'about')}
            >
              <Info size={16} className="nav-icon" />
              Solution
              {activeDropdown === 'about' ? <ChevronUp size={14} className="arrow-icon" /> : <ChevronDown size={14} className="arrow-icon" />}
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
                  <Layers size={14} /> Industries We Serve
                </button>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="nav-dropdown-wrapper">
            <button
              className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
              onClick={(e) => handleDropdownToggle(e, 'services')}
            >
              <Briefcase size={16} className="nav-icon" />
              What We Do
              {activeDropdown === 'services' ? <ChevronUp size={14} className="arrow-icon" /> : <ChevronDown size={14} className="arrow-icon" />}
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
          <div className="nav-dropdown-wrapper">
            <button
              className={`nav-link ${activePage === 'company' ? 'active' : ''}`}
              onClick={(e) => handleDropdownToggle(e, 'company')}
            >
              <Building2 size={16} className="nav-icon" />
              Company
              {activeDropdown === 'company' ? <ChevronUp size={14} className="arrow-icon" /> : <ChevronDown size={14} className="arrow-icon" />}
            </button>
            {activeDropdown === 'company' && (
              <div className="nav-dropdown-menu">
                <button onClick={() => handlePageSelect('company', 'about')}>
                  <Info size={14} /> About
                </button>
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

          <button
            className="nav-cta-btn"
            onClick={() => handlePageSelect('contact')}
          >
            Get Started
            <ArrowRight size={16} className="cta-icon" />
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
          <Home size={18} />
          Home
        </button>

        <div className="mobile-dropdown-section">
          <span className="mobile-section-title">
            <Info size={16} /> About
          </span>
          <div className="mobile-sub-menu">
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
              <Layers size={14} /> Industries We Serve
            </button>
          </div>
        </div>

        <div className="mobile-dropdown-section">
          <span className="mobile-section-title">
            <Briefcase size={16} /> What We Do
          </span>
          <div className="mobile-sub-menu">
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
        </div>

        <div className="mobile-dropdown-section">
          <span className="mobile-section-title">
            <Building2 size={16} /> Company
          </span>
          <div className="mobile-sub-menu">
            <button onClick={() => handlePageSelect('company', 'about')}>
              <Info size={14} /> About
            </button>
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
        </div>

        <button
          className="mobile-cta-btn"
          onClick={() => handlePageSelect('contact')}
        >
          Get Started
          <ArrowRight size={16} />
        </button>
      </div>
    </nav>
  );
};