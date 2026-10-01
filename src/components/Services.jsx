import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';
import './Services.css';

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories cleanly
  const categories = ['All', ...new Set(business.services.map(s => s.category))];

  const filteredServices = activeCategory === 'All'
    ? business.services
    : business.services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="section section-alt" aria-label="Services Offered">
      <div className="container">
        <div className="services-header-wrapper">
          <SectionHeading
            eyebrow="Areas of Practice"
            title="Strategic advisory tailored to your commercial priorities."
            description="Comprehensive consulting spanning high-level business strategy, digital acquisition, brand positioning, and search engine visibility."
          />

          {/* Interactive Filter Controls (Functional button elements per design constitution) */}
          <div className="services-filter-bar" role="tablist" aria-label="Filter services by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`filter-btn ${activeCategory === category ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Elevated 3-across desktop grid, 1-column mobile */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {/* Quiet footer callout */}
        <div className="services-footer-note">
          <p className="services-note-text">
            Need a bespoke combination of services? Engagements are customized to your team's specific objectives and timelines.
          </p>
          <a href="#contact" className="link-subtle">
            <span>Discuss your requirements</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
