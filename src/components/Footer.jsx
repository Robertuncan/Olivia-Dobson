import React from 'react';
import { business } from '../config/business';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand & Purpose */}
          <div className="footer-brand-col">
            <a href="#" className="footer-brand-name">
              {business.name}
            </a>
            <p className="footer-tagline">
              {business.tagline}
            </p>
            <p className="footer-location-summary">
              {business.location.area}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-col">
            <span className="footer-col-heading">Navigation</span>
            <ul className="footer-link-list">
              {business.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="footer-services-col">
            <span className="footer-col-heading">Key Disciplines</span>
            <ul className="footer-link-list">
              <li><a href="#services" className="footer-link">Business Consulting</a></li>
              <li><a href="#services" className="footer-link">Marketing Consulting</a></li>
              <li><a href="#services" className="footer-link">SEO Consulting</a></li>
              <li><a href="#services" className="footer-link">Business Strategy</a></li>
              <li><a href="#services" className="footer-link">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="footer-contact-col">
            <span className="footer-col-heading">Direct Contact</span>
            <div className="footer-contact-items">
              <a href={business.ctas.primary.href} className="footer-contact-link" target="_blank" rel="noopener noreferrer">
                WhatsApp: {business.contact.phoneDisplay}
              </a>
              <a href={business.contact.phoneHref} className="footer-contact-link">
                Telephone: {business.contact.phoneDisplay}
              </a>
              <address className="footer-address">
                {business.location.fullAddress}
              </address>
              <a
                href={business.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-directions-link link-subtle"
              >
                <span>Find on Google Maps</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {business.name}. All rights reserved.
          </p>
          <div className="footer-bottom-meta">
            <span>Independent Consultant</span>
            <span aria-hidden="true">·</span>
            <span>Birmingham, B25 8PY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
