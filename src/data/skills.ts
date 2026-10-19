export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Frontend Engineering',
    skills: ['React', 'Redux', 'Redux Thunk', 'Angular 17+ (Signals)', 'RxJS', 'Angular Material', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Material UI'],
  },
  {
    name: 'Backend & Cloud',
    skills: ['Node.js', 'Express', 'AWS Lambda', 'Serverless', 'Python', 'MySQL'],
  },
  {
    name: 'Quality & Observability',
    skills: ['Jest', 'Vitest', 'Playwright', 'Lighthouse', 'ADA / WCAG', 'Datadog', 'Google Analytics', 'Segment', 'Mouseflow'],
  },
  {
    name: 'Leadership & Tooling',
    skills: [
      'Team Leadership',
      'Architecture Design',
      'Tech Interviewing',
      'Sprint Planning',
      'Code Review',
      'AI-assisted Dev (Claude, MCP)',
      'Figma',
    ],
  },
];
