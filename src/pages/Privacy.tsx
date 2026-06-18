import React, { useState } from 'react';
import { Eye, ShieldCheck, Database, Landmark, ChevronRight, Sparkles } from 'lucide-react';

export const Privacy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('collection');

  const sections = [
    {
      id: 'collection',
      title: '1. Information Collection',
      icon: Eye,
      content: 'We collect information necessary to deploy OOH campaign footprints and optimize digital search triggers. This includes contact details submitted via our contact portals, CV files uploaded through our career portals, and anonymous geo-fenced mobile footfall data utilized to audit physical billboard impressions.'
    },
    {
      id: 'protection',
      title: '2. Data Protection & Security',
      icon: ShieldCheck,
      content: 'Ivah Media implements security controls to protect client parameters, campaign datasets, and applicant credentials. Dossiers submitted to our partner circles are encrypted and stored in secure regional databases to prevent unauthorized server exposures or holding network transfers.'
    },
    {
      id: 'cookies',
      title: '3. Cookie & Tracking Policy',
      icon: Database,
      content: 'We utilize tracking cookies and local storage tokens to analyze user engagement, map route traffic vectors, and attribution. Programmatic DOOH campaign metrics are correlated with localized search spikes using non-personally identifiable cookie patterns, ensuring full privacy alignment.'
    },
    {
      id: 'regulations',
      title: '4. Regional Data Compliance',
      icon: Landmark,
      content: 'Ivah Media operates in compliance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) and General Data Protection Regulation (GDPR) frameworks. We enforce user consent protocols for data processing and respect requests to purge application folders.'
    }
  ];

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="page-privacy fade-in">
      {/* SCOPED PRIVACY STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        .page-privacy {
          background-color: #080808;
          color: #cbd5e1;
          font-family: 'Montserrat', sans-serif;
          min-height: 100vh;
        }

        .page-privacy h1, .page-privacy h2, .page-privacy h3, .page-privacy h4 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          color: #ffffff;
        }

        .page-privacy .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        /* Hero Banner */
        .page-privacy .privacy-hero {
          position: relative;
          min-height: 45vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: linear-gradient(to bottom, rgba(8, 8, 8, 0.75) 0%, #080808 100%), url('/dubai_ooh_billboard.png');
          background-size: cover;
          background-position: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .page-privacy .hero-content {
          text-align: center;
          z-index: 10;
          max-width: 800px;
          padding: 0 20px;
        }

        .page-privacy .privacy-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: #f97316;
          letter-spacing: 3px;
          text-transform: uppercase;
          background: rgba(249, 115, 22, 0.08);
          border: 1px solid rgba(249, 115, 22, 0.25);
          padding: 6px 16px;
          border-radius: 30px;
          margin-bottom: 20px;
        }

        /* Sidebar Split Layout */
        .page-privacy .privacy-layout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 60px;
          align-items: flex-start;
          margin-top: 40px;
        }
        @media (max-width: 991px) {
          .page-privacy .privacy-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .page-privacy .privacy-sidebar {
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: rgba(15, 23, 42, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 24px;
          border-radius: 20px;
        }

        .page-privacy .sidebar-nav-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: 1px solid transparent;
          padding: 14px 20px;
          border-radius: 10px;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: #94a3b8;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .page-privacy .sidebar-nav-btn:hover {
          background: rgba(255, 255, 255, 0.02);
          color: #ffffff;
        }
        .page-privacy .sidebar-nav-btn.active {
          background: rgba(249, 115, 22, 0.06);
          border-color: rgba(249, 115, 22, 0.2);
          color: #f97316;
        }

        /* Privacy Cards */
        .page-privacy .privacy-content-panel {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .page-privacy .privacy-card {
          background: rgba(15, 23, 42, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          padding: 40px;
          transition: border-color 0.3s, box-shadow 0.3s;
          scroll-margin-top: 120px;
        }
        .page-privacy .privacy-card:hover {
          border-color: rgba(249, 115, 22, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .page-privacy .privacy-card.active {
          border-color: #f97316;
          box-shadow: 0 10px 30px rgba(249, 115, 22, 0.05);
        }

        .page-privacy .privacy-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .page-privacy .icon-wrapper {
          padding: 10px;
          background: rgba(259, 115, 22, 0.08);
          color: #f97316;
          border-radius: 10px;
        }

        .page-privacy .privacy-card h3 {
          font-size: 1.4rem;
          margin: 0;
        }
        .page-privacy .privacy-card p {
          font-size: 1rem;
          line-height: 1.7;
          color: #94a3b8;
          margin: 0;
        }
      ` }} />

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="hero-content">
          <span className="privacy-tag">
            <Sparkles size={13} fill="currentColor" /> Trust & Security
          </span>
          <h1 style={{ fontSize: '3.2rem', margin: '0 0 16px 0' }}>Privacy Policy</h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.15rem', margin: 0, lineHeight: 1.6 }}>
            Understand how Ivah Media structures, encrypts, and handles client campaign parameters and applicant dossiers.
          </p>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="section-container">
        <div className="privacy-layout">
          
          {/* Sticky Left Navigation */}
          <aside className="privacy-sidebar">
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px', paddingLeft: '8px' }}>
              Index Categories
            </div>
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  className={`sidebar-nav-btn ${activeSection === s.id ? 'active' : ''}`}
                  onClick={() => handleScrollTo(s.id)}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon size={16} />
                    {s.title.split('. ')[1]}
                  </span>
                  <ChevronRight size={14} style={{ opacity: activeSection === s.id ? 1 : 0.2 }} />
                </button>
              );
            })}
          </aside>

          {/* Details Scroll Panel */}
          <div className="privacy-content-panel">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <div 
                  key={s.id}
                  id={s.id}
                  className={`privacy-card ${activeSection === s.id ? 'active' : ''}`}
                >
                  <div className="privacy-card-header">
                    <div className="icon-wrapper">
                      <Icon size={22} />
                    </div>
                    <h3>{s.title}</h3>
                  </div>
                  <p>{s.content}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
};
