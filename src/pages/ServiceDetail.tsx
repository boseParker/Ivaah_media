import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
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

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the selected service from our dynamic JSON
  const service = (servicesData.serviceDetailsList as ServiceDetail[]).find(
    (s) => s.id === id
  );

  // Scroll to top when loading the details page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!service) {
    return (
      <div className="section-container" style={{ textAlign: 'center', paddingTop: '150px', minHeight: '60vh' }}>
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
      {/* Embedded Premium Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .detail-page-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 40px 20px 100px;
        }
        .back-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 30px;
        }
        .back-breadcrumbs button {
          background: none;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
          font-weight: 500;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .back-breadcrumbs button:hover {
          color: var(--color-accent-red);
        }
        .detail-page-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
        }
        @media (min-width: 1024px) {
          .detail-page-layout {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
        .detail-info-block {
          display: flex;
          flex-direction: column;
        }
        .detail-tag-badge {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--color-accent-red);
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .detail-page-title {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800;
          color: var(--color-text);
          line-height: 1.1;
          margin-bottom: 16px;
          letter-spacing: -1px;
        }
        .detail-page-subtitle {
          font-size: 1.3rem;
          font-weight: 500;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 30px;
          border-left: 3px solid var(--color-accent-green);
          padding-left: 20px;
        }
        .detail-page-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--color-text-muted);
          margin-bottom: 40px;
        }
        .operational-tracks-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--color-text);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .operational-tracks-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background-color: var(--color-border);
        }
        .detail-tracks-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }
        .detail-track-item {
          background-color: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 24px;
          display: flex;
          gap: 16px;
          transition: all 0.3s ease;
        }
        .detail-track-item:hover {
          transform: translateX(6px);
          border-color: var(--color-accent-red);
          box-shadow: var(--shadow-sm);
        }
        .detail-track-icon {
          color: var(--color-accent-green);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .detail-track-text h4 {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 6px;
          color: var(--color-text);
        }
        .detail-track-text p {
          font-size: 0.95rem;
          line-height: 1.5;
          color: var(--color-text-muted);
          margin: 0;
        }
        .detail-visual-block {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .detail-visual-image-wrapper {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          position: relative;
          aspect-ratio: 16/10;
        }
        .detail-visual-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .detail-note-card {
          background-color: rgba(39, 174, 96, 0.05);
          border: 1px solid rgba(39, 174, 96, 0.15);
          border-radius: 12px;
          padding: 24px;
        }
        .detail-note-card h5 {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--color-accent-green);
          margin-bottom: 8px;
          font-size: 1rem;
        }
        .detail-note-card p {
          font-size: 0.925rem;
          line-height: 1.5;
          color: var(--color-text-muted);
          margin: 0;
        }
        .detail-page-cta {
          display: flex;
          justify-content: flex-start;
          margin-top: 20px;
        }
      `}} />

      <div className="detail-page-container">
        {/* Navigation Breadcrumbs */}
        <div className="back-breadcrumbs">
          <button onClick={() => navigate('/services')}>
            <ArrowLeft size={16} /> What We Do
          </button>
          <ChevronRight size={14} />
          <span>{service.title}</span>
        </div>

        {/* Dynamic Detail Columns */}
        <div className="detail-page-layout">
          
          {/* Left / Primary Text Details */}
          <div className="detail-info-block">
            <span className="detail-tag-badge">{service.tag}</span>
            <h1 className="detail-page-title">{service.title}</h1>
            <h3 className="detail-page-subtitle">{service.subtitle}</h3>
            
            <p className="detail-page-desc">{service.description}</p>
            
            <h3 className="operational-tracks-title">Operational Pipelines</h3>
            
            <div className="detail-tracks-list">
              {service.features.map((feature, idx) => (
                <div key={idx} className="detail-track-item">
                  <div className="detail-track-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div className="detail-track-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right / Sticky Visual Side Area */}
          <div className="detail-visual-block">
            <div className="detail-visual-image-wrapper">
              <img src={service.image} alt={service.title} className="detail-visual-image" />
            </div>

            {service.extraInfo && (
              <div className="detail-note-card">
                <h5>Operational Execution Note</h5>
                <p>{service.extraInfo}</p>
              </div>
            )}

            <div className="detail-note-card" style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}>
              <h5>Ready to start your roadmap?</h5>
              <p style={{ marginBottom: '15px' }}>Let's discuss how we can adapt this framework to your corporate growth goals in the UAE and internationally.</p>
              <button className="action-btn" onClick={() => navigate('/contact')} style={{ width: '100%' }}>
                Get Started
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
