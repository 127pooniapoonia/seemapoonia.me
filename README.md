# seemapoonia.me

Personal portfolio of **Seema Poonia**, Engineering Team Lead (React · Angular · TypeScript), live at **[www.seemapoonia.me](https://www.seemapoonia.me)**.

A fast, single-page site covering who I am, what I've shipped and how to reach me, built with Astro and deployed on Vercel.

## Sections

| Section | What it shows |
|---|---|
| Hero | Title, availability and focus stack |
| About | Summary, career path and skills by group |
| Impact | Headline numbers (animated counters) |
| Projects | Control Center, Hubble, Partner Reporting Portal, Installer Dashboard and more |
| Experience | Roles, what I built and what I led |
| Contact | Contact form that emails me through Resend |

## Tech stack

- **[Astro 5](https://astro.build)** with server output (`output: 'server'`)
- **[Tailwind CSS 3](https://tailwindcss.com)** via `@astrojs/tailwind`
- **Vercel** adapter (`@astrojs/vercel`) for hosting and the API route
- **[Resend](https://resend.com)** for the contact form email
- **`@astrojs/sitemap`**, plus JSON-LD structured data and Open Graph tags in the layout for SEO

## Getting started

Requires Node.js 18+ (use the latest LTS).

```bash
npm install
cp .env.example .env     # then add your Resend API key
npm run dev              # http://localhost:4321
```

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (outputs to `dist/` and `.vercel/output`) |
| `npm run preview` | Preview the production build locally |

## Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key for sending contact-form emails. Create one at [resend.com/api-keys](https://resend.com/api-keys). |

Locally, put it in `.env` (git-ignored). On Vercel, add it under **Project Settings → Environment Variables**.

## Project structure

```
src/
├── components/   Section components (Hero, About, Impact, Projects, Experience, Contact, Header, Footer)
├── data/         Content as typed data (experience.ts, projects.ts, skills.ts)
├── layouts/      Layout.astro: page shell, SEO meta, structured data
├── pages/
│   ├── index.astro
│   └── api/contact.ts   Contact form endpoint (validation, honeypot, Resend)
└── styles/       Global CSS
public/           Static assets: images, résumé PDF, robots.txt, CNAME
```

To update the site's content, edit the files in `src/data/`. Titles, availability text and SEO metadata live in the section components and `src/layouts/Layout.astro`.

## Deployment

The `main` branch deploys automatically to Vercel on every push. Make sure `RESEND_API_KEY` is set in the Vercel project before the contact form is used in production.

## Contact

- Portfolio: [www.seemapoonia.me](https://www.seemapoonia.me)
- LinkedIn: [linkedin.com/in/seema-poonia](https://www.linkedin.com/in/seema-poonia/)
- GitHub: [@127pooniapoonia](https://github.com/127pooniapoonia)
