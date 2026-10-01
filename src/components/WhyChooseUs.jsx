import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section section-why" aria-label="Why Choose Olivia Dobson">
      <div className="container">
        <SectionHeading
          eyebrow="Our Approach"
          title="Built on clarity, accountability, and practical outcomes."
          description="A direct consulting practice centered on delivering measurable business value without layers of intermediaries."
        />

        <div className="why-grid">
          {business.usps.map((usp) => (
            <div key={usp.number} className="why-card">
              <span className="why-card-number">{usp.number}</span>
              <h3 className="why-card-title">{usp.title}</h3>
              <p className="why-card-desc">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
