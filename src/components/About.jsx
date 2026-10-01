import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section section-about" aria-label="About the Business">
      <div className="container">
        <div className="about-grid">
          {/* Column 1: Image container */}
          <div className="about-media-col">
            <div className="about-image-card">
              <img
                src={business.images.about}
                alt={`${business.name}, Business Consultant in Birmingham`}
                className="about-image"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="about-caption">
                <span className="about-caption-title">{business.name}</span>
                <span className="about-caption-subtitle">{business.role} · {business.location.city}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Refined Editorial Content */}
          <div className="about-text-col">
            <SectionHeading
              eyebrow="Independent Advisory"
              title="Direct strategic guidance, grounded in commercial reality."
              className="about-heading"
            />

            <div className="about-body">
              <p className="about-paragraph">
                {business.description.aboutShort}
              </p>
              <p className="about-paragraph">
                {business.description.aboutExtended}
              </p>
            </div>

            {/* Quiet metadata markers */}
            <div className="about-meta-row">
              <div className="about-meta-item">
                <span className="about-meta-label">Practice Focus</span>
                <span className="about-meta-val">Business & Digital Strategy</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-label">Base Location</span>
                <span className="about-meta-val">{business.location.city}, United Kingdom</span>
              </div>
              <div className="about-meta-item">
                <span className="about-meta-label">Client Model</span>
                <span className="about-meta-val">Direct Principal Partnership</span>
              </div>
            </div>

            <div className="about-actions">
              <Button
                href={business.ctas.primary.href}
                isExternal={business.ctas.primary.isExternal}
                variant="primary"
                size="md"
              >
                {business.ctas.primary.label}
              </Button>
              <a href="#services" className="link-subtle about-services-link">
                <span>Explore consulting services</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
