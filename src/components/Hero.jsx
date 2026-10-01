import React from 'react';
import { business } from '../config/business';
import Button from './ui/Button';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Introduction">
      {/* Background Image Container with Measured Tonal Scrim */}
      <div className="hero-bg-container">
        <img
          src={business.images.hero}
          alt={`Olivia Dobson consulting office`}
          className="hero-bg-image"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        <div className="hero-tonal-overlay" aria-hidden="true" />
      </div>

      <div className="container hero-content-wrapper">
        <div className="hero-content">
          {/* Eyebrow: City + Business Type */}
          <div className="hero-eyebrow-wrapper">
            <span className="hero-eyebrow">
              {business.location.city} · {business.role}
            </span>
          </div>

          {/* Large confident H1 headline */}
          <h1 className="hero-title">{business.tagline}</h1>

          {/* One short supporting line */}
          <p className="hero-subtitle">{business.description.heroSubline}</p>

          {/* Primary CTA + Secondary CTA */}
          <div className="hero-actions">
            <Button
              href={business.ctas.primary.href}
              isExternal={business.ctas.primary.isExternal}
              variant="accent"
              size="lg"
            >
              {business.ctas.primary.label}
            </Button>

            <Button
              href={business.ctas.secondary.href}
              variant="secondary"
              size="lg"
            >
              {business.ctas.secondary.label}
            </Button>
          </div>

          {/* Quiet trust line below based on real info */}
          <div className="hero-trustline">
            <span className="hero-trust-item">{business.location.area}</span>
            <span className="hero-trust-separator" aria-hidden="true">·</span>
            <span className="hero-trust-item">Direct Partner Advisory</span>
            <span className="hero-trust-separator" aria-hidden="true">·</span>
            <a href={business.contact.phoneHref} className="hero-trust-link">
              {business.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
