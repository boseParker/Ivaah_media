import React, { useState } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

export const HowWeDoIt: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: 'Define Objectives',
      desc: 'Align campaign formats with either brand awareness triggers or direct performance acquisition schedules.',
      insight: 'OOH designs on highways with high speed limits require text limits under 5 words to maximize driver absorption.'
    },
    {
      title: 'Budget Allocation',
      desc: 'Allocate media budgets strategically across premium traditional static sites and digital DOOH grids.',
      insight: 'Factoring municipal clearance fees and advertising tax reserves upfront secures stable schedules.'
    },
    {
      title: 'Identify Locations',
      desc: 'Coordinate placements along Sheikh Zayed Road (SZR), Al Khail Road bridge banners, or Dubai Metro wrappers.',
      insight: 'Primary highways target morning/evening commutes, while secondary routes target residential shoppers.'
    },
    {
      title: 'Cultural Verification',
      desc: 'Audit all graphic layouts and messaging to comply with UAE municipal guidelines and public decency regulations.',
      insight: 'All OOH campaigns require accurate Arabic and English text translations, with Arabic at equal prominence.'
    },
    {
      title: 'Select Media Formats',
      desc: 'Choose OOH structures (megaliths, bridge wraps, PDOOH programmatic slots) that match campaign goals.',
      insight: 'Static bridges offer high continuous views, while DOOH offers time-of-day or programmatic targeting.'
    },
    {
      title: 'NegotiateConcessions',
      desc: 'Secure pre-negotiated volume discount rates directly from public and private concession owners.',
      insight: 'Bypassing double-broker networks can reduce final campaign billings by up to 40%.'
    },
    {
      title: 'Government Clearances',
      desc: 'Submit creative blueprints and safety certifications to municipal bodies for rapid advertising permits.',
      insight: 'Standard permit turnarounds range from 5 to 7 days, but custom executions require upfront layout checks.'
    },
    {
      title: 'Creative Optimization',
      desc: 'Audit color contrasts and text scale parameters to pass the 3-second drive-by visibility test.',
      insight: 'High contrast backings (yellow/black) are readable at 100km/h; avoid using small QR codes.'
    },
    {
      title: 'Launch & Site Audits',
      desc: 'Oversee final printing and site installation. Conduct onsite inspections and provide photo verifications.',
      insight: 'We verify lighting, alignment, and absence of physical obstructions within 24 hours of campaign launch.'
    },
    {
      title: 'Attribution Auditing',
      desc: 'Merge mobile location footfall charts, organic search index spikes, and digital sales data.',
      insight: 'Attribution audits allow client teams to optimize the CAC/LTV of multi-channel conversions.'
    }
  ];

  return (
    <div className="page-howwedoit fade-in">
      {/* LOCAL SCOPED STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        .page-howwedoit {
          background-color: #080808;
          color: #cbd5e1;
          font-family: 'Montserrat', sans-serif;
          min-height: 100vh;
        }

        .page-howwedoit h1, .page-howwedoit h2, .page-howwedoit h3, .page-howwedoit h4 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          color: #ffffff;
        }

        .page-howwedoit .how-hero {
          position: relative;
          min-height: 55vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #000000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .page-howwedoit .hero-video-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          opacity: 0.45;
        }

        .page-howwedoit .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(8, 8, 8, 0.6) 0%, #080808 100%);
          z-index: 2;
        }

        .page-howwedoit .hero-content {
          text-align: center;
          z-index: 10;
          max-width: 800px;
          padding: 0 24px;
        }

        .page-howwedoit .how-tag {
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

        .page-howwedoit .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 24px;
        }

        /* ---------------------------------------------------- */
        /* ROADMAP SECTION (WHITE THEME)                        */
        /* ---------------------------------------------------- */
        .page-howwedoit .roadmap-section {
          background-color: #ffffff;
          color: #0f172a;
          padding: 100px 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .page-howwedoit .roadmap-section h2 {
          color: #0f172a !important;
          font-size: 2.8rem;
          margin-bottom: 16px;
        }

        .page-howwedoit .roadmap-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 60px;
          max-width: 1100px;
          margin: 60px auto 0 auto;
          align-items: flex-start;
        }
        @media (max-width: 768px) {
          .page-howwedoit .roadmap-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .page-howwedoit .steps-sidebar {
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 24px;
          border-radius: 20px;
        }

        .page-howwedoit .step-nav-btn {
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
          color: #475569;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .page-howwedoit .step-nav-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
        }
        .page-howwedoit .step-nav-btn.active {
          background: rgba(249, 115, 22, 0.06);
          border-color: rgba(249, 115, 22, 0.2);
          color: #f97316;
        }

        .page-howwedoit .step-display-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-height: 340px;
          justify-content: space-between;
        }

        .page-howwedoit .step-display-card h3 {
          color: #0f172a !important;
          font-size: 1.8rem;
          margin: 0;
        }

        .page-howwedoit .step-display-card p {
          color: #475569;
          font-size: 1.05rem;
          line-height: 1.65;
          margin: 0;
        }

        .page-howwedoit .insight-tag {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: #f97316;
          border-left: 3px solid #f97316;
          padding-left: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* ---------------------------------------------------- */
        /* DARK METHODOLOGY SECTION                             */
        /* ---------------------------------------------------- */
        .page-howwedoit .methodology-section {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-howwedoit .method-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-top: 60px;
        }

        .page-howwedoit .method-card {
          background: rgba(15, 23, 42, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          padding: 40px;
          text-align: left;
          transition: all 0.3s;
        }

        .page-howwedoit .method-card:hover {
          border-color: rgba(249, 115, 22, 0.3);
          background: rgba(15, 23, 42, 0.35);
        }

        .page-howwedoit .method-card h3 {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }

        .page-howwedoit .method-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }
      ` }} />

      {/* Hero Header */}
      <section className="how-hero">
        <video 
          className="hero-video-bg"
          src="/hero1.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="how-tag">
            <Sparkles size={13} fill="currentColor" /> Operational Engine
          </span>
          <h1 style={{ fontSize: '3.6rem', margin: '0 0 20px 0', lineHeight: 1.15 }}>
            The 10-Step campaign <br />
            <span>Blueprint.</span>
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.2rem', margin: 0, lineHeight: 1.6 }}>
            Our structured operational flow coordinates inventory procurement, cultural localization reviews, municipal approvals, and attribution audits under a single execution cycle.
          </p>
        </div>
      </section>

      {/* Roadmap Step-by-Step (White Theme Section) */}
      <section className="roadmap-section">
        <div style={{ textAlign: 'center' }}>
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#f97316',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            background: 'rgba(249, 115, 22, 0.06)',
            padding: '6px 16px',
            borderRadius: '30px'
          }}>
            Execution Path
          </span>
          <h2>The Campaign Roadmap</h2>
          <p style={{ color: '#475569', fontSize: '1.15rem', maxWidth: '600px', margin: '12px auto 0 auto', lineHeight: 1.5 }}>
            Navigate the chronological steps required to deploy a compliant, high-impact outdoor campaign in the UAE.
          </p>
        </div>

        <div className="roadmap-grid">
          {/* Step Selection Sidebar */}
          <aside className="steps-sidebar">
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px', paddingLeft: '8px' }}>
              Operations Guide
            </div>
            {steps.map((st, index) => (
              <button
                key={index}
                className={`step-nav-btn ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <span>{index + 1}. {st.title}</span>
                <ChevronRight size={14} style={{ opacity: activeStep === index ? 1 : 0.2 }} />
              </button>
            ))}
          </aside>

          {/* Active Step display details */}
          <div className="step-display-card">
            <div>
              <span style={{ fontSize: '0.85rem', color: '#f97316', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'monospace' }}>
                Step {activeStep + 1} of 10
              </span>
              <h3 style={{ marginTop: '8px', marginBottom: '20px' }}>
                {steps[activeStep].title}
              </h3>
              <p>{steps[activeStep].desc}</p>
            </div>
            <div className="insight-tag">
              <strong>GCC Expert Rule:</strong> {steps[activeStep].insight}
            </div>
          </div>
        </div>
      </section>

      {/* Dark Methodology Highlights */}
      <section className="methodology-section">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="how-tag" style={{ background: 'rgba(39, 174, 96, 0.08)', color: '#27ae60', borderColor: 'rgba(39, 174, 96, 0.25)' }}>
            Campaign Synergies
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>The Sync Advantage</h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '12px auto 0 auto', lineHeight: 1.5 }}>
            Ivah Media coordinates physical exposures with digital search triggers to compound campaign results.
          </p>
        </div>

        <div className="method-grid">
          <div className="method-card">
            <h3>Offline Concessions</h3>
            <p>
              We bypass broker networks to secure premium highway billboard sites and metro wrappers at direct-to-owner concessions, minimizing your media spends.
            </p>
          </div>

          <div className="method-card">
            <h3>Bilingual Localization</h3>
            <p>
              Our copywriters ensure all creatives comply with strict municipal regulations. We optimize layout contrast and bilingual text placement for 3-second drive-by speed read.
            </p>
          </div>

          <div className="method-card">
            <h3>Performance Attributions</h3>
            <p>
              We integrate location footfall analytics and organic search lift parameters to track actual conversion impact, adjusting budgets to optimize the final CAC.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
