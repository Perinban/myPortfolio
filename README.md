# Perinban Parameshwaran — Portfolio

Personal portfolio website presenting my data-engineering experience, technical skills, education, projects, and professional content through a React-based interactive interface.

[![Deploy](https://github.com/Perinban/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Perinban/portfolio/actions/workflows/deploy.yml)

## Live site and profiles

- **Portfolio:** [perinban.github.io/portfolio](https://perinban.github.io/portfolio/)
- **GitHub:** [github.com/Perinban](https://github.com/Perinban)
- **LinkedIn:** [linkedin.com/in/perinban-parameshwaran](https://www.linkedin.com/in/perinban-parameshwaran/)
- **Tableau Public:** [Perinban Parameshwaran](https://public.tableau.com/app/profile/perinban.parameshwaran)
- **Email:** [p.perinban@gmail.com](mailto:p.perinban@gmail.com)

## What the site contains

- **About** — engineering background and technical profile.
- **Journey** — professional experience and education timeline.
- **Projects** — selected data engineering, analytics, machine-learning, and software projects.
- **LinkedIn** — selected professional posts and technical content.
- **Contact** — direct contact form and profile links.

## Featured projects

| Project | Main area | Repository / output |
| --- | --- | --- |
| BRICS Gold Trade Analysis | Data engineering, trade analysis, Tableau | [Repository](https://github.com/Perinban/brics-gold-trade-analysis) |
| TalentBliss | Full-stack job platform and data pipelines | [Repository](https://github.com/Perinban/TalentBliss) |
| ReviewXtract | Web scraping, NLP, sentiment and topic analysis | [Repository](https://github.com/Perinban/ReviewXtract) |
| India Weather ML Analysis | Weather analytics, ML, database design, Tableau | [Repository](https://github.com/Perinban/india-weather-ml-analysis) |
| T20 Best XI Analysis | Cricket analytics and Power BI | [Repository](https://github.com/Perinban/t20-best-xi-analysis) |
| Student Database Design | SQL, normalization, relational modeling | [Repository](https://github.com/Perinban/student-database-design) |

## Tech stack

- React 18
- Vite
- Three.js / React Three Fiber
- Tailwind CSS
- Framer Motion
- EmailJS
- GitHub Actions
- GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Production build and preview:

```bash
npm run build
npm run preview
```

Lint checks:

```bash
npm run lint
```

## Repository structure

```text
.
├── public/                # Static assets
├── src/                   # React application source
│   ├── assets/            # Project and UI assets
│   ├── components/        # Reusable UI components
│   └── constants/         # Portfolio content and project metadata
├── .github/workflows/     # GitHub Pages deployment
├── vite.config.js
└── package.json
```

## Deployment

Pushes to `main` run the GitHub Actions deployment workflow. Vite uses the `/portfolio/` base path so the generated application and assets resolve correctly on GitHub Pages.
