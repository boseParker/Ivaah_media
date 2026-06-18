import React, { useState, useEffect, useRef } from 'react';
import { Coins, Users, Layers, Sparkles } from 'lucide-react';

function Counter({ to, duration = 1500 }: { to: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * to));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{val.toLocaleString()}</span>;
}

export const WhyUs: React.FC = () => {
  return (
    <div className="page-whyus fade-in">
      {/* LOCAL SCOPED STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        .page-whyus {
          background-color: #080808;
          color: #cbd5e1;
          font-family: 'Montserrat', sans-serif;
          min-height: 100vh;
        }

        .page-whyus h1, .page-whyus h2, .page-whyus h3, .page-whyus h4 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          color: #ffffff;
        }

        .page-whyus .whyus-hero {
          position: relative;
          min-height: 55vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-image: linear-gradient(to bottom, rgba(8, 8, 8, 0.75) 0%, #080808 100%), url('/dubai_ooh_billboard.png');
          background-size: cover;
          background-position: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .page-whyus .hero-content {
          text-align: center;
          z-index: 10;
          max-width: 800px;
          padding: 0 24px;
        }

        .page-whyus .whyus-tag {
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

        .page-whyus .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 24px;
        }

        /* ---------------------------------------------------- */
        /* VALUE PROPOSITION LISTS                              */
        /* ---------------------------------------------------- */
        .page-whyus .value-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-top: 50px;
        }

        .page-whyus .value-card {
          background: rgba(15, 23, 42, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          padding: 40px;
          text-align: left;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .page-whyus .value-card:hover {
          border-color: #f97316;
          background: rgba(15, 23, 42, 0.35);
        }

        .page-whyus .value-icon {
          align-self: flex-start;
          padding: 12px;
          background: rgba(249, 115, 22, 0.08);
          color: #f97316;
          border-radius: 12px;
        }

        .page-whyus .value-card h3 {
          font-size: 1.4rem;
          margin: 0;
        }

        .page-whyus .value-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #cbd5e1;
          margin: 0;
        }

        /* ---------------------------------------------------- */
        /* CONTRASTING STATS DASHBOARD (WHITE THEME)            */
        /* ---------------------------------------------------- */
        .page-whyus .contrast-stats-section {
          background-color: #ffffff;
          color: #0f172a;
          padding: 100px 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .page-whyus .contrast-stats-section h2 {
          color: #0f172a !important;
          font-size: 2.8rem;
          margin-bottom: 16px;
        }

        .page-whyus .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 50px auto 0 auto;
        }

        .page-whyus .stat-bento-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px 24px;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
        }

        .page-whyus .stat-bento-card:hover {
          background-color: #ffffff;
          border-color: #f97316;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
        }

        .page-whyus .stat-val {
          font-family: 'Outfit', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: #f97316;
        }

        .page-whyus .stat-lbl {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
        }

        .page-whyus .stat-dsc {
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.5;
        }
      ` }} />

      {/* Hero Header */}
      <section className="whyus-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="whyus-tag">
            <Sparkles size={13} fill="currentColor" /> Strategic Advantage
          </span>
          <h1 style={{ fontSize: '3.6rem', margin: '0 0 20px 0', lineHeight: 1.15 }}>
            Dismantling Traditional <br />
            <span>Agency Markups.</span>
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.2rem', margin: 0, lineHeight: 1.6 }}>
            Ivah Media was built to provide cost transparency and fractional consulting speed, eliminating agency commissions.
          </p>
        </div>
      </section>

      {/* Value Grid */}
      <section className="section-container">
        <div style={{ textAlign: 'center' }}>
          <span className="whyus-tag" style={{ background: 'rgba(39, 174, 96, 0.08)', color: '#27ae60', borderColor: 'rgba(39, 174, 96, 0.25)' }}>
            Corporate Charter
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>Our Values in Action</h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '12px auto 0 auto', lineHeight: 1.5 }}>
            Every outdoor concessions campaign or performance funnel is run under cost-transparent parameters.
          </p>
        </div>

        <div className="value-grid">
          <div className="value-card">
            <div className="value-icon">
              <Coins size={22} />
            </div>
            <h3>100% Direct Billing</h3>
            <p>
              We bypass broker layers, passing media owner concession rates directly to client sheets. Clients receive the net volume rate without hidden agency margins.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Users size={22} />
            </div>
            <h3>Fractional Senior CMOs</h3>
            <p>
              Gain flexible, on-demand placement of GCC executives with 8-15+ years experience. They direct campaigns and audits without full-time C-suite overhead.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Layers size={22} />
            </div>
            <h3>Direct Concessions Desk</h3>
            <p>
              Our relationships with public/private media owners secure Sheikh Zayed Road, Al Khail Road, and metro transit wraps rapidly at pre-negotiated volume values.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Stats (White Theme Section) */}
      <section className="contrast-stats-section">
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
            Attribution
          </span>
          <h2>The Efficiency Metrics</h2>
          <p style={{ color: '#475569', fontSize: '1.15rem', maxWidth: '600px', margin: '12px auto 0 auto', lineHeight: 1.5 }}>
            Ivah Media runs campaigns focused strictly on speed, transparency, and cost efficiency.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-bento-card">
            <span className="stat-val"><Counter to={60} /> Min</span>
            <span className="stat-lbl">Quote Turnaround</span>
            <span className="stat-dsc">Immediate concession availability checks and net rate estimates.</span>
          </div>

          <div className="stat-bento-card">
            <span className="stat-val"><Counter to={100} />%</span>
            <span className="stat-lbl">Transparency Guarantees</span>
            <span className="stat-dsc">Audit sheets and official invoices passed directly to clients.</span>
          </div>

          <div className="stat-bento-card">
            <span className="stat-val"><Counter to={40} />%</span>
            <span className="stat-lbl">Concession Cost Savings</span>
            <span className="stat-dsc">Pre-negotiated GCC volume agreements bypassing brokers.</span>
          </div>

          <div className="stat-bento-card">
            <span className="stat-val">0</span>
            <span className="stat-lbl">Government Delays</span>
            <span className="stat-dsc">Bypassing third-party PR desks for permit submissions.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
