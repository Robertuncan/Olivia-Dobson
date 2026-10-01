import React, { useState, useEffect } from 'react';
import { business } from '../config/business';
import Button from './ui/Button';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="navbar-brand" onClick={closeMenu}>
          {business.name}
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          {business.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="navbar-actions">
          <Button
            href={business.ctas.primary.href}
            isExternal={business.ctas.primary.isExternal}
            variant="primary"
            size="sm"
          >
            {business.ctas.primary.label}
          </Button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            className="navbar-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-panel" id="mobile-menu">
          <div className="container navbar-mobile-inner">
            <nav className="navbar-mobile-nav">
              {business.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="navbar-mobile-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="navbar-mobile-cta">
              <Button
                href={business.ctas.primary.href}
                isExternal={business.ctas.primary.isExternal}
                variant="primary"
                size="md"
                className="w-full"
                onClick={closeMenu}
              >
                {business.ctas.primary.label}
              </Button>

              <div className="navbar-mobile-contact">
                <a href={business.contact.phoneHref} className="navbar-mobile-phone">
                  {business.contact.phoneDisplay}
                </a>
                <span className="navbar-mobile-city">{business.location.city}, UK</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
