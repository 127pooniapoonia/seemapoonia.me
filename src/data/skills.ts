export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Frontend Engineering',
    skills: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML / CSS'],
  },
  {
    name: 'Backend & Data',
    skills: ['Node.js', 'Express', 'Laravel', 'MySQL'],
  },
  {
    name: 'Tooling & Design',
    skills: ['Figma', 'Git', 'Gulp', 'ADA / WCAG'],
  },
  {
    name: 'Leadership & Process',
    skills: [
      'Tech Interviewing',
      'Architecture Design',
      'Agile / Scrum',
      'Code Review',
      'A/B Testing',
      'Sprint Planning',
    ],
  },
];
