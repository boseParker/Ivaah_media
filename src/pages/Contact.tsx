import React, { useState } from 'react';

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
  const [submitted, setSubmitted] = useState(false);

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
      // Simulate submission success
      setSubmitted(true);
    }
  };

  return (
    <div className="page-contact fade-in">
      <section className="contact-section">
        <div className="section-container">
          <div className="contact-layout">
            
            {/* Contact Details */}
            <div className="contact-info-panel">
              <span className="section-tag">GET IN TOUCH</span>
              <h2>Start Your Plan Today</h2>
              <p className="contact-lead-text">
                Have questions about entering the UAE OOH market, or want to discuss fractional CMO leadership? Drop us a line, and our consulting team will reach out within 24 hours.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <strong>📍 Office Address</strong>
                  <p>Downtown Dubai, United Arab Emirates</p>
                </div>
                <div className="contact-detail-item">
                  <strong>📞 Call Us</strong>
                  <p>+971 4 123 4567</p>
                </div>
                <div className="contact-detail-item">
                  <strong>✉️ Email Us</strong>
                  <p>hello@ivahmedia.ae</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-panel">
              {submitted ? (
                <div className="contact-success-state">
                  <div className="success-icon">✓</div>
                  <h3>Thank you!</h3>
                  <p>Your request has been received. Our team will contact you shortly.</p>
                  <button className="reset-btn" onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      message: '',
                      service: 'Outdoor Marketing'
                    });
                  }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className={errors.name ? 'error' : ''} 
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className={errors.email ? 'error' : ''} 
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className={errors.phone ? 'error' : ''} 
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service of Interest</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service} 
                      onChange={handleChange}
                    >
                      <option value="Outdoor Marketing">Outdoor Marketing</option>
                      <option value="Design & Consulting">Design & Consulting</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Other Services">Other Services</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleChange} 
                      className={errors.message ? 'error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  <button type="submit" className="submit-form-btn">
                    Submit Proposal Request
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
