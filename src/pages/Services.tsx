import React from 'react';

export const Services: React.FC = () => {
  const digitalServices = [
    { title: 'Digital Strategy', desc: 'Crafting goal-oriented roadmaps to guide multi-channel online campaigns.' },
    { title: 'Digital Branding', desc: 'Establishing visual tone, digital assets, and guidelines for screen delivery.' },
    { title: 'Digital Marketing', desc: 'Executing targeted pay-per-click and inbound campaigns that drive leads.' },
    { title: 'SEO / Keyword Strategy', desc: 'Optimizing web pages to earn top organic placements on search queries.' },
    { title: 'Web Design', desc: 'Building responsive, fast, and modern web applications that engage visitors.' },
    { title: 'Shopify / Ecommerce', desc: 'Configuring online storefronts, product catalogs, and transaction flows.' },
    { title: 'Social Media Management', desc: 'Curation, writing, scheduling, and community management on social feeds.' },
    { title: 'Email Marketing', desc: 'Designing drip sequences, newsletters, and promotional broadcasts.' },
    { title: 'Website Management', desc: 'Regular maintenance, security updates, uptime checks, and content edits.' },
    { title: 'Digital Transformation', desc: 'Re-engineering standard business operations with modern software solutions.' }
  ];

  return (
    <div className="page-services fade-in">
      {/* Page Header */}
      <section className="services-hero">
        <div className="section-container">
          <span className="section-tag">SERVICES</span>
          <h1>What We Do</h1>
          <p className="services-intro">
            We deliver visual dominance outdoors and technical precision online. Discover our core pillars of capability.
          </p>
        </div>
      </section>

      {/* Pillar 1: Outdoor Marketing */}
      <section className="service-pillar-section" id="outdoor-marketing">
        <div className="section-container">
          <div className="pillar-layout">
            <div className="pillar-details">
              <span className="pillar-tag">PILLAR 01</span>
              <h3>We find your story and help you tell it.</h3>
              <p>
                Our Outdoor Advertising (OOH) capabilities cover the UAE's premier high-traffic locations. We manage design, structural selection, and regulatory approvals.
              </p>
              <ul className="pillar-features">
                <li><strong>Billboards:</strong> Massive standalone highway advertising.</li>
                <li><strong>Bridge Banners:</strong> Multi-lane high-readability displays.</li>
                <li><strong>DOOH & PDOOH:</strong> Programmatic digital out-of-home campaigns.</li>
                <li><strong>Airport & Transit:</strong> High-dwell time locations and metro wraps.</li>
              </ul>
            </div>
            <div className="pillar-visual">
              <div className="gallery-preview">
                <img src="/billboard.png" alt="Billboards" className="gallery-img" />
                <img src="/bridge_banner.png" alt="Bridge Banners" className="gallery-img" />
                <img src="/transit.png" alt="Transit Ads" className="gallery-img" />
                <img src="/billboard.png" alt="Airport DOOH" className="gallery-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Design & Consulting */}
      <section className="service-pillar-section alternate-bg" id="design-consulting">
        <div className="section-container">
          <div className="pillar-layout reverse">
            <div className="pillar-details">
              <span className="pillar-tag">PILLAR 02</span>
              <h3>Design & Consulting</h3>
              <p>
                We provide senior strategic guidance to align design, messaging, and product positioning with business growth.
              </p>
              <div className="sub-service-block">
                <h4>Brand Strategy & Management</h4>
                <p>We define positioning, visual guidelines, tone of voice, architecture, and growth communications for expanding organizations.</p>
              </div>
              <div className="sub-service-block">
                <h4>Fractional CMO / Product Marketing Consultant</h4>
                <p>Tailored leadership for B2B SaaS firms, offering 5 to 40 hours per week of dedicated product marketing advice and execution.</p>
              </div>
            </div>
            <div className="pillar-visual flex-center" style={{ flexDirection: 'column', gap: '20px' }}>
              <img src="/design_consulting.png" alt="Design & Strategy" className="showcase-img" style={{ borderRadius: '12px', border: '1px solid var(--color-border)' }} />
              <div className="consulting-card" style={{ marginTop: '0' }}>
                <div className="consulting-badge">STRATEGY FIRST</div>
                <h4>"Marketing is too important to be left to the marketing department."</h4>
                <span className="consulting-quote-author">- David Packard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Digital Marketing */}
      <section className="service-pillar-section" id="digital-marketing">
        <div className="section-container">
          <div className="section-header" style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', maxWidth: 'none', marginBottom: '50px' }}>
            <div style={{ flex: 1.2, minWidth: '300px' }}>
              <span className="pillar-tag">PILLAR 03</span>
              <h3>Digital Marketing Capabilities</h3>
              <p>10 specialized digital service lines to build, manage, and scale your brand footprint online.</p>
            </div>
            <div style={{ flex: 0.8, minWidth: '300px' }}>
              <img src="/digital_marketing.png" alt="Digital Marketing Analytics" className="showcase-img" style={{ borderRadius: '12px', border: '1px solid var(--color-border)', maxHeight: '180px', width: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <div className="digital-cards-grid">
            {digitalServices.map((service, idx) => (
              <div key={idx} className="service-card-digital">
                <div className="service-card-num">{String(idx + 1).padStart(2, '0')}</div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 4: Other Services */}
      <section className="service-pillar-section alternate-bg" id="other-services">
        <div className="section-container">
          <div className="pillar-layout">
            <div className="pillar-details">
              <span className="pillar-tag">PILLAR 04</span>
              <h3>Other Premium Services</h3>
              
              <div className="other-service-item">
                <h4>Event Management</h4>
                <p>Conceptualizing and producing corporate conferences, VIP launches, and brand activations that capture community attention.</p>
              </div>

              <div className="other-service-item">
                <h4>Ad Film Productions</h4>
                <p>From scriptwriting to cinematography and post-production, we create premium commercials and social videos.</p>
              </div>

              <div className="other-service-item">
                <h4>Marketing Training & Workshops</h4>
                <p>Equip internal teams with OOH and digital marketing tools. Our training provides three core benefits:</p>
                <ul className="training-pillars">
                  <li><strong>Improve Team Performance:</strong> Modern execution tips and standard tools.</li>
                  <li><strong>Align Sales & Marketing:</strong> Shared workflows and clear lead tracking.</li>
                  <li><strong>Scale Knowledge:</strong> Retain core brand strategies in-house.</li>
                </ul>
              </div>
            </div>
            <div className="pillar-visual flex-center" style={{ flexDirection: 'column', gap: '20px' }}>
              <img src="/events_and_films.png" alt="Events & Film Productions" className="showcase-img" style={{ borderRadius: '12px', border: '1px solid var(--color-border)' }} />
              <div className="other-services-showcase" style={{ width: '100%' }}>
                <div className="showcase-box">🎥 Film Productions</div>
                <div className="showcase-box">🎪 Event activations</div>
                <div className="showcase-box">📚 Corporate Training</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
