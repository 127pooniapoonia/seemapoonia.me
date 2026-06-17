export type ProjectRole = 'Sole Owner' | 'Lead' | 'Contributor';

export interface Project {
  title: string;
  role: ProjectRole;
  stack: string[];
  description: string;
  bullets: string[];
  img: string;
  imgAlt: string;
  link?: string;
  linkLabel?: string;
  isInternal?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Control Center',
    role: 'Sole Owner',
    stack: ['React', 'TypeScript'],
    description: "Electrum's internal operations platform — bootstrapped 0→1.",
    bullets: [
      'Sole architect, designer, and developer — designed the full information architecture and built the entire component library from scratch.',
      'Implemented end-to-end RBAC, JWT auth, and Google SSO.',
      'Owner of all releases across Dev / UAT / Production.',
    ],
    img: '/img/control-center.jpg',
    imgAlt: 'Control Center admin dashboard built in React',
    isInternal: true,
  },
  {
    title: 'Dependency Injection Widget',
    role: 'Sole Owner',
    stack: ['Angular', 'TypeScript'],
    description: 'Configurable white-label widget deployed across multiple partner platforms.',
    bullets: [
      'Fully configurable text, colours, and icons per partner platform design needs.',
      'ADA-compliant — meets WCAG 2.1 AA standards for full accessibility.',
      'Implemented configured PDF generation from HTML.',
    ],
    img: '/img/Injection-experience.jpg',
    imgAlt: 'Dependency Injection Angular widget showing solar configuration UI',
    link: 'https://lg.solar.com',
    linkLabel: 'Visit Site',
  },
  {
    title: 'Electrum.co',
    role: 'Lead',
    stack: ['React'],
    description: 'Consumer web app for Rooftop Solar, Home Battery, Heat Pump & EV Charger.',
    bullets: [
      'Manages deals based on user persona — addresses, utility providers, product type, and installers.',
    ],
    img: '/img/electrum.jpg',
    imgAlt: 'Electrum.co consumer web app for solar and home energy products',
    link: 'https://electrum.co',
    linkLabel: 'Visit Site',
  },
  {
    title: 'Solar.com',
    role: 'Lead',
    stack: ['JavaScript', 'Gulp'],
    description: 'Multi-site architecture consumer e-commerce platform.',
    bullets: [
      'Modifies deals based on user location, property type, and other attributes.',
      'Implemented A/B split testing; analysed traffic and iterated for better UX.',
      'Integrated Gulp for CSS & JS optimisation; cross-browser support throughout.',
    ],
    img: '/img/Solar.jpg',
    imgAlt: 'Solar.com e-commerce platform for residential solar',
    link: 'https://solar.com',
    linkLabel: 'Visit Site',
  },
  {
    title: 'ADA Compliance Standard',
    role: 'Sole Owner',
    stack: ['WCAG 2.1'],
    description: "Electrum's internal frontend accessibility reference document.",
    bullets: [
      'Ensures people with disabilities that affect hearing, vision, or physical capacity can access content, navigate, and engage with all UI.',
      'Became the company-wide standard referenced across all frontend accessibility work.',
    ],
    img: '/img/ada-image.jpg',
    imgAlt: 'ADA compliance documentation for web accessibility standards',
    link: 'https://drive.google.com/file/d/1do8DsqI9WFqRZo1S90PqE_Cpb2LqCWw1/view?usp=sharing',
    linkLabel: 'View Document',
  },
];
