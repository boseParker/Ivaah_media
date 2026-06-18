import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Loader2, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Building2,
  Globe
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    service: 'Outdoor Marketing'
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(prev => (prev === idx ? null : idx));
  };

  const faqs = [
    {
      q: 'How fast can an OOH campaign be deployed in the UAE?',
      a: 'Static bridge banners and highway billboard campaigns typically require 10 to 14 business days. This timeframe covers graphic resizing, mandatory Arabic/English localization checks, governmental municipality permit licensing, and physical sheet printing/installation. Programmatic DOOH slots can launch in under 48 hours once digital creative is approved.'
    },
    {
      q: 'What is a Fractional CMO advisory engagement?',
      a: 'Our fractional leadership model places senior GCC growth strategists directly into your operations for 10-30 hours per week. They audit paid search parameters, adjust CAC/LTV structures, direct brand designers, and optimize internal workflows without full-time executive overhead.'
    },
    {
      q: 'Do you manage municipality permits and clearances?',
      a: 'Yes. Ivah Media manages the entire end-to-end municipal permit lifecycle. We handle application drafts, structural safety inspections, bilingual layout reviews, and advertising permit clearances with UAE municipal departments (like Dubai Municipality, RTA, and local development circles).'
    },
    {
      q: 'How do you measure and audit OOH campaign impressions?',
      a: 'We leverage geo-fenced mobile footfall statistics, real-time localized brand search index spikes, and digital tracking tokens. We compile these parameters into transparent audit dashboards, showing the correlation between physical exposures and digital growth.'
    }
  ];

  const officeHubs = [
    {
      city: 'Dubai (HQ)',
      address: 'Boulevard Plaza, Tower 1, Downtown Dubai',
      phone: '+971 4 123 4567',
      hours: 'Mon - Fri, 9:00 AM - 6:00 PM',
      icon: Building2
    },
    {
      city: 'Abu Dhabi',
      address: 'Al Maryah Island, Global Market Square',
      phone: '+971 2 987 6543',
      hours: 'Mon - Fri, 9:00 AM - 6:00 PM',
      icon: Globe
    },
    {
      city: 'Riyadh Hub',
      address: 'King Abdullah Financial District (KAFD), Riyadh',
      phone: '+966 11 234 5678',
      hours: 'Sun - Thu, 9:00 AM - 6:00 PM',
      icon: Building2
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 2000);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      service: 'Outdoor Marketing'
    });
  };

  return (
    <div className="page-contact fade-in">
      {/* SCOPED CONTACT SHEET STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        .page-contact {
          background-color: #0b0d11;
          color: #cbd5e1;
          font-family: 'Montserrat', sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        .page-contact h1, .page-contact h2, .page-contact h3, .page-contact h4 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          color: #ffffff;
        }

        .page-contact .section-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        /* Hero Banner with video */
        .page-contact .contact-hero {
          position: relative;
          min-height: 40vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #0b0d11;
          border-bottom: 1px solid rgba(249, 115, 22, 0.1);
        }

        .page-contact .hero-video-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          opacity: 0.35;
          filter: grayscale(40%);
        }

        .page-contact .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(11, 13, 17, 0.65) 0%, #0b0d11 100%);
          z-index: 2;
        }

        .page-contact .hero-content {
          text-align: center;
          z-index: 10;
          max-width: 800px;
          padding: 0 20px;
        }

        .page-contact .contact-tag {
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

        /* Split layout grid */
        .page-contact .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 60px;
          align-items: flex-start;
        }
        @media (max-width: 991px) {
          .page-contact .contact-layout-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        /* Left side details panel */
        .page-contact .contact-details-side {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .page-contact .contact-lead-text {
          font-size: 1.15rem;
          line-height: 1.6;
          color: #94a3b8;
          margin: 0 0 12px 0;
        }

        .page-contact .info-cards-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .page-contact .info-bento-card {
          background: rgba(30, 41, 59, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          padding: 24px 32px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .page-contact .info-bento-card:hover {
          transform: translateX(6px);
          border-color: rgba(249, 115, 22, 0.2);
          background: rgba(30, 41, 59, 0.3);
        }

        .page-contact .info-icon-box {
          padding: 12px;
          background: rgba(249, 115, 22, 0.08);
          color: #f97316;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .page-contact .info-card-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .page-contact .info-card-text strong {
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          color: #ffffff;
        }
        .page-contact .info-card-text p {
          font-size: 0.95rem;
          color: #94a3b8;
          margin: 0;
        }

        /* Right side glassmorphic form */
        .page-contact .contact-form-side {
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }
        @media (max-width: 600px) {
          .page-contact .contact-form-side {
            padding: 28px;
          }
        }

        .page-contact .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
          position: relative;
        }

        .page-contact .form-label {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          color: #ffffff;
        }

        .page-contact .form-input, .page-contact .form-select, .page-contact .form-textarea {
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
        .page-contact .form-input:focus, .page-contact .form-select:focus, .page-contact .form-textarea:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }

        .page-contact .form-input.error, .page-contact .form-textarea.error {
          border-color: #c0392b;
        }

        .page-contact .error-message {
          font-size: 0.8rem;
          color: #c0392b;
          font-weight: 500;
        }

        .page-contact .submit-btn-contact {
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
        .page-contact .submit-btn-contact:hover {
          background: #ffffff;
          color: #0b0d11;
          box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.2);
        }
        .page-contact .submit-btn-contact:disabled {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.3);
          cursor: not-allowed;
          box-shadow: none;
        }

        /* Success screen */
        .page-contact .success-screen {
          text-align: center;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .page-contact .success-checkmark-box {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(39, 174, 96, 0.1);
          color: #27ae60;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .page-contact .success-title {
          font-size: 1.8rem;
          color: #ffffff;
          margin-bottom: 8px;
        }
        .page-contact .success-desc {
          color: #cbd5e1;
          font-size: 1rem;
          line-height: 1.6;
          max-width: 480px;
          margin: 0 auto;
        }

        .page-contact .reset-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 10px 24px;
          border-radius: 30px;
          cursor: pointer;
          font-family: inherit;
          font-weight: 600;
          transition: all 0.2s;
        }
        .page-contact .reset-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: #cbd5e1;
        }

        /* ---------------------------------------------------- */
        /* REGIONAL OFFICE HUBS                                 */
        /* ---------------------------------------------------- */
        .page-contact .hubs-section {
          margin-top: 80px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 80px;
        }
        .page-contact .hubs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-top: 40px;
        }
        .page-contact .hub-card {
          background: rgba(15, 23, 42, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .page-contact .hub-card:hover {
          border-color: #f97316;
          background: rgba(15, 23, 42, 0.35);
          transform: translateY(-4px);
        }
        .page-contact .hub-header {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #f97316;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
        }
        .page-contact .hub-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.9rem;
          color: #cbd5e1;
          text-align: left;
        }
        .page-contact .hub-details strong {
          color: #ffffff;
        }

        /* ---------------------------------------------------- */
        /* INTERACTIVE FAQ ACCORDIONS                           */
        /* ---------------------------------------------------- */
        .page-contact .faq-section {
          margin-top: 80px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 80px;
          margin-bottom: 40px;
        }
        .page-contact .faq-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 800px;
          margin: 40px auto 0 auto;
        }
        .page-contact .faq-item {
          background: rgba(15, 23, 42, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .page-contact .faq-item:hover {
          border-color: rgba(249, 115, 22, 0.25);
        }
        .page-contact .faq-trigger {
          width: 100%;
          background: transparent;
          border: none;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ffffff;
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          outline: none;
        }
        .page-contact .faq-content {
          padding: 0 24px 20px 24px;
          color: #cbd5e1;
          font-size: 0.9rem;
          line-height: 1.6;
          text-align: left;
        }
      ` }} />

      {/* Hero Header banner */}
      <section className="contact-hero">
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
          <span className="contact-tag">
            <Sparkles size={13} fill="currentColor" /> Strategic Access
          </span>
          <h1 style={{ fontSize: '3.2rem', margin: '0 0 16px 0' }}>Start Your GTM Roadmap</h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.15rem', margin: 0, lineHeight: 1.6 }}>
            Connect with our GCC consulting partners today to establish pre-negotiated OOH concession cards and digital attribution funnels.
          </p>
        </div>
      </section>

      {/* Layout Split Grid */}
      <section className="section-container">
        <div className="contact-layout-grid">
          
          {/* Details Side panel */}
          <div className="contact-details-side">
            <div>
              <span className="contact-tag" style={{ color: '#27ae60', background: 'rgba(39, 174, 96, 0.08)', borderColor: 'rgba(39, 174, 96, 0.25)' }}>
                Direct Briefing
              </span>
              <h2 style={{ fontSize: '2.5rem', margin: '12px 0 16px 0' }}>Let's Coordinate.</h2>
              <p className="contact-lead-text">
                Ivah Media embeds senior partners directly within client operations, eliminating standard broker layers. Send a brief of your project timelines and our leads will review within 24 hours.
              </p>
            </div>

            <div className="info-cards-container">
              <div className="info-bento-card">
                <div className="info-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="info-card-text">
                  <strong>Office Location</strong>
                  <p>Downtown Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="info-bento-card">
                <div className="info-icon-box" style={{ background: 'rgba(39, 174, 96, 0.08)', color: '#27ae60' }}>
                  <Phone size={20} />
                </div>
                <div className="info-card-text">
                  <strong>Consulting Hotline</strong>
                  <p>+971 4 123 4567</p>
                </div>
              </div>

              <div className="info-bento-card">
                <div className="info-icon-box" style={{ background: 'rgba(192, 57, 43, 0.08)', color: '#c0392b' }}>
                  <Mail size={20} />
                </div>
                <div className="info-card-text">
                  <strong>Partner Desk</strong>
                  <p>hello@ivahmedia.ae</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side panel */}
          <div className="contact-form-side">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-active-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="e.g. Tariq Mansoor"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      className="form-input"
                      placeholder="e.g. Al Mansoor Properties"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className={`form-input ${errors.email ? 'error' : ''}`} 
                      placeholder="name@company.ae"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className={`form-input ${errors.phone ? 'error' : ''}`} 
                      placeholder="e.g. +971 50 123 4567"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="service">Service of Interest</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service} 
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Outdoor Marketing">Outdoor Marketing (OOH)</option>
                      <option value="Design & Consulting">Design & Brand Strategy</option>
                      <option value="Digital Marketing">Digital Performance (SEO/Funnel)</option>
                      <option value="Other Services">Other Regional Support</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message Brief *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleChange} 
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      placeholder="Detail your target launch arteries, budget allocation schedules, or operational requirements..."
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn-contact"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                        <span>Dispatching Request...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Proposal Request</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="contact-success-panel"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="success-screen"
                >
                  <div className="success-checkmark-box">
                    <Check size={32} style={{ strokeWidth: 3 }} />
                  </div>
                  <div>
                    <h3 className="success-title">Briefing Received</h3>
                    <p className="success-desc">
                      Thank you. Your campaign dossier has been routed to our partner desk. A GCC growth consultant will reach out via the provided email to coordinate standard roadmaps within 24 hours.
                    </p>
                  </div>
                  <button className="reset-btn" onClick={resetForm}>
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 2. REGIONAL OFFICE HUBS */}
      <section className="section-container" style={{ paddingTop: 0 }}>
        <div className="hubs-section">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="contact-tag" style={{ background: 'rgba(249, 115, 22, 0.06)', color: '#f97316' }}>Global Hubs</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '10px', color: '#ffffff' }}>Our Regional Offices</h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '12px auto 0 auto', lineHeight: 1.5 }}>
              Visit our consulting desks across key GCC commercial epicenters to coordinate OOH concessional allocations in person.
            </p>
          </div>

          <div className="hubs-grid">
            {officeHubs.map((hub, index) => {
              const Icon = hub.icon;
              return (
                <div key={index} className="hub-card">
                  <div className="hub-header">
                    <Icon size={20} />
                    <span>{hub.city}</span>
                  </div>
                  <div className="hub-details">
                    <p><strong>Address:</strong> {hub.address}</p>
                    <p><strong>Hotline:</strong> {hub.phone}</p>
                    <p><strong>Hours:</strong> {hub.hours}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE FAQ ACCORDIONS */}
      <section className="section-container" style={{ paddingTop: 0, paddingBottom: '100px' }}>
        <div className="faq-section">
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span className="contact-tag" style={{ background: 'rgba(249, 115, 22, 0.06)', color: '#f97316' }}>Client Intelligence</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '10px', color: '#ffffff' }}>Frequently Asked Questions</h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '12px auto 0 auto', lineHeight: 1.5 }}>
              Get instant answers to OOH timelines, municipal processes, and fractional executive CMO procedures.
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-trigger"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.q}</span>
                  {activeFaq === index ? <ChevronUp size={16} style={{ color: '#f97316' }} /> : <ChevronDown size={16} />}
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq-content">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
