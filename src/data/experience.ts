export interface ExperienceEntry {
  company: string;
  formerName?: string;
  roles: { title: string; period: string }[];
  period: string;
  location?: string;
  built: string[];
  led: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Electrum',
    formerName: 'formerly Pick My Solar India Pvt. Ltd · CleanTech (solar energy & EV)',
    roles: [
      { title: 'Team Lead', period: 'Sep 2024 – Present' },
      { title: 'Senior Frontend Developer', period: 'Apr 2021 – Aug 2024' },
      { title: 'Frontend Developer', period: 'Nov 2019 – Mar 2021' },
    ],
    period: 'Nov 2019 – Present',
    location: 'Hyderabad, India',
    built: [
      'Architected and rebuilt the legacy PHP Control Center admin dashboard as a React application on an atomic-design architecture, with Redux and Context for state. Code splitting, lazy loading and memoization improved speed index by 45.7%.',
      'Built the main customer-facing Angular application, configurable by text, features and theme per partner, so onboarding a new partner takes configuration only (20+ partners onboarded). Implemented A/B split testing, analysed traffic and iterated for better UX, with cross-browser support and ADA compliance throughout.',
      'Implemented configurable HTML-to-PDF generation for customer quotes and invoices.',
      'Designed and built a permission-based RBAC system: admins compose custom roles from granular permissions, and every route, section, field and action is guarded on the frontend.',
      'Designed the architecture of and developed the Installer Dashboard, a self-service portal with organization-based RBAC where installers onboard, manage sub-users, track their assigned leads, set equipment pricing and send quotes across solar, battery, HPWH, EV charger and backup power products.',
      'Designed the architecture of and built the first release of Hubble, the React + Redux lead and operations platform: lead management, bids for home-energy projects, installer reassignment and calculation configurations.',
      'Owned the external Partner Reporting Portal end-to-end across 3 repositories, giving partners role-scoped access to embedded Amazon QuickSight and Looker Studio dashboards. Wrote the PRD and shipped it task by task with Vitest unit tests, using AI-assisted development (Claude with Playwright, Chrome DevTools and Figma MCPs).',
      'Built a full observability stack (Google Analytics, Mouseflow, Datadog, custom event tracking, cookie consent) to map user flows and find conversion drop-offs.',
      'Established frontend security standards — JWT authorization and Google SSO — enforced through PR reviews.',
      'Delivered ADA/WCAG accessibility compliance, including complete keyboard navigation across all applications.',
    ],
    led: [
      'Lead a cross-functional team of 7 (frontend, backend, QA) — sprint planning, LOE estimation, PR-review standards and technical feasibility assessment.',
      'Conduct frontend technical interviews and onboard new engineers.',
      'Defined architecture, prioritization and edge cases for backend services built with the senior backend engineer: a predictive lead-distribution engine ranking thousands of installers, a secure PII file-processing pipeline (CRON, SFTP, AWS Lambda), and a serverless coupon microservice whose first campaign issued 20,000 coupons at a 90% redemption rate.',
      "After launching each product's first version, handed it over to the team and led its continued development as Team Lead.",
      'Own release management and deployments across Dev / UAT / Production environments.',
      'Primary R&D lead for new product problem statements — trusted by executive leadership to scope and prototype novel solutions.',
    ],
  },
  {
    company: 'Wipro Technologies',
    roles: [{ title: 'Project Engineer', period: 'Jul 2018 – Jun 2019' }],
    period: 'Jul 2018 – Jun 2019',
    built: [
      'Developed Angular 2+ web portals for enterprise clients, managing project team databases and workflows.',
      'Reviewed and validated team-built features for quality, correctness, and specification adherence.',
    ],
    led: [],
  },
];
