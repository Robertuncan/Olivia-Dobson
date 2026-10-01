import React from 'react';
import './Button.css';

/**
 * Universal Button component adhering to design system tokens
 * Single-line text, 8px radius, accessible focus rings
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  isExternal = false,
  className = '',
  type = 'button',
  icon = null,
  ...props
}) {
  const classNames = `btn btn-${variant} btn-${size} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        <span>{children}</span>
        {icon && <span className="btn-icon" aria-hidden="true">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="btn-icon" aria-hidden="true">{icon}</span>}
    </button>
  );
}
