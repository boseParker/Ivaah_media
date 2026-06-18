import React from 'react';
import { Compass, Target, Eye, Sparkles } from 'lucide-react';

export const WhoWeAre: React.FC = () => {
  const pillars = [
    {
      title: 'Brand Vision',
      tagline: 'We find your narrative, then scale it.',
      desc: 'Every campaign requires a structural brand blueprint. We audit regional audience segments, extract unique value positions, and transform simple narratives into memorable visual identities.',
      icon: Eye
    },
    {
      title: 'Omni-Channel Integration',
      tagline: 'Coordinating physical and digital exposures.',
      desc: 'We synchronize high-traffic outdoor billboards with targeted programmatic search slots, Shopify checkouts, and custom video campaigns to eliminate friction in consumer actions.',
      icon: Compass
    },
    {
      title: 'Execution Excellence',
      tagline: 'Bridging the gap between plans and conversions.',
      desc: 'Ivah Media operates with 100% transparency. We bypass agency intermediaries, negotiate direct-to-owner media pricing, manage strict municipal permitting, and verify campaigns with local photographic audits.',
      icon: Target
    }
  ];

  return (
    <div className="page-whoweare fade-in">
      {/* LOCAL SCOPED STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        .page-whoweare {
          background-color: #080808;
          color: #cbd5e1;
          font-family: 'Montserrat', sans-serif;
          min-height: 100vh;
        }

        .page-whoweare h1, .page-whoweare h2, .page-whoweare h3, .page-whoweare h4 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          color: #ffffff;
        }

        .page-whoweare .whoweare-hero {
          position: relative;
          min-height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #000000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .page-whoweare .hero-video-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          opacity: 0.45;
        }

        .page-whoweare .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(8, 8, 8, 0.6) 0%, #080808 100%);
          z-index: 2;
        }

        .page-whoweare .hero-content {
          text-align: center;
          z-index: 10;
          max-width: 800px;
          padding: 0 24px;
        }

        .page-whoweare .whoweare-tag {
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

        /* ---------------------------------------------------- */
        /* CONTRASTING WHITE THEME SECTION                      */
        /* ---------------------------------------------------- */
        .page-whoweare .contrast-pillars-section {
          background-color: #ffffff;
          color: #0f172a;
          padding: 100px 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .page-whoweare .contrast-pillars-section h2 {
          color: #0f172a !important;
          font-size: 2.8rem;
          margin-bottom: 16px;
        }

        .page-whoweare .contrast-pillars-section p.section-sub {
          color: #475569;
          font-size: 1.15rem;
          max-width: 650px;
          margin: 0 auto 60px auto;
        }

        .page-whoweare .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-whoweare .pillar-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 40px 32px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .page-whoweare .pillar-card:hover {
          background-color: #ffffff;
          border-color: #f97316;
          box-shadow: 0 20px 45px rgba(249, 115, 22, 0.08);
          transform: translateY(-6px);
        }

        .page-whoweare .pillar-card h3 {
          color: #0f172a !important;
          font-size: 1.4rem;
          margin: 0;
        }

        .page-whoweare .pillar-card p {
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        .page-whoweare .pillar-icon-box {
          align-self: flex-start;
          padding: 12px;
          background: rgba(249, 115, 22, 0.08);
          border-radius: 12px;
          color: #f97316;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ---------------------------------------------------- */
        /* DARK BIO GRID                                        */
        /* ---------------------------------------------------- */
        .page-whoweare .bio-grid-section {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-whoweare .bio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-top: 60px;
        }

        .page-whoweare .bio-card {
          background: rgba(15, 23, 42, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          padding: 40px;
          text-align: left;
          transition: all 0.3s;
        }

        .page-whoweare .bio-card:hover {
          border-color: rgba(249, 115, 22, 0.3);
          background: rgba(15, 23, 42, 0.35);
        }

        .page-whoweare .bio-card h3 {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .page-whoweare .bio-card p {
          font-size: 0.95rem;
          line-height: 1.65;
          margin: 0;
        }

        .page-whoweare .bio-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: #f97316;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
          display: block;
        }
      ` }} />

      {/* 1. HERO BANNER */}
      <section className="whoweare-hero">
        <video 
          className="hero-video-bg"
          src="/hero.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="whoweare-tag">
            <Sparkles size={13} fill="currentColor" /> Unified Identity
          </span>
          <h1 style={{ fontSize: '3.6rem', margin: '0 0 20px 0', lineHeight: 1.15 }}>
            We Design Plans <br />
            That <span style={{ color: '#f97316' }}>Build Markets.</span>
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.2rem', margin: 0, lineHeight: 1.6 }}>
            Ivah Media is an independent operational buy-side facilitator. We align highway billboard assets and performance-driven consulting models to accelerate commercial results.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC CONTRASTING PILLARS SECTION (WHITE THEME) */}
      <section className="contrast-pillars-section">
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
            Strategic Core
          </span>
          <h2>The Operational Focus</h2>
          <p className="section-sub">
            We operate with a commitment to net rate billing transparency, regulatory municipal clearances, and driver-focused creative layout tests.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-box">
                  <Icon size={24} />
                </div>
                <h3>{pillar.title}</h3>
                <span style={{ fontSize: '0.8rem', color: '#f97316', fontWeight: 700, textTransform: 'uppercase' }}>
                  {pillar.tagline}
                </span>
                <p>{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CORE ADVISORY BIOGRAPHY COOP */}
      <section className="bio-grid-section">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="whoweare-tag" style={{ background: 'rgba(39, 174, 96, 0.08)', color: '#27ae60', borderColor: 'rgba(39, 174, 96, 0.25)' }}>
            Operating Philosophy
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>Our Executive Commitment</h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '12px auto 0 auto', lineHeight: 1.5 }}>
            Ivah Media was established to dismantle traditional agency markups. We ensure direct cost alignment and rapid GCC deployment.
          </p>
        </div>

        <div className="bio-grid">
          <div className="bio-card">
            <span className="bio-tag">100% Net Rate Billing</span>
            <h3>Volume Rate Protection</h3>
            <p>
              We pass net media concessions directly to clients without markup. We negotiate unlisted highway inventory and cancellation slots directly from public/private media owners, saving up to 40%.
            </p>
          </div>

          <div className="bio-card">
            <span className="bio-tag">In-House Clearances</span>
            <h3>Government Compliance Desk</h3>
            <p>
              Our public relations department navigates permits directly. We verify structural designs, manage Arabic/English copy audits, and pay local municipal taxes without relying on third-party brokers.
            </p>
          </div>

          <div className="bio-card">
            <span className="bio-tag">Visual Science Auditing</span>
            <h3>The 3-Second Rule Test</h3>
            <p>
              We optimize all creatives before printing. We audit contrasting fonts, message densities, and drive-by visibility guidelines, conducting photo-verifications within 24 hours of launch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
