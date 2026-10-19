export interface Project {
  title: string;
  summary: string;
  role: string;
  audience: string;
  bullets: string[];
  // Shown as a grid of tiles on the featured (full-width) card
  modules?: { name: string; text: string }[];
  impact?: string;
  stack: string[];
  links?: { href: string; label: string }[];
  // Shown instead of a link when the product sits behind a login
  access?: string;
  featured?: boolean;
}

// Every product except the Partner Portal: architected and shipped v1, then led the team that took it forward
const ARCHITECT_LEAD = 'Architect · v1 Developer · Lead';

export const projects: Project[] = [
  {
    title: 'Control Center',
    summary: "Electrum's central admin platform, migrated from a legacy PHP application to React.",
    role: ARCHITECT_LEAD,
    audience: 'Internal operations & admin teams',
    bullets: [],
    modules: [
      { name: 'Admin Operations', text: 'Manage installer operations.' },
      { name: 'Product', text: 'Onboard new products.' },
      { name: 'Tools', text: 'Downtime configuration, plus mappings: channel partner ↔ installer, installer ↔ product, channel partner ↔ product.' },
      { name: 'User & RBAC', text: 'Custom roles from granular permissions, controlling access to Control Center, Hubble and the Partner Portal.' },
      { name: 'Scheduler', text: 'Scheduling for operations calls.' },
      { name: 'Partner Portal Access', text: 'Onboard external partners to the Partner Portal.' },
    ],
    impact: '45.7% speed index improvement after the PHP → React migration, through code splitting, lazy loading and memoization.',
    stack: ['React', 'JavaScript', 'Redux', 'Context API', 'React Router', 'Material UI', 'Axios', 'REST APIs', 'Jest'],
    access: 'Internal tool · behind company login',
    featured: true,
  },
  {
    title: 'Hubble',
    summary: 'Lead and operations platform the Ops team uses to manage leads end to end.',
    role: ARCHITECT_LEAD,
    audience: 'Operations team',
    bullets: [
      'View and manage leads through their lifecycle.',
      'Provide bids for home-energy projects: solar, batteries, HPWH, EV chargers and backup power.',
      'Manage installer reassignment.',
      'Calculation configurations for operations.',
      'Review panel photos and other photos uploaded by customers.',
    ],
    impact: 'Cut back-and-forth dependency on engineering: Ops now manages and tracks every lead in Hubble on its own, from installer reassignment to reviewing customer-uploaded photos.',
    stack: ['React', 'TypeScript', 'Redux', 'Redux Thunk', 'React Router', 'Material UI', 'Axios'],
    access: 'Internal tool · behind company login',
  },
  {
    title: 'Partner Reporting Portal',
    summary: 'External portal giving partners role-scoped access to embedded reporting and marketing dashboards.',
    role: 'Sole Owner',
    audience: 'External enterprise partners',
    bullets: [
      'Delivered end-to-end across 3 repositories: a new reporting app built from scratch, the Control Center and the backend.',
      'Embedded Amazon QuickSight and Looker Studio dashboards, scoped per partner through the existing Control Center RBAC.',
      'Wrote the PRD, broke it into tasks and shipped each with Vitest unit tests, using AI-assisted development (Claude with Playwright, Chrome DevTools and Figma MCPs).',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Vitest', 'Playwright', 'Amazon QuickSight', 'Looker Studio'],
    access: 'Partner-only · behind login',
  },
  {
    title: 'Installer Dashboard',
    summary: 'Self-service portal where installers onboard, work their assigned leads, price equipment and send quotes to customers, across solar, batteries, heat pump water heaters (HPWH), EV chargers and backup power.',
    role: ARCHITECT_LEAD,
    audience: 'Installers',
    bullets: [
      'Complete onboarding flow for new installers.',
      'Organization-based RBAC: installers are mapped to their organization and manage their own sub-users from profile settings.',
      'Installers see and track every lead assigned to them.',
      'Set their own equipment pricing.',
      'Create and send quotes to customers, then move each deal to the next stage.',
    ],
    stack: ['Angular', 'TypeScript', 'RxJS', 'Angular Material'],
    access: 'Installer-only · behind login',
  },
  {
    title: 'White-label Customer App',
    summary: "Electrum's main customer-facing Angular application, white-labelled for multiple partner platforms.",
    role: ARCHITECT_LEAD,
    audience: 'Homeowners, via partner platforms',
    bullets: [
      'Configurable per partner by text, features and theme.',
      'Implemented configurable HTML-to-PDF generation for customer quotes and invoices.',
      'Implemented A/B split testing, analysed traffic and iterated for better UX.',
      'Cookie preference setup to manage user cookie consent.',
      'Cross-browser support and ADA / WCAG compliance throughout.',
    ],
    impact: '20+ external partners onboarded so far. Onboarding a new partner now takes configuration only, with no new development.',
    stack: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Segment', 'Mouseflow', 'Google Analytics', 'Cookie Consent', 'Datadog', 'WCAG 2.1'],
    access: 'Live on partner platforms · white-labelled per partner',
  },
  {
    title: 'Electrum.co & Solar.com',
    summary: 'Consumer websites: Electrum.co for rooftop solar, home batteries, heat pumps and EV chargers, and Solar.com for residential solar e-commerce on a multi-site architecture.',
    role: ARCHITECT_LEAD,
    audience: 'Homeowners',
    bullets: [
      'Electrum.co: manages deals based on user persona (address, utility provider, product type and installer).',
      'Solar.com: modifies deals based on user location, property type and other attributes.',
      'Integrated Gulp for CSS and JS optimization, with cross-browser support across the multi-site setup.',
      'ADA / WCAG accessibility compliance across both sites.',
    ],
    stack: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Gulp', 'Segment', 'Mouseflow', 'Google Analytics', 'Cookie Consent', 'Datadog', 'WCAG 2.1'],
    links: [
      { href: 'https://electrum.co', label: 'electrum.co' },
      { href: 'https://solar.com', label: 'solar.com' },
    ],
  },
];
