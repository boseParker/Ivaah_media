import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, TrendingUp, Target, Database, Zap } from 'lucide-react';
import servicesData from '../data/servicesData.json';

interface DetailFeature {
  title: string;
  desc: string;
}

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  features: DetailFeature[];
  extraInfo?: string;
}

const STRATEGIC_ADVANTAGES = [
  {
    icon: <TrendingUp size={28} />,
    title: 'ROI Focused',
    desc: 'Every dollar spent is tracked against tangible business outcomes and growth metrics.',
  },
  {
    icon: <Target size={28} />,
    title: 'Targeted Audiences',
    desc: 'Precision psychographic and behavioral targeting ensures your message reaches the elite few.',
  },
  {
    icon: <Database size={28} />,
    title: 'Data Precision',
    desc: 'Leveraging first-party data and AI to predict trends before they hit the market.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Scalable Growth',
    desc: 'Infrastructures built to scale from local campaigns to global dominance instantly.',
  },
];

const METHODOLOGY_STEPS = [
  {
    num: '1',
    title: 'Research & Discovery',
    desc: 'We dive deep into your market position, competitor landscape, and consumer psychographics to find the white space.',
  },
  {
    num: '2',
    title: 'Audit & Diagnostics',
    desc: 'Technical analysis of your current digital footprint to identify leaks in your conversion funnel.',
  },
  {
    num: '3',
    title: 'Architecture & Strategy',
    desc: 'Designing the blueprint. We define channels, messaging, and budget allocation for maximum efficacy.',
    highlight: true,
  },
  {
    num: '4',
    title: 'Precision Implementation',
    desc: 'Deployment of creative assets and tracking codes across your digital ecosystem.',
  },
  {
    num: '5',
    title: 'Real-time Optimization',
    desc: 'Continuous A/B testing and algorithmic adjustments to squeeze every ounce of performance from the campaign.',
  },
];

