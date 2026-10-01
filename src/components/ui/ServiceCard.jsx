import React from 'react';
import './ServiceCard.css';

/**
 * Elevated Service Card component
 * Large image container with subtle hover zoom, clean unboxed metadata,
 * title, 1-line description, and direct inquiry link
 */
export default function ServiceCard({
  service,
  onSelectService,
}) {
  const { title, description, category, image } = service;

  return (
    <article className="service-card">
      <div className="service-card-media">
        <img
          src={image}
          alt={title}
          className="service-card-img"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="service-card-overlay" aria-hidden="true" />
      </div>

      <div className="service-card-content">
        <div className="service-card-meta">
          <span>{category}</span>
          <span aria-hidden="true">·</span>
          <span>Advisory</span>
        </div>

        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-desc">{description}</p>

        <a
          href="#contact"
          onClick={() => onSelectService && onSelectService(title)}
          className="service-card-action link-subtle"
          aria-label={`Inquire about ${title}`}
        >
          <span>Discuss this service</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
