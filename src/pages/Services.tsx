import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import servicesData from '../data/servicesData.json';

// Define Interfaces
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

interface DigitalService {
  title: string;
  desc: string;
}

// Sub-Component: Digital Service Card (for the grid of 10 services)
const DigitalServiceCard: React.FC<{ service: DigitalService; index: number }> = ({ service, index }) => {
  return (
    <div className="service-card-digital">
      <div className="service-card-num">{String(index + 1).padStart(2, '0')}</div>
      <h4>{service.title}</h4>
      <p>{service.desc}</p>
    </div>
  );
};

// Sub-Component: Service Card (for the main interactive pillars)
const ServiceCard: React.FC<{
  detail: ServiceDetail;
  isReverse?: boolean;
  onClick: () => void;
}> = ({ detail, isReverse = false, onClick }) => {
  return (
    <div className="service-interactive-card" onClick={onClick}>
      <div className={`pillar-layout ${isReverse ? 'reverse' : ''}`}>
        <div className="pillar-details">
          <span className="pillar-tag">{detail.tag}</span>
          <h3>{detail.title}</h3>
          <p style={{ fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '12px' }}>
            "{detail.subtitle}"
          </p>
          <p>{detail.description}</p>
          <div className="interactive-overlay-link">
            Explore {detail.title} Details <ArrowRight size={16} />
          </div>
        </div>
        <div className="pillar-visual">
          {detail.id === 'outdoor-marketing' ? (
            <div className="gallery-preview">
              <img src="/billboard.png" alt="Billboards" className="gallery-img" />
              <img src="/bridge_banner.png" alt="Bridge Banners" className="gallery-img" />
              <img src="/transit.png" alt="Transit Ads" className="gallery-img" />
              <img src={detail.image} alt="Airport DOOH Mockup" className="gallery-img" />
            </div>
          ) : (
            <div className="flex-center" style={{ width: '100%' }}>
              <img
                src={detail.image}
                alt={detail.title}
                className="showcase-img"
                style={{ borderRadius: '12px', border: '1px solid var(--color-border)', width: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Component
export const Services: React.FC = () => {
  const navigate = useNavigate();

  // Cast JSON data safely
  const { digitalServices, serviceDetailsList } = servicesData as {
    digitalServices: DigitalService[];
    serviceDetailsList: ServiceDetail[];
  };

  const handleOpenDetail = (id: string) => {
    navigate(`/services/${id}`);
  };

  return (
    <div className="page-services fade-in">
      {/* Dynamic Embedded Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .service-interactive-card {
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 24px;
          background-color: var(--color-card-bg);
          box-shadow: var(--shadow-sm);
          position: relative;
          overflow: hidden;
        }
        .service-interactive-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-accent-red);
        }
        .interactive-overlay-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          color: var(--color-accent-red);
          margin-top: 16px;
          font-size: 0.95rem;
          transition: gap 0.2s ease;
        }
        .service-interactive-card:hover .interactive-overlay-link {
          gap: 12px;
        }
        .pillar-layout {
          display: flex;
          gap: 40px;
          align-items: center;
          flex-wrap: wrap;
        }
        .pillar-details {
          flex: 1.2;
          min-width: 320px;
        }
        .pillar-visual {
          flex: 0.8;
          min-width: 320px;
          position: relative;
        }
        .pillar-layout.reverse {
          flex-direction: row-reverse;
        }
      `}} />

      {/* Page Header */}
      <section className="services-hero">
        <div className="section-container">
          <span className="section-tag">SERVICES</span>
          <h1>What We Do</h1>
          <p className="services-intro">
            We deliver visual dominance outdoors and technical precision online. Click any section below to view detailed strategies, custom mockups, and operational details.
          </p>
        </div>
      </section>

      {/* Main Interactive Service Pillars (Pillars 1, 2, 4) */}
      <section className="service-pillar-section" id="outdoor-marketing">
        <div className="section-container">
          {serviceDetailsList.find(s => s.id === 'outdoor-marketing') && (
            <ServiceCard
              detail={serviceDetailsList.find(s => s.id === 'outdoor-marketing')!}
              onClick={() => handleOpenDetail('outdoor-marketing')}
            />
          )}
        </div>
      </section>

      <section className="service-pillar-section alternate-bg" id="design-consulting">
        <div className="section-container">
          {serviceDetailsList.find(s => s.id === 'design-consulting') && (
            <ServiceCard
              detail={serviceDetailsList.find(s => s.id === 'design-consulting')!}
              isReverse={true}
              onClick={() => handleOpenDetail('design-consulting')}
            />
          )}
        </div>
      </section>

      {/* Pillar 3: Digital Marketing (Integrated grid from JSON) */}
      <section className="service-pillar-section" id="digital-marketing">
        <div className="section-container">
          {serviceDetailsList.find(s => s.id === 'digital-marketing') && (
            <div
              className="service-interactive-card"
              onClick={() => handleOpenDetail('digital-marketing')}
              style={{ marginBottom: '40px' }}
            >
              <div className="pillar-layout">
                <div className="pillar-details">
                  <span className="pillar-tag">PILLAR 03</span>
                  <h3>{serviceDetailsList.find(s => s.id === 'digital-marketing')!.title}</h3>
                  <p style={{ fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                    "{serviceDetailsList.find(s => s.id === 'digital-marketing')!.subtitle}"
                  </p>
                  <p>{serviceDetailsList.find(s => s.id === 'digital-marketing')!.description}</p>
                  <div className="interactive-overlay-link">
                    Explore Digital Marketing Details <ArrowRight size={16} />
                  </div>
                </div>
                <div className="pillar-visual flex-center">
                  <img
                    src="/digital_marketing.png"
                    alt="Digital Marketing Analytics"
                    className="showcase-img"
                    style={{ borderRadius: '12px', border: '1px solid var(--color-border)', width: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Grid listing the 10 services dynamically */}
          <div className="digital-cards-grid">
            {digitalServices.map((service, idx) => (
              <DigitalServiceCard key={idx} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="service-pillar-section alternate-bg" id="other-services">
        <div className="section-container">
          {serviceDetailsList.find(s => s.id === 'other-services') && (
            <ServiceCard
              detail={serviceDetailsList.find(s => s.id === 'other-services')!}
              isReverse={true}
              onClick={() => handleOpenDetail('other-services')}
            />
          )}
        </div>
      </section>
    </div>
  );
};