const TRUST_POINTS = [
  {
    title: 'Radical Transparency',
    desc: "Monthly reporting that actually makes sense, showing the 'why' behind the numbers.",
  },
  {
    title: 'Creative Excellence',
    desc: "We don't just run ads; we build digital masterpieces that respect your brand's heritage.",
  },
  {
    title: 'Elite Expertise',
    desc: 'A boutique team based in Dubai, servicing the most ambitious brands globally.',
  },
];

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const service = (servicesData.serviceDetailsList as ServiceDetail[]).find(
    (s) => s.id === id
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!service) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '150px', minHeight: '60vh' }}>
        <h2>Service Not Found</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '30px' }}>
          The service details path does not exist or has been relocated.
        </p>
        <button className="action-btn" onClick={() => navigate('/services')}>
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="page-service-detail fade-in">
      <style dangerouslySetInnerHTML={{
        __html: `
          /* ─── RESET / BASE ─── */
          .sd-root {
            font-family: var(--font-body, 'Inter', sans-serif);
            color: var(--color-text, #e8e8e8);
            background: var(--color-bg, #0d0d0d);
          }

          /* ─── HERO ─── */
          .sd-hero {
            position: relative;
            min-height: 460px;
            display: flex;
            align-items: flex-end;
            overflow: hidden;
          }
          .sd-hero-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            filter: brightness(0.32);
          }
          .sd-hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%);
          }
          .sd-hero-content {
            position: relative;
            z-index: 2;
            max-width: 1300px;
            margin: 0 auto;
            width: 100%;
            padding: 60px 24px 56px;
          }
          .sd-breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.82rem;
            letter-spacing: 0.04em;
            color: rgba(255,255,255,0.5);
            margin-bottom: 28px;
          }
          .sd-breadcrumb button {
            background: none;
            border: none;
            color: rgba(255,255,255,0.5);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: inherit;
            transition: color 0.2s;
          }
          .sd-breadcrumb button:hover { color: #fff; }
          .sd-hero-eyebrow {
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: var(--color-accent-red, #e63946);
            margin-bottom: 14px;
            display: block;
          }
          .sd-hero-title {
            font-size: clamp(2.6rem, 6vw, 4.4rem);
            font-weight: 900;
            letter-spacing: -0.03em;
            line-height: 1.03;
            margin: 0 0 18px;
            color: #fff;
          }
          .sd-hero-sub {
            font-size: clamp(1rem, 2vw, 1.2rem);
            color: rgba(255,255,255,0.62);
            max-width: 680px;
            line-height: 1.55;
            margin: 0;
          }

          /* ─── SECTION WRAPPER ─── */
          .sd-section {
            max-width: 1300px;
            margin: 0 auto;
            padding: 80px 24px;
          }
          .sd-section--dark {
            background: #111;
          }
          .sd-section-full {
            padding: 80px 24px;
          }

          /* ─── SECTION LABELS ─── */
          .sd-label {
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--color-accent-red, #e63946);
            margin-bottom: 8px;
            display: block;
          }
          .sd-section-heading {
            font-size: clamp(1.8rem, 4vw, 2.8rem);
            font-weight: 800;
            letter-spacing: -0.025em;
            color: #000000ff;
            margin: 0 0 14px;
          }
          .sd-section-lead {
            font-size: 1.05rem;
            color: rgba(255,255,255,0.55);
            max-width: 620px;
            line-height: 1.65;
            margin: 0 0 56px;
          }

          /* ─── SPECTRUM GRID ─── */
          .sd-spectrum-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
          }
          @media (min-width: 900px) {
            .sd-spectrum-layout {
              grid-template-columns: 1.15fr 0.85fr;
              gap: 60px;
              align-items: start;
            }
          }
          .sd-spectrum-intro p {
            font-size: 1rem;
            line-height: 1.7;
            color: rgba(0, 0, 0, 0.55);
            margin: 0 0 40px;
          }
          .sd-feature-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .sd-feature-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 12px;
            padding: 22px 24px;
            display: flex;
            gap: 16px;
            transition: border-color 0.25s, transform 0.25s;
          }
          .sd-feature-card:hover {
            border-color: var(--color-accent-red, #e63946);
            transform: translateX(5px);
          }
          .sd-feature-icon {
            color: var(--color-accent-green, #27ae60);
            flex-shrink: 0;
            margin-top: 2px;
          }
          .sd-feature-card h4 {
            font-size: 1rem;
            font-weight: 700;
            color: #000000ff;
            margin: 0 0 6px;
          }
          .sd-feature-card p {
            font-size: 0.9rem;
            color: rgba(0, 0, 0, 0.5);
            margin: 0;
            line-height: 1.5;
          }
          /* Numbered spectrum items */
          .sd-spectrum-nums {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .sd-spectrum-item {
            border-top: 1px solid rgba(255,255,255,0.08);
            padding: 28px 0;
            display: flex;
            gap: 20px;
            align-items: flex-start;
            cursor: default;
            transition: background 0.2s;
          }
          .sd-spectrum-item:last-child { border-bottom: 1px solid rgba(255,255,255,0.08); }
          .sd-spectrum-item.active {
            background: none;
          }
          .sd-spectrum-num {
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            color: rgba(255,255,255,0.28);
            min-width: 28px;
            padding-top: 3px;
          }
          .sd-spectrum-item.active .sd-spectrum-num {
            color: var(--color-accent-red, #e63946);
          }
          .sd-spectrum-body h4 {
            font-size: 1.05rem;
            font-weight: 700;
            color: #fff;
            margin: 0 0 6px;
          }
          .sd-spectrum-body p {
            font-size: 0.88rem;
            color: rgba(255,255,255,0.48);
            margin: 0;
            line-height: 1.5;
          }
          .sd-spectrum-highlight {
            display: inline-block;
            margin-top: 12px;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--color-accent-red, #e63946);
            cursor: pointer;
          }
          /* Right visual */
          .sd-spectrum-visual {
            position: sticky;
            top: 110px;
          }
          .sd-spectrum-img-wrap {
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.08);
            aspect-ratio: 4/3;
            box-shadow: 0 24px 60px rgba(0,0,0,0.5);
          }
          .sd-spectrum-img-wrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .sd-extra-card {
            margin-top: 24px;
            background: rgba(39,174,96,0.06);
            border: 1px solid rgba(39,174,96,0.18);
            border-radius: 12px;
            padding: 22px 24px;
          }
          .sd-extra-card h5 {
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--color-accent-green, #27ae60);
            margin: 0 0 8px;
            letter-spacing: 0.03em;
          }
          .sd-extra-card p {
            font-size: 0.88rem;
            color: rgba(0, 0, 0, 0.5);
            line-height: 1.5;
            margin: 0;
          }

          /* ─── ADVANTAGES GRID ─── */
          .sd-advantages-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
          @media (min-width: 900px) {
            .sd-advantages-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          .sd-adv-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.07);
            border-radius: 14px;
            padding: 32px 24px;
            display: flex;
            flex-direction: column;
            gap: 14px;
            transition: border-color 0.25s, transform 0.25s;
          }
          .sd-adv-card:hover {
            border-color: rgba(255,255,255,0.2);
            transform: translateY(-4px);
          }
          .sd-adv-icon {
            color: var(--color-accent-red, #e63946);
            width: 48px;
            height: 48px;
            background: rgba(230,57,70,0.1);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sd-adv-card h4 {
            font-size: 1rem;
            font-weight: 700;
            color: #fff;
            margin: 0;
          }
          .sd-adv-card p {
            font-size: 0.88rem;
            color: rgba(255,255,255,0.48);
            margin: 0;
            line-height: 1.5;
          }

          /* ─── METHODOLOGY ─── */
          .sd-method-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 48px;
          }
          @media (min-width: 900px) {
            .sd-method-layout {
              grid-template-columns: 0.85fr 1.15fr;
              gap: 80px;
              align-items: start;
            }
          }
          .sd-method-intro p {
            font-size: 1rem;
            line-height: 1.7;
            color: rgba(255,255,255,0.5);
            margin: 0;
          }
          .sd-method-steps {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .sd-method-step {
            display: flex;
            gap: 20px;
            padding: 22px 0;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            transition: background 0.2s;
          }
          .sd-method-step:first-child { border-top: 1px solid rgba(255,255,255,0.06); }
          .sd-step-num {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.82rem;
            font-weight: 800;
            flex-shrink: 0;
            border: 1.5px solid rgba(255,255,255,0.15);
            color: rgba(255,255,255,0.4);
            transition: all 0.2s;
          }
          .sd-method-step.highlight .sd-step-num {
            background: var(--color-accent-red, #e63946);
            border-color: var(--color-accent-red, #e63946);
            color: #fff;
          }
          .sd-step-body h4 {
            font-size: 1rem;
            font-weight: 700;
            color: #fff;
            margin: 0 0 6px;
          }
          .sd-step-body p {
            font-size: 0.88rem;
            color: rgba(255,255,255,0.48);
            margin: 0;
            line-height: 1.5;
          }

          /* ─── TRUST SECTION ─── */
          .sd-trust-wrap {
            background: linear-gradient(135deg, #161616 0%, #1a1a1a 100%);
            border-radius: 20px;
            overflow: hidden;
          }
          .sd-trust-inner {
            display: grid;
            grid-template-columns: 1fr;
            gap: 0;
          }
          @media (min-width: 900px) {
            .sd-trust-inner {
              grid-template-columns: 1fr 1fr;
            }
          }
          .sd-trust-content {
            padding: 56px 48px;
          }
          .sd-trust-image {
            position: relative;
            min-height: 300px;
          }
          .sd-trust-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .sd-trust-list {
            margin-top: 36px;
            display: flex;
            flex-direction: column;
            gap: 22px;
          }
          .sd-trust-item {
            display: flex;
            gap: 14px;
            align-items: flex-start;
          }
          .sd-trust-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--color-accent-red, #e63946);
            flex-shrink: 0;
            margin-top: 7px;
          }
          .sd-trust-item h5 {
            font-size: 0.95rem;
            font-weight: 700;
            color: #fff;
            margin: 0 0 4px;
          }
          .sd-trust-item p {
            font-size: 0.88rem;
            color: rgba(255,255,255,0.48);
            margin: 0;
            line-height: 1.5;
          }

          /* ─── CTA ─── */
          .sd-cta-strip {
            text-align: center;
            padding: 100px 24px;
            max-width: 700px;
            margin: 0 auto;
          }
          .sd-cta-strip h2 {
            font-size: clamp(2rem, 5vw, 3.2rem);
            font-weight: 900;
            letter-spacing: -0.03em;
            color: #fff;
            margin: 0 0 16px;
          }
          .sd-cta-strip p {
            font-size: 1.05rem;
            color: rgba(255,255,255,0.5);
            margin: 0 0 40px;
            line-height: 1.6;
          }
          .sd-cta-strip .action-btn {
            padding: 16px 44px;
            font-size: 0.9rem;
            letter-spacing: 0.06em;
          }

          /* ─── DIVIDER ─── */
          .sd-divider {
            width: 100%;
            height: 1px;
            background: rgba(255,255,255,0.06);
          }
        `
      }} />

      <div className="sd-root">

        {/* ── HERO ── */}
        <section className="sd-hero">
          <img src={service.image} alt={service.title} className="sd-hero-bg" />
          <div className="sd-hero-overlay" />
          <div className="sd-hero-content">
            <div className="sd-breadcrumb">
              <button onClick={() => navigate('/services')}>
                <ArrowLeft size={14} /> What We Do
              </button>
              <ChevronRight size={12} />
              <span>{service.title}</span>
            </div>
            <span className="sd-hero-eyebrow">{service.tag} · Expertise</span>
            <h1 className="sd-hero-title">{service.title}</h1>
            <p className="sd-hero-sub">{service.subtitle}</p>
          </div>
        </section>

        {/* ── THE SPECTRUM ── */}
        <section className="sd-section-full" style={{ background: 'var(--color-bg, #0d0d0d)' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
            <span className="sd-label">The Spectrum</span>
            <div className="sd-spectrum-layout">

              {/* Left */}
              <div className="sd-spectrum-intro">
                <h2 className="sd-section-heading">
                  Comprehensive digital<br />solutions designed for impact.
                </h2>
                <p>{service.description}</p>

                {/* Feature checklist */}
                <div className="sd-feature-list">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="sd-feature-card">
                      <div className="sd-feature-icon"><CheckCircle2 size={18} /></div>
                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right sticky visual */}
              <div className="sd-spectrum-visual">
                <div className="sd-spectrum-img-wrap">
                  <img src={service.image} alt={service.title} />
                </div>
                {service.extraInfo && (
                  <div className="sd-extra-card">
                    <h5>Operational Execution Note</h5>
                    <p>{service.extraInfo}</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        <div className="sd-divider" />

        {/* ── STRATEGIC ADVANTAGES ── */}
        <section className="sd-section-full" style={{ background: '#0d0d0d' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
            <span className="sd-label">Strategic Advantages</span>
            <h2 className="sd-section-heading" style={{ marginBottom: 48 }}>
              Why it works.
            </h2>
            <div className="sd-advantages-grid">
              {STRATEGIC_ADVANTAGES.map((adv, i) => (
                <div key={i} className="sd-adv-card">
                  <div className="sd-adv-icon">{adv.icon}</div>
                  <h4>{adv.title}</h4>
                  <p>{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sd-divider" />

        {/* ── METHODOLOGY ── */}
        <section className="sd-section-full" style={{ background: '#0d0d0d' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
            <span className="sd-label">Methodology</span>
            <div className="sd-method-layout">

              {/* Left */}
              <div>
                <h2 className="sd-section-heading">
                  The Path to<br />Performance
                </h2>
                <div className="sd-method-intro" style={{ marginTop: 20 }}>
                  <p>
                    Our 5-stage framework is designed to eliminate waste and maximize impact
                    through iterative testing and rigorous strategic alignment.
                  </p>
                </div>
              </div>

              {/* Right steps */}
              <div className="sd-method-steps">
                {METHODOLOGY_STEPS.map((step) => (
                  <div key={step.num} className={`sd-method-step${step.highlight ? ' highlight' : ''}`}>
                    <div className="sd-step-num">{step.num}</div>
                    <div className="sd-step-body">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        <div className="sd-divider" />

        {/* ── WHY TRUST ── */}
        <section className="sd-section-full" style={{ background: '#0d0d0d' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
            <div className="sd-trust-wrap">
              <div className="sd-trust-inner">

                {/* Text side */}
                <div className="sd-trust-content">
                  <span className="sd-label">Why Trust Us</span>
                  <h2 className="sd-section-heading" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
                    Why Trust<br />Ivah Media?
                  </h2>
                  <div className="sd-trust-list">
                    {TRUST_POINTS.map((pt, i) => (
                      <div key={i} className="sd-trust-item">
                        <div className="sd-trust-dot" />
                        <div>
                          <h5>{pt.title}</h5>
                          <p>{pt.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image side */}
                <div className="sd-trust-image">
                  <img src={service.image} alt="Team" />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: '#0d0d0d' }}>
          <div className="sd-cta-strip">
            <span className="sd-label" style={{ display: 'block', marginBottom: 16 }}>Ready to Scale?</span>
            <h2>Book a strategy session<br />with our media architects.</h2>
            <p>No pitch, just value. Let's discuss how we can adapt this framework to your corporate growth goals in the UAE and internationally.</p>
            <button className="action-btn" onClick={() => navigate('/contact')}>
              Get Started
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};