import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Clock,
  MapPin,
  Building2,
  Upload,
  Check,
  Loader2,
  Bookmark,
  Award,
  Globe,
  Smile,
  Send
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  dept: 'strategy' | 'performance' | 'creative' | 'operations';
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  outcomes: string[];
}

export const Careers: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  
  // Form States
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formDept, setFormDept] = useState<string>('strategy');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [coverNote, setCoverNote] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<boolean>(false);

  const formRef = useRef<HTMLDivElement | null>(null);

  const departments = [
    { id: 'all', label: 'All Openings' },
    { id: 'strategy', label: 'Strategy & Brand' },
    { id: 'performance', label: 'Digital Performance' },
    { id: 'creative', label: 'Creative & Films' },
    { id: 'operations', label: 'OOH Operations' }
  ];

  const jobs: Job[] = [
    {
      id: 'outdoor-spec',
      title: 'Senior Outdoor Media Specialist',
      dept: 'operations',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '5+ Years GCC Experience',
      description: 'Lead concession procurement, municipality permit workflows, and physical installation timelines across Dubai and Abu Dhabi arteries.',
      outcomes: [
        'Secure Municipality approvals within standard 5-7 business days',
        'Negotiate media cards with key concession owners to reduce client capital outflows',
        'Supervise nighttime billboard wrap installations and coordinate visibility inspections'
      ],
      requirements: [
        'Strong relationships with UAE municipalities (Dubai Municipality, ADM) and public road concessions',
        'Fluency in Arabic and English (written and verbal compliance standards)',
        'Extensive knowledge of large-format outdoor print specs and structural safety clearances'
      ]
    },
    {
      id: 'perf-mgr',
      title: 'Digital Performance Architect',
      dept: 'performance',
      location: 'Dubai, UAE (Hybrid)',
      type: 'Full-time',
      experience: '4+ Years Digital Growth',
      description: 'Engineer high-conversion lead generation frameworks, structured search engine optimizations, and Shopify workflows aligned with client OOH highway footprints.',
      outcomes: [
        'Lower client CAC across ecommerce channels by 20-35%',
        'Deploy cross-channel attribution reporting linking physical OOH flights to digital search lifts',
        'Direct search indexing campaigns capturing regional Arabic/English search queries'
      ],
      requirements: [
        'Deep expertise in Google Ads, Meta Ads Manager, Shopify configurations, and GA4 tracking setups',
        'Strong analytics background with focus on LTV/CAC modeling and cohort reporting',
        'Experience executing localized middle-east search funnels'
      ]
    },
    {
      id: 'art-dir',
      title: 'Cinematic Creative Director',
      dept: 'creative',
      location: 'Dubai, UAE',
      type: 'Full-time',
      experience: '6+ Years Ad Production',
      description: 'Shape the visual narratives for premium client commercials and high-impact digital DOOH billboard designs.',
      outcomes: [
        'Lead concept-to-post pipelines for 15s/30s broadcast-quality commercials',
        'Implement "3-second rule" driver contrast design guidelines across static highway bridge banners',
        'Collaborate with fractional brand strategists to build unified identity guides'
      ],
      requirements: [
        'Expert portfolio featuring luxury brand campaigns, ad film scripts, or regional lifestyle videos',
        'Fluency in modern design ecosystems (Adobe Premiere, After Effects, Figma, Photoshop)',
        'Understanding of local cultural nuances and Middle Eastern brand aesthetics'
      ]
    },
    {
      id: 'brand-con',
      title: 'Fractional Brand Consultant',
      dept: 'strategy',
      location: 'Dubai, UAE (Remote-Friendly)',
      type: 'Contract / Partner-track',
      experience: '8+ Years GCC Brand Advisory',
      description: 'Embed within client leadership circles as a fractional chief marketing officer, designing corporate go-to-market roadmaps and GCC market entry blueprints.',
      outcomes: [
        'Establish baseline commercial goals and KPIs before campaign kickoffs',
        'Draft complete go-to-market frameworks for international retail/real estate companies entering the GCC',
        'Guide cross-channel budget allocation schedules'
      ],
      requirements: [
        'Proven history advising GCC corporate circles, developers, or sovereign portfolios',
        'Background in financial modeling, commercial GTM strategy, or venture acceleration',
        'Strong public presentation skills and strategic advocacy'
      ]
    }
  ];

  const filteredJobs = selectedDept === 'all' 
    ? jobs 
    : jobs.filter(j => j.dept === selectedDept);

  const handleApplyClick = (jobDept: string) => {
    setFormDept(jobDept);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 2000);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setCoverNote('');
    setUploadedFile(null);
    setFormSubmitted(false);
  };

  return (
    <div className="page-careers fade-in">
      {/* LOCAL CAREERS STYLE SHEET */}
      <style dangerouslySetInnerHTML={{ __html: `
        .page-careers {
          background-color: #0b0d11;
          color: #cbd5e1;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        .page-careers h1, .page-careers h2, .page-careers h3, .page-careers h4 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .page-careers .section-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 24px;
        }

        /* ---------------------------------------------------- */
        /* HERO SECTION                                         */
        /* ---------------------------------------------------- */
        .page-careers .careers-hero {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #0b0d11;
          border-bottom: 1px solid rgba(249, 115, 22, 0.1);
        }

        .page-careers .hero-video-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          opacity: 0.55;
          filter: grayscale(40%);
        }

        .page-careers .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(11, 13, 17, 0.65) 0%, #0b0d11 100%);
          z-index: 2;
        }

        .page-careers .hero-grid-lines {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(249, 115, 22, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 115, 22, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 3;
        }

        .page-careers .hero-content-wrapper {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          padding: 0 20px;
        }

        .page-careers .careers-tag {
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
          margin-bottom: 24px;
        }

        .page-careers .hero-title-main {
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          line-height: 1.1;
          margin-bottom: 24px;
          font-weight: 800;
          color: #ffffff;
        }
        .page-careers .hero-title-main span {
          color: #f97316;
        }

        .page-careers .hero-desc-main {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #cbd5e1;
          margin-bottom: 40px;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
        }

        .page-careers .cta-btn-careers {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #f97316;
          color: #ffffff;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          padding: 14px 32px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 30px -10px rgba(249, 115, 22, 0.5);
        }
        .page-careers .cta-btn-careers:hover {
          background-color: #ffffff;
          color: #0b0d11;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px -10px rgba(255, 255, 255, 0.2);
        }

        /* ---------------------------------------------------- */
        /* BENTO CULTURE GRID                                   */
        /* ---------------------------------------------------- */
        .page-careers .culture-section {
          background-color: #080a0d;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .page-careers .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(180px, auto);
          gap: 24px;
          margin-top: 48px;
        }
        @media (max-width: 991px) {
          .page-careers .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .page-careers .bento-grid {
            grid-template-columns: 1fr;
          }
        }

        .page-careers .bento-card {
          background: rgba(30, 41, 59, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .page-careers .bento-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .page-careers .bento-card.large {
          grid-column: span 2;
        }
        @media (max-width: 991px) {
          .page-careers .bento-card.large {
            grid-column: span 1;
          }
        }

        .page-careers .bento-icon-wrapper {
          align-self: flex-start;
          padding: 12px;
          border-radius: 12px;
          background: rgba(249, 115, 22, 0.08);
          color: #f97316;
          margin-bottom: 24px;
        }
        .page-careers .bento-card.red .bento-icon-wrapper {
          background: rgba(192, 57, 43, 0.08);
          color: #c0392b;
        }
        .page-careers .bento-card.green .bento-icon-wrapper {
          background: rgba(39, 174, 96, 0.08);
          color: #27ae60;
        }

        .page-careers .bento-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }
        .page-careers .bento-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #94a3b8;
          margin: 0;
        }

        /* ---------------------------------------------------- */
        /* OPEN ROLES TAB LISTING                               */
        /* ---------------------------------------------------- */
        .page-careers .roles-section {
          background-color: #0b0d11;
        }

        .page-careers .dept-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-bottom: 48px;
        }

        .page-careers .dept-tab-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 12px 24px;
          border-radius: 30px;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: #cbd5e1;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .page-careers .dept-tab-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .page-careers .dept-tab-btn.active {
          background: #ffffff;
          border-color: #ffffff;
          color: #0b0d11;
        }

        .page-careers .jobs-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 900px;
          margin: 0 auto;
        }

        .page-careers .job-row-item {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .page-careers .job-row-item:hover {
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        .page-careers .job-row-item.expanded {
          border-color: #f97316;
          box-shadow: 0 10px 30px rgba(249, 115, 22, 0.05);
        }

        .page-careers .job-header-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 32px;
          cursor: pointer;
          width: 100%;
          background: transparent;
          border: none;
          text-align: left;
        }
        @media (max-width: 600px) {
          .page-careers .job-header-trigger {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            padding: 20px;
          }
        }

        .page-careers .job-meta-left h3 {
          font-size: 1.35rem;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .page-careers .job-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .page-careers .job-tag {
          font-family: monospace;
          font-size: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          color: #cbd5e1;
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .page-careers .job-trigger-right {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #94a3b8;
        }

        .page-careers .job-details-expandable {
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          padding: 32px;
          background: rgba(15, 23, 42, 0.3);
        }
        @media (max-width: 600px) {
          .page-careers .job-details-expandable {
            padding: 20px;
          }
        }

        .page-careers .job-detail-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          margin-bottom: 28px;
        }
        @media (max-width: 768px) {
          .page-careers .job-detail-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        .page-careers .job-bullet-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 12px;
        }
        .page-careers .job-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: #cbd5e1;
          line-height: 1.5;
        }
        .page-careers .job-bullet-item svg {
          color: #27ae60;
          margin-top: 3px;
          flex-shrink: 0;
        }

        /* ---------------------------------------------------- */
        /* APPLICATION PORTAL GLASSMORPHIC FORM                */
        /* ---------------------------------------------------- */
        .page-careers .application-section {
          background-color: #080a0d;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .page-careers .form-card-wrapper {
          max-width: 720px;
          margin: 0 auto;
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
        }
        @media (max-width: 600px) {
          .page-careers .form-card-wrapper {
            padding: 28px;
          }
        }

        .page-careers .form-row-two {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        @media (max-width: 600px) {
          .page-careers .form-row-two {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .page-careers .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .page-careers .form-label {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          color: #ffffff;
        }

        .page-careers .form-input, .page-careers .form-select, .page-careers .form-textarea {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 12px 16px;
          font-family: inherit;
          font-size: 0.95rem;
          color: #ffffff;
          outline: none;
          transition: all 0.2s;
        }
        .page-careers .form-input:focus, .page-careers .form-select:focus, .page-careers .form-textarea:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }

        .page-careers .file-upload-dragzone {
          border: 2px dashed rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.01);
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .page-careers .file-upload-dragzone:hover, .page-careers .file-upload-dragzone.drag-over {
          border-color: #f97316;
          background: rgba(249, 115, 22, 0.02);
        }

        .page-careers .submit-btn-portal {
          width: 100%;
          background: #f97316;
          color: #ffffff;
          border: none;
          padding: 14px;
          border-radius: 8px;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 10px 25px -5px rgba(249, 115, 22, 0.4);
        }
        .page-careers .submit-btn-portal:hover {
          background: #ffffff;
          color: #0b0d11;
          box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.2);
        }
        .page-careers .submit-btn-portal:disabled {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.3);
          cursor: not-allowed;
          box-shadow: none;
        }

        .page-careers .success-screen {
          text-align: center;
          padding: 30px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .page-careers .success-checkmark-box {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(39, 174, 96, 0.1);
          color: #27ae60;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .page-careers .success-title {
          font-size: 1.8rem;
          color: #ffffff;
          margin-bottom: 8px;
        }
        .page-careers .success-desc {
          color: #cbd5e1;
          font-size: 1rem;
          line-height: 1.6;
          max-width: 480px;
          margin: 0 auto 12px auto;
        }
` }} />

      {/* 1. HERO BANNER */}
      <section className="careers-hero">
        <video 
          className="hero-video-bg"
          src="/hero.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        <div className="hero-overlay" />
        <div className="hero-grid-lines" />

        <div className="hero-content-wrapper">
          <span className="careers-tag">
            <Sparkles size={13} /> We're Hiring
          </span>
          <h1 className="hero-title-main">
            Constructing the Future of <br />
            <span>GCC Media & Performance.</span>
          </h1>
          <p className="hero-desc-main">
            Join a fiercely independent, partner-led team accelerating commercial growth in the UAE. We eliminate traditional agency bureaucracy and align every strategy directly to client ROI.
          </p>
          <button 
            className="cta-btn-careers"
            onClick={() => {
              document.getElementById('roles-listing')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Open Roles <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 2. BENTO BENEFITS SECTION */}
      <section className="culture-section">
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="careers-tag">Working Model</span>
            <h2 style={{ fontSize: '2.8rem', marginTop: '10px' }}>Why Build With Ivah?</h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '16px auto 0 auto', lineHeight: 1.5 }}>
              We foster autonomous strategic advocacy, senior-led project support, and direct responsibility for high-fidelity GCC accounts.
            </p>
          </div>

          <div className="bento-grid">
            <div className="bento-card">
              <div>
                <div className="bento-icon-wrapper">
                  <Award size={20} />
                </div>
                <h3 className="bento-title">Fiercely Independent</h3>
                <p className="bento-desc">Answer only to the client success, not external networks or broker constraints.</p>
              </div>
            </div>

            <div className="bento-card large red">
              <div>
                <div className="bento-icon-wrapper">
                  <Users size={20} />
                </div>
                <h3 className="bento-title">Senior Consultant Embed</h3>
                <p className="bento-desc">Collaborate side-by-side with partners bringing 8-15+ years of GCC brand experience, bypassing standard agency hierarchy levels.</p>
              </div>
            </div>

            <div className="bento-card green">
              <div>
                <div className="bento-icon-wrapper">
                  <Globe size={20} />
                </div>
                <h3 className="bento-title">Bilingual Scope</h3>
                <p className="bento-desc">Operate natively in cultural compliance and copywriter-driven Arabic & English campaign execution.</p>
              </div>
            </div>

            <div className="bento-card">
              <div>
                <div className="bento-icon-wrapper">
                  <Clock size={20} />
                </div>
                <h3 className="bento-title">Fractional CMO Velocity</h3>
                <p className="bento-desc">Onboard with modern client partners who value performance metrics, agility, and prompt execution over simple placements.</p>
              </div>
            </div>

            <div className="bento-card">
              <div>
                <div className="bento-icon-wrapper">
                  <Building2 size={20} />
                </div>
                <h3 className="bento-title">Prime Hub Locations</h3>
                <p className="bento-desc">Serving luxury real estate developers, B2B enterprises, and municipality activations from our core UAE setup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ROLES INTERACTIVE FILTER SECTION */}
      <section className="roles-section" id="roles-listing">
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="careers-tag">Current Briefs</span>
            <h2 style={{ fontSize: '2.8rem', marginTop: '10px' }}>Active Openings</h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '16px auto 0 auto', lineHeight: 1.5 }}>
              Filter by department to explore active team additions. All roles are based out of or aligned with our UAE operations.
            </p>
          </div>

          <div className="dept-tabs">
            {departments.map((d) => (
              <button
                key={d.id}
                className={`dept-tab-btn ${selectedDept === d.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedDept(d.id);
                  setExpandedJobId(null);
                }}
              >
                {d.label}
              </button>
            ))}
          </div>

          <div className="jobs-accordion-list">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => {
                  const isExpanded = expandedJobId === job.id;
                  return (
                    <motion.div
                      layout
                      key={job.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      className={`job-row-item ${isExpanded ? 'expanded' : ''}`}
                    >
                      <button 
                        className="job-header-trigger"
                        onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                      >
                        <div className="job-meta-left">
                          <h3>{job.title}</h3>
                          <div className="job-tags-wrap">
                            <span className="job-tag">
                              <MapPin size={11} /> {job.location}
                            </span>
                            <span className="job-tag">
                              <Building2 size={11} /> {job.type}
                            </span>
                            <span className="job-tag">
                              <Clock size={11} /> {job.experience}
                            </span>
                          </div>
                        </div>

                        <div className="job-trigger-right">
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={20} />
                          </motion.div>
                        </div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="job-details-expandable"
                          >
                            <div className="job-detail-grid">
                              <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Role Profile</h4>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#475569', margin: 0 }}>
                                  {job.description}
                                </p>

                                <h4 style={{ fontSize: '1.1rem', marginTop: '24px', marginBottom: '8px' }}>Key Outcomes</h4>
                                <div className="job-bullet-list">
                                  {job.outcomes.map((o, idx) => (
                                    <div key={idx} className="job-bullet-item">
                                      <CheckCircle2 size={14} />
                                      <span>{o}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Requirements</h4>
                                <div className="job-bullet-list">
                                  {job.requirements.map((r, idx) => (
                                    <div key={idx} className="job-bullet-item">
                                      <Bookmark size={14} style={{ color: '#f97316', marginTop: '3px', flexShrink: 0 }} />
                                      <span>{r}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '24px', textAlign: 'right' }}>
                              <button 
                                className="cta-btn-careers"
                                style={{ padding: '10px 24px', fontSize: '0.9rem' }}
                                onClick={() => handleApplyClick(job.dept)}
                              >
                                Apply For This Position <ArrowRight size={14} />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <div style={{ textAlign: 'center', padding: '48px', color: '#64748b' }}>
                  <Smile size={32} style={{ marginBottom: '12px', strokeWidth: 1.5 }} />
                  <p style={{ margin: 0 }}>No active briefs in this category. Apply speculatively below.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. APPLICATION GLASSMORPHIC PORTAL FORM */}
      <section className="application-section" ref={formRef}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="careers-tag">Portal Entry</span>
            <h2 style={{ fontSize: '2.8rem', marginTop: '10px' }}>Submit Your Dossier</h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '16px auto 0 auto', lineHeight: 1.5 }}>
              Ready to construct GTM plans with senior leaders? Fill out the portal fields below and attach your CV or portfolio link.
            </p>
          </div>

          <div className="form-card-wrapper">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  key="careers-apply-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                >
                  <div className="form-row-two">
                    <div className="form-group">
                      <label className="form-label" htmlFor="full-name">Full Name *</label>
                      <input 
                        type="text" 
                        id="full-name" 
                        required
                        className="form-input"
                        placeholder="e.g. Tariq Mansoor"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email-address">Email Address *</label>
                      <input 
                        type="email" 
                        id="email-address" 
                        required
                        className="form-input"
                        placeholder="name@company.ae"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-row-two">
                    <div className="form-group">
                      <label className="form-label" htmlFor="target-dept">Target Department</label>
                      <select 
                        id="target-dept" 
                        className="form-select"
                        value={formDept}
                        onChange={(e) => setFormDept(e.target.value)}
                      >
                        <option value="strategy">Strategy & Brand</option>
                        <option value="performance">Digital Performance</option>
                        <option value="creative">Creative & Films</option>
                        <option value="operations">OOH Operations</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="portfolio-link">Portfolio URL (Optional)</label>
                      <input 
                        type="url" 
                        id="portfolio-link" 
                        className="form-input"
                        placeholder="https://behance.net/profile"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Attach Resume / CV *</label>
                    <div 
                      className={`file-upload-dragzone ${dragOver ? 'drag-over' : ''}`}
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleFileDrop}
                      onClick={() => document.getElementById('resume-file')?.click()}
                    >
                      <Upload size={24} style={{ color: uploadedFile ? '#27ae60' : '#f97316' }} />
                      {uploadedFile ? (
                        <div style={{ color: '#27ae60', fontWeight: 600 }}>
                          Attached: {uploadedFile}
                        </div>
                      ) : (
                        <div style={{ color: '#64748b', fontSize: '0.85rem' }}>
                          Drag & drop file here or <span style={{ color: '#f97316', fontWeight: 600 }}>browse</span> <br />
                          Supports PDF, DOCX (Max 10MB)
                        </div>
                      )}
                      <input 
                        type="file" 
                        id="resume-file" 
                        style={{ display: 'none' }} 
                        accept=".pdf,.docx"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="cover-note">Cover Note (Include key GCC campaign highlights) *</label>
                    <textarea 
                      id="cover-note" 
                      rows={4}
                      required
                      className="form-textarea"
                      placeholder="Outline your OOH permittings experience or digital channel successes..."
                      value={coverNote}
                      onChange={(e) => setCoverNote(e.target.value)}
                    />
                  </div>

                  <div style={{ marginTop: '32px' }}>
                    <button 
                      type="submit" 
                      className="submit-btn-portal"
                      disabled={isSubmitting || !uploadedFile}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="spinner" size={18} style={{ animation: 'spin 1s linear infinite' }} />
                          <span>Dispatching Dossier...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="careers-success-screen"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="success-screen"
                >
                  <div className="success-checkmark-box">
                    <Check size={36} style={{ strokeWidth: 3 }} />
                  </div>
                  <div>
                    <h3 className="success-title">Dossier Dispatched Successfully</h3>
                    <p className="success-desc">
                      Thank you, {fullName}. Our senior partners have received your dossier. If your regional GTM expertise aligns with our active briefs, we will schedule a direct alignment interview within 72 hours.
                    </p>
                  </div>
                  <button 
                    onClick={resetForm}
                    className="dept-tab-btn"
                    style={{ background: '#0f172a', color: '#ffffff', borderColor: '#0f172a' }}
                  >
                    Submit Another Dossier
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};
