export interface ExperienceEntry {
  company: string;
  formerName?: string;
  title: string;
  period: string;
  built: string[];
  led: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Electrum',
    formerName: 'formerly Pick My Solar India Pvt. Ltd',
    title: 'Sr. Frontend Engineer & Tech Lead',
    period: 'November 2019 – Present',
    built: [
      'Sole architect and developer of Control Center — Electrum\'s React-based internal operations platform, built 0→1. Designed the full UI/UX, established the component architecture, and own every release.',
      'Migrated the legacy PHP monolith to React, improving Speed Index by 45.7% and enabling a modern deployment pipeline.',
      'Built the Angular Dependency Injection widget deployed as a white-label app across LG Solar, Solar.com, and partner platforms.',
      'Implemented JWT-based auth, Google SSO, and end-to-end RBAC across all products.',
      'Authored Electrum\'s internal ADA Compliance standard — the reference document for all frontend accessibility work.',
    ],
    led: [
      'Designed and ran the frontend hiring process end-to-end — wrote the technical rubric, conducted interviews, and onboarded 3+ engineers.',
      'Own sprint planning, release management, and deployments across Dev / UAT / Production environments.',
      'Primary R&D lead for new product problem statements — trusted by executive leadership to scope and prototype novel solutions.',
      'Code review owner for the frontend team; established standards for performance, accessibility, and cross-browser compatibility.',
    ],
  },
  {
    company: 'Wipro Technologies',
    title: 'Project Engineer',
    period: 'July 2018 – June 2019',
    built: [
      'Built an Angular 2+ internal web portal for project data management used across the team.',
      'Created, updated, and reviewed features to ensure QA standards.',
    ],
    led: [
      'Trained in Full Stack Development technologies; collaborated with developer teams to implement and review deliverables.',
    ],
  },
];
