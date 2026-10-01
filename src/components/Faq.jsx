import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import './Faq.css';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  if (!business.faqs || business.faqs.length === 0) {
    return null;
  }

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section section-faq" aria-label="Frequently Asked Questions">
      <div className="container">
        <SectionHeading
          eyebrow="Questions & Answers"
          title="Common queries about working together."
          description="Straightforward answers regarding process, consultation format, and practice focus."
        />

        <div className="faq-list">
          {business.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="faq-answer-panel"
                    role="region"
                  >
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
