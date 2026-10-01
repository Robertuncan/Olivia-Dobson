import React from 'react';
import './SectionHeading.css';

/**
 * Standardized Section Heading
 * Displays small-caps eyebrow, H2 headline, and optional max-65ch description
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  return (
    <div className={`section-heading section-heading-${align} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
