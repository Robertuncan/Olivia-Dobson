import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import './Contact.css';

export default function Contact({ selectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService || '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update selected service if changed from outside
  React.useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter a contact number or details.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section section-alt" aria-label="Contact Information">
      <div className="container">
        <div className="contact-grid">
          {/* Column 1: Direct Actions & Address Details */}
          <div className="contact-info-col">
            <SectionHeading
              eyebrow="Get In Touch"
              title="Start a conversation about your business growth."
              description="Whether you have an immediate challenge or are planning a strategic expansion, reach out directly for a candid discussion."
            />

            <div className="contact-direct-actions">
              {/* WhatsApp Primary */}
              <div className="contact-action-item">
                <span className="contact-action-badge">Direct Messaging</span>
                <h4 className="contact-action-title">Message via WhatsApp</h4>
                <p className="contact-action-desc">Fastest response for brief inquiries or setting up a call.</p>
                <Button
                  href={business.ctas.primary.href}
                  isExternal={business.ctas.primary.isExternal}
                  variant="accent"
                  size="md"
                >
                  {business.ctas.primary.label}
                </Button>
              </div>

              {/* Direct Phone */}
              <div className="contact-action-item">
                <span className="contact-action-badge">Direct Line</span>
                <h4 className="contact-action-title">Telephone Consultation</h4>
                <p className="contact-action-desc">Speak directly with Olivia Dobson regarding your requirements.</p>
                <Button
                  href={business.contact.phoneHref}
                  variant="secondary"
                  size="md"
                >
                  Call {business.contact.phoneDisplay}
                </Button>
              </div>
            </div>

            {/* Address & Directions */}
            <div className="contact-address-block">
              <span className="contact-address-label">Practice Location</span>
              <p className="contact-address-text">{business.location.fullAddress}</p>
              <div className="contact-directions-btn">
                <Button
                  href={business.location.mapsUrl}
                  isExternal={true}
                  variant="outline"
                  size="sm"
                >
                  Get Directions on Google Maps ↗
                </Button>
              </div>
            </div>
          </div>

          {/* Column 2: Usable Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="contact-form-title">Send a Strategy Inquiry</h3>
              <p className="contact-form-subtitle">
                Provide a few details about your business and goals. You will receive a direct reply within one business day.
              </p>

              {submitted ? (
                <div className="contact-success-state" role="status">
                  <div className="success-icon" aria-hidden="true">✓</div>
                  <h4 className="success-title">Inquiry Received</h4>
                  <p className="success-message">
                    Thank you, <strong>{formData.name}</strong>. Your message regarding{' '}
                    <strong>{formData.service || 'Consulting'}</strong> has been received. Olivia Dobson will respond shortly via {formData.phone}.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm mt-4"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', service: '', message: '' });
                    }}
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  {errorMsg && (
                    <div className="contact-error-banner" role="alert">
                      {errorMsg}
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Eleanor Vance"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">
                      Phone Number or Preferred Contact *
                    </label>
                    <input
                      id="contact-phone"
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +44 7123 456789"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-service" className="form-label">
                      Service Area of Interest
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select a consulting discipline...</option>
                      {business.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Brief Overview of Current Business or Goals
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us briefly about your business, current bottlenecks, or target growth timeline..."
                      className="form-textarea"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Submit Strategy Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
