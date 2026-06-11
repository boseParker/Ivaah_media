import React, { useState } from 'react';

export const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const steps = [
    { title: 'Define Objectives', desc: 'Establish clear, measurable targets for your campaign, such as brand awareness, product launch visibility, or direct response.' },
    { title: 'Budget Planning', desc: 'Allocate resources strategically across location rentals, printing, permits, and design work.' },
    { title: 'Identify Key Locations', desc: 'Select high-traffic arteries like Sheikh Zayed Road or high-profile spots near key commercial hubs.' },
    { title: 'Cultural Awareness', desc: 'Ensure creative messaging aligns perfectly with local guidelines, cultural nuances, and language requirements (Arabic/English).' },
    { title: 'Select the Right Format', desc: 'Choose between Digital Out-of-Home (DOOH), programmatic OOH, traditional billboards, bridge banners, or transit assets.' },
    { title: 'Work with Local Experts', desc: 'Partner with media buy experts who understand local media inventory availability and negotiate premium rates.' },
    { title: 'Secure Permits Early', desc: 'Navigate government approvals, municipality regulations, and safety clearances well ahead of launch.' },
    { title: 'Develop Localized Creative', desc: 'Draft clean, high-contrast layouts readable in 3 seconds by drivers travelling at highway speeds.' },
    { title: 'Launch & Monitor', desc: 'Deploy campaigns on schedule and verify visibility status with photographic reports and initial metrics.' },
    { title: 'Optimize for the Future', desc: 'Analyze campaign footfall correlation, digital brand search lifts, and sales cycles to refine the next flight.' },
  ];

  const differentiators = [
    { title: '8-15 Years Experience', desc: 'Our senior marketing leadership has extensive history executing successful media projects in the GCC region.' },
    { title: 'Cross-Functional Approach', desc: 'We combine traditional offline media (OOH) with modern digital assets for a unified brand footprint.' },
    { title: 'Strategic Value Focus', desc: 'We do not just execute placements; we construct holistic marketing plans built around business objectives.' },
    { title: 'Broad Industry Coverage', desc: 'Deep domain expertise serving private enterprise, government agencies, and global consumer brands.' }
  ];

  const industries = [
    'Real Estate', 'Government', 'Retail', 'Automotive', 
    'Travel & Tourism', 'Hospitality', 'Industrial / B2B', 
    'International Brands', 'Non-profit', 'Ecommerce'
  ];

  return (
    <div className="page-about fade-in">
      {/* Intro Header */}
      <section className="about-hero" id="who-we-are">
        <div className="section-container">
          <span className="section-tag">WHO WE ARE</span>
          <h1>We construct plans that bring brands to life.</h1>
          <p className="about-bio">
            Ivah Media is a premier full-service marketing consultancy and outdoor advertising specialist. Based in the UAE, we enable brands to launch, grow, and dominate competitive landscapes through disciplined, strategic planning and creative storytelling.
          </p>
        </div>
      </section>

      {/* 10-Step Guide */}
      <section className="steps-section" id="how-we-do-it">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">METHODOLOGY</span>
            <h2>10-Step Guide for UAE OOH Market Entry</h2>
            <p>A proven roadmap for international and local brands to capture attention and return on investment in the region.</p>
          </div>

          <div className="steps-container">
            <div className="steps-list">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className={`step-item ${activeStep === idx ? 'active' : ''}`}
                  onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                >
                  <div className="step-num">{String(idx + 1).padStart(2, '0')}</div>
                  <div className="step-title-wrapper">
                    <span className="step-title">{step.title}</span>
                    <span className="step-arrow">{activeStep === idx ? '▲' : '▼'}</span>
                  </div>
                  {activeStep === idx && (
                    <div className="step-content-mobile">
                      <p>{step.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="step-preview-desktop">
              {activeStep !== null ? (
                <div className="preview-box">
                  <span className="preview-num">Step {String(activeStep + 1).padStart(2, '0')}</span>
                  <h3>{steps[activeStep].title}</h3>
                  <p>{steps[activeStep].desc}</p>
                </div>
              ) : (
                <div className="preview-box-empty">
                  <p>Click on any step to explore our methodology.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="why-us-section" id="why-us">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">OUR EDGE</span>
            <h2>Why Choose Ivah Media?</h2>
            <p>We pride ourselves on execution quality, senior leadership, and objective-driven models.</p>
          </div>
          <div className="differentiators-grid">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="diff-card">
                <h4>{diff.title}</h4>
                <p>{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="industries-section" id="industries-we-serve">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">EXPERTISE</span>
            <h2>Industries We Serve</h2>
            <p>Our agile framework translates across diverse industries, offering custom solutions for each sector.</p>
          </div>
          <div className="industries-grid">
            {industries.map((ind, idx) => (
              <div key={idx} className="industry-tag">
                <span className="industry-dot"></span>
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
