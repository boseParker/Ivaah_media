import React from 'react';
import StatsSection from '../components/StateSection/statesection';
import { WhoWeAreSection } from '../components/Whoweare/whoweare';
import { VisionMissionSection } from '../components/VisionMission/visionmissionsection';
interface HomeProps {
  setActivePage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  return (
    <div className="page-home fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <video 
          className="hero-video" 
          src="/hero.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge animate-fade-up">OMNI-CHANNEL MARKETING AGENCY</span>
          <h1 className="hero-title animate-hero-title">All great marketing begins with a plan!</h1>
          <p className="hero-description animate-fade-up delay-1">
            Ivah Media delivers high-impact branding, digital marketing, events expertise, and outdoor advertising across the UAE and globally.
          </p>
          <button className="hero-cta animate-fade-up delay-2" onClick={() => setActivePage('contact')}>
            Start Your Campaign
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="section-container">
          <h2 className="section-title">UAE OOH & Digital Authority</h2>
          <p className="section-lead">
            We bridge the gap between physical and digital touchpoints. From high-visibility billboards in Dubai to targeted SEO campaigns, we design plans that convert attention into business growth.
          </p>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="showcase-section">
        <div className="section-container">
          <div className="section-header">
            <h3>Featured OOH & Ads Creative</h3>
            <p>A glimpse of our work across premier locations in the UAE</p>
          </div>
          <div className="showcase-grid">
            <div className="showcase-card">
              <img src="/billboard.png" alt="Sheikh Zayed Road DOOH" className="showcase-img" />
              <div className="showcase-info">
                <h4>Sheikh Zayed Road DOOH</h4>
                <p>High-frequency digital display campaign</p>
              </div>
            </div>
            <div className="showcase-card">
              <img src="/bridge_banner.png" alt="Al Khail Road Bridge" className="showcase-img" />
              <div className="showcase-info">
                <h4>Al Khail Road Bridge</h4>
                <p>High-impact static outdoor display</p>
              </div>
            </div>
            <div className="showcase-card">
              <img src="/transit.png" alt="Dubai Metro Wrap" className="showcase-img" />
              <div className="showcase-info">
                <h4>Dubai Metro Wrap</h4>
                <p>Transit advertising and mobile branding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="action-banner">
        <div className="action-container">
          <h2>Ready to elevate your brand presence?</h2>
          <p>Let's map out your strategic roadmap for the UAE market.</p>
          <button className="action-btn" onClick={() => setActivePage('contact')}>
            Get Started With Us
          </button>
        </div>
      </section>
      {/* Stats Section */}
     <section className="stats-section">
  <StatsSection />
</section>
<section className="whoweare-section">
  <WhoWeAreSection />
</section>
<section className="visionmission-section">
  <VisionMissionSection />
</section>
    </div>
  );
};
