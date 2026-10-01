/**
 * Business Configuration for Olivia Dobson Consulting
 * 
 * Non-technical configuration file: all site content, contact details,
 * services, images, and brand settings are managed here.
 */

import heroImage from '../assets/images/hero_consultant_1790883135891.jpg';
import aboutImage from '../assets/images/about_consultant_1790883153746.jpg';
import strategyImage from '../assets/images/service_strategy_1790883169864.jpg';
import digitalImage from '../assets/images/service_digital_1790883184801.jpg';

export const business = {
  name: "Olivia Dobson",
  role: "Consultant",
  tagline: "Smart Strategies. Better Business.",
  
  location: {
    city: "Birmingham",
    area: "Birmingham, United Kingdom",
    fullAddress: "First Floor Flat - B, 12 Bierton Road, Birmingham, United Kingdom, B25 8PY",
    postalCode: "B25 8PY",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=12+Bierton+Road+Birmingham+B25+8PY",
  },

  contact: {
    phone: "447481744891",
    phoneDisplay: "+44 7481 744891",
    phoneHref: "tel:447481744891",
    whatsApp: "447481744891",
    whatsAppHref: "https://wa.me/447481744891",
    email: null, // Omitted cleanly per missing detail instructions
  },

  brand: {
    style: "Minimal",
    primaryColor: "#3B184E",
    secondaryColor: "#FFFFFF",
    accentColor: "#6D28D9",
    colors: {
      primary: "#3B184E",
      primaryHover: "#2A0F39",
      accent: "#6D28D9",
      secondary: "#FFFFFF",
      canvas: "#FAFAF9",
      surfaceAlt: "#F4F3F7",
      ink: "#14121A",
      muted: "#5B5668",
      border: "#E5E2EA",
    },
  },

  images: {
    hero: heroImage,
    about: aboutImage,
    strategy: strategyImage,
    digital: digitalImage,
  },

  ctas: {
    primary: {
      label: "Message on WhatsApp",
      href: "https://wa.me/447481744891",
      isExternal: true,
    },
    secondary: {
      label: "Contact Us",
      href: "#contact",
      isExternal: false,
    },
  },

  description: {
    heroSubline: "Independent strategic consulting for businesses looking to sharpen their market position, generate predictable demand, and scale with clarity.",
    aboutShort: "Based in Birmingham, I partner directly with business owners and leadership teams to untangle complex operational challenges and establish focused growth engines.",
    aboutExtended: "Rather than generic templates or bloated slide decks, every engagement is grounded in commercial realities: identifying what drives revenue, eliminating friction in your marketing funnel, and building enduring competitive advantage.",
  },

  usps: [
    {
      number: "01",
      title: "Direct Advisory",
      description: "You work directly with Olivia Dobson on diagnosis and strategy, ensuring high accountability and strategic clarity at every step.",
    },
    {
      number: "02",
      title: "Strategy to Execution",
      description: "From SEO and digital positioning to overall business growth, recommendations are structured for clear commercial return.",
    },
    {
      number: "03",
      title: "Birmingham & UK-Wide",
      description: "Rooted in Birmingham with flexible advisory sessions available in person across the West Midlands or remotely across the UK.",
    },
  ],

  // 12 Services matching the owner's exact portfolio
  services: [
    {
      id: "business-consulting",
      title: "Business Consulting",
      description: "Holistic evaluation of operations, organizational clarity, and profitability to build resilient businesses.",
      category: "Advisory",
      image: strategyImage,
    },
    {
      id: "marketing-consulting",
      title: "Marketing Consulting",
      description: "Targeted campaigns and positioning that reach ideal buyers and maximize return on marketing investment.",
      category: "Growth",
      image: digitalImage,
    },
    {
      id: "seo-consulting",
      title: "SEO Consulting",
      description: "Technical and semantic search engine strategies that place your business in front of high-intent searchers.",
      category: "Search",
      image: strategyImage,
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Cohesive multi-channel digital acquisition systems built for predictable, measurable inbound leads.",
      category: "Digital",
      image: digitalImage,
    },
    {
      id: "business-strategy",
      title: "Business Strategy",
      description: "Long-term strategic roadmap design to navigate changing markets and capitalize on untapped opportunities.",
      category: "Strategy",
      image: strategyImage,
    },
    {
      id: "market-research",
      title: "Market Research",
      description: "Rigorous competitor analysis and customer research to ground every commercial decision in real data.",
      category: "Insights",
      image: digitalImage,
    },
    {
      id: "brand-consulting",
      title: "Brand Consulting",
      description: "Distinctive brand positioning that commands premium pricing and separates your business from competitors.",
      category: "Branding",
      image: strategyImage,
    },
    {
      id: "growth-strategy",
      title: "Growth Strategy",
      description: "Actionable expansion plans identifying your highest-margin products, services, and client segments.",
      category: "Growth",
      image: digitalImage,
    },
    {
      id: "online-business-consulting",
      title: "Online Business Consulting",
      description: "Optimizing e-commerce and digital business models for lower acquisition costs and higher lifetime value.",
      category: "Digital",
      image: strategyImage,
    },
    {
      id: "website-consulting",
      title: "Website Consulting",
      description: "Architectural and conversion-rate guidance to transform your web presence into an active sales driver.",
      category: "Digital",
      image: digitalImage,
    },
    {
      id: "content-strategy",
      title: "Content Strategy",
      description: "Authoritative editorial and messaging frameworks that educate prospects and accelerate sales cycles.",
      category: "Content",
      image: strategyImage,
    },
    {
      id: "business-development",
      title: "Business Development",
      description: "Structured partnership and relationship strategies to open new revenue channels and client relationships.",
      category: "Advisory",
      image: digitalImage,
    },
  ],

  // Testimonials: Omitted cleanly because {{TESTIMONIALS}} was not provided
  testimonials: [],

  faqs: [
    {
      question: "How do consulting engagements typically begin?",
      answer: "We begin with a focused diagnostic review to assess your current commercial position, key friction points, and immediate growth opportunities before agreeing on a clear, scoped action plan.",
    },
    {
      question: "Are consultations conducted in person or remotely?",
      answer: "Both. We conduct in-person strategy sessions in Birmingham and the West Midlands, as well as structured remote advisory sessions for clients across the United Kingdom.",
    },
    {
      question: "Can we focus on specific areas such as SEO or Brand Strategy?",
      answer: "Yes. Engagements are tailored to your requirements, whether you need deep-dive technical guidance on SEO and digital marketing or comprehensive business development strategy.",
    },
    {
      question: "What is the best way to get in touch?",
      answer: "You can send an immediate message via WhatsApp or call +44 7481 744891 to discuss your requirements and schedule an initial consultation.",
    },
  ],

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#why-choose-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};
