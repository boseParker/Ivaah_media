import { Building2, ShoppingBag, Car, Plane, UtensilsCrossed, Sparkles } from 'lucide-react';

export const IndustryServices: React.FC = () => {
  const sectors = [
    {
      title: 'Real Estate & Developers',
      desc: 'Securing Sheikh Zayed Road bridge banners and prime highway DOOH concessions for major development launches and luxury community announcements.',
      icon: Building2,
      tag: 'OOH Concessions'
    },
    {
      title: 'Retail, E-Commerce & DTC',
      desc: 'Synchronizing outdoor retail exposure locations with programmatic search retargeting, custom Shopify sales funnels, and performance marketing budgets.',
      icon: ShoppingBag,
      tag: 'Digital Sync'
    },
    {
      title: 'Automotive & Transit',
      desc: 'Creating high-impact full vehicle Metrowraps, transit stickers, and high-frequency city layouts that capture moving traffic demographics across urban arterial roads.',
      icon: Car,
      tag: 'Urban Coverage'
    },
    {
      title: 'Aviation & Hospitality',
      desc: 'Guiding luxury brand openings, VIP events production, and airport digital billboard buys to engage global travelers and local luxury consumers.',
      icon: Plane,
      tag: 'Luxury Buys'
    },
    {
      title: 'Food, Beverage & Leisure',
      desc: 'Optimizing location-based mobile ads and local outdoor placements for restaurant launches, dining networks, and major regional entertainment spots.',
      icon: UtensilsCrossed,
      tag: 'Local Traffic'
    }
  ];

  return (
    <div className="page-industryservices fade-in">
      {/* LOCAL SCOPED STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        .page-industryservices {
          background-color: #080808;
          color: #cbd5e1;
          font-family: 'Montserrat', sans-serif;
          min-height: 100vh;
        }

        .page-industryservices h1, .page-industryservices h2, .page-industryservices h3, .page-industryservices h4 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          color: #ffffff;
        }

        .page-industryservices .industry-hero {
          position: relative;
          min-height: 55vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-image: linear-gradient(to bottom, rgba(8, 8, 8, 0.75) 0%, #080808 100%), url('/bridge_banner.png');
          background-size: cover;
          background-position: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .page-industryservices .hero-content {
          text-align: center;
          z-index: 10;
          max-width: 800px;
          padding: 0 24px;
        }

        .page-industryservices .industry-tag {
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

        .page-industryservices .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 24px;
        }

        /* ---------------------------------------------------- */
        /* BENTO SECTOR GRID                                    */
        /* ---------------------------------------------------- */
        .page-industryservices .bento-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
          margin-top: 50px;
        }

        .page-industryservices .bento-card {
          background: rgba(15, 23, 42, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          padding: 40px 32px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-height: 280px;
          justify-content: space-between;
        }

        .page-industryservices .bento-card:hover {
          border-color: #f97316;
          background: rgba(15, 23, 42, 0.4);
          box-shadow: 0 15px 35px rgba(249, 115, 22, 0.05);
          transform: translateY(-6px);
        }

        .page-industryservices .icon-box {
          align-self: flex-start;
          padding: 12px;
          background: rgba(249, 115, 22, 0.08);
          color: #f97316;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .page-industryservices .card-badge {
          font-family: monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          color: #f97316;
          letter-spacing: 1px;
        }

        .page-industryservices .bento-card h3 {
          font-size: 1.35rem;
          margin: 0;
        }

        .page-industryservices .bento-card p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #94a3b8;
          margin: 0;
        }

        /* ---------------------------------------------------- */
        /* PLAYBOOK SECTION (WHITE THEME)                       */
        /* ---------------------------------------------------- */
        .page-industryservices .playbook-section {
          background-color: #ffffff;
          color: #0f172a;
          padding: 100px 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .page-industryservices .playbook-section h2 {
          color: #0f172a !important;
          font-size: 2.8rem;
          margin-bottom: 16px;
        }

        .page-industryservices .playbook-table-container {
          max-width: 1000px;
          margin: 50px auto 0 auto;
          overflow-x: auto;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
        }

        .page-industryservices .playbook-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.95rem;
        }

        .page-industryservices .playbook-table th {
          background: #f1f5f9;
          color: #0f172a;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          padding: 20px 24px;
          border-bottom: 1px solid #e2e8f0;
        }

        .page-industryservices .playbook-table td {
          padding: 20px 24px;
          border-bottom: 1px solid #e2e8f0;
          color: #475569;
        }

        .page-industryservices .playbook-table tr:last-child td {
          border-bottom: none;
        }

        .page-industryservices .playbook-table tr:hover {
          background: #ffffff;
        }
      ` }} />

      {/* Hero Header */}
      <section className="industry-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="industry-tag">
            <Sparkles size={13} fill="currentColor" /> Market Coverage
          </span>
          <h1 style={{ fontSize: '3.6rem', margin: '0 0 20px 0', lineHeight: 1.15 }}>
            Dominate Your <br />
            <span>Industrial Sector.</span>
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.2rem', margin: 0, lineHeight: 1.6 }}>
            We engineer industry-specific outdoor media campaigns and digital growth channels tailored to GCC audience demographics.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="section-container">
        <div style={{ textAlign: 'center' }}>
          <span className="industry-tag" style={{ background: 'rgba(39, 174, 96, 0.08)', color: '#27ae60', borderColor: 'rgba(39, 174, 96, 0.25)' }}>
            Niche Execution
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '10px' }}>Sectors of Excellence</h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '12px auto 0 auto', lineHeight: 1.5 }}>
            Ivah Media delivers structural volume pricing advantages and compliance support tailored to your business sector.
          </p>
        </div>

        <div className="bento-grid">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div key={idx} className="bento-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="icon-box">
                    <Icon size={22} />
                  </div>
                  <span className="card-badge">{sec.tag}</span>
                </div>
                <div>
                  <h3 style={{ marginBottom: '8px' }}>{sec.title}</h3>
                  <p>{sec.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Playbook Playboard (White Theme Section) */}
      <section className="playbook-section">
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
            GCC Playbook
          </span>
          <h2>Regional Sector Benchmarks</h2>
          <p style={{ color: '#475569', fontSize: '1.15rem', maxWidth: '600px', margin: '12px auto 0 auto', lineHeight: 1.5 }}>
            A baseline reference of recommended outdoor flight schedules and attribution targets across GCC commercial sectors.
          </p>
        </div>

        <div className="playbook-table-container">
          <table className="playbook-table">
            <thead>
              <tr>
                <th>Sector Group</th>
                <th>Avg. OOH Flight</th>
                <th>Localization Rules</th>
                <th>Target Conversion Lift</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Real Estate Developers</strong></td>
                <td>4 - 8 Weeks (Flight)</td>
                <td>High Arabic Prominence</td>
                <td>+120% Search Interest</td>
              </tr>
              <tr>
                <td><strong>E-Commerce & Retail</strong></td>
                <td>2 - 4 Weeks (Continuous)</td>
                <td>Promo Codes / Easy URLs</td>
                <td>+35% Checkout Lift</td>
              </tr>
              <tr>
                <td><strong>Automotive & Transit</strong></td>
                <td>8 - 12 Weeks (Branding)</td>
                <td>Bilingual Specs</td>
                <td>+45% Dealer Leads</td>
              </tr>
              <tr>
                <td><strong>Hospitality & F&B</strong></td>
                <td>2 Weeks (Tactical)</td>
                <td>Cultural Decency Audit</td>
                <td>+80% Footfall Traffic</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
