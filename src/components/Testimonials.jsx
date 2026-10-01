import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import './Testimonials.css';

/**
 * Testimonials Component
 * Renders ONLY if real testimonials exist in business config.
 * Otherwise returns null to cleanly omit the section without leaving gaps or filler.
 */
export default function Testimonials() {
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section section-testimonials" aria-label="Client Feedback">
      <div className="container">
        <SectionHeading
          eyebrow="Client Endorsements"
          title="What partners say about working with Olivia Dobson."
        />

        <div className="testimonials-grid">
          {business.testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <blockquote className="testimonial-quote">
                “{testimonial.quote}”
              </blockquote>
              <div className="testimonial-author">
                <span className="testimonial-name">{testimonial.name}</span>
                {testimonial.role && (
                  <span className="testimonial-role">{testimonial.role}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
