# Perinban Parameshwaran — Portfolio

Personal engineering portfolio presenting my professional data-engineering background, current systems work, research experience, and selected open-source/software projects.

[![Deploy](https://github.com/Perinban/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Perinban/portfolio/actions/workflows/deploy.yml)

## Live site and profiles

- **Portfolio:** [perinban.github.io/portfolio](https://perinban.github.io/portfolio/)
- **GitHub:** [github.com/Perinban](https://github.com/Perinban)
- **LinkedIn:** [linkedin.com/in/perinban-parameshwaran](https://www.linkedin.com/in/perinban-parameshwaran/)
- **Tableau Public:** [Perinban Parameshwaran](https://public.tableau.com/app/profile/perinban.parameshwaran)
- **Email:** [p.perinban@gmail.com](mailto:p.perinban@gmail.com)

## Current profile

I am a Data Engineer with 6+ years of professional experience in enterprise ETL and data integration, with Ab Initio at the core of my professional background. After completing an M.Sc. in Data Science in Germany and a research appointment at the Helmholtz Centre for Environmental Research (UFZ), I returned to Ab Initio/data engineering at Entual GmbH.

My engineering interests extend into distributed systems, Rust/C++, runtime and memory behavior, GPU computing, and resource-efficient AI infrastructure.

## Site sections

- **About** — professional background and current engineering focus.
- **Journey** — Entual GmbH, UFZ research, M.Sc. Data Science, LTIMindtree, Atos Syntel, and undergraduate education.
- **Technology landscape** — grouped data, distributed, systems, GPU, and AI technologies.
- **Projects** — systems engineering, GPU/AI infrastructure, data engineering, ML, and analytics work.
- **LinkedIn** — selected technical posts.
- **Contact** — direct email/profile links and contact form.

## Featured engineering work

| Project | Main area | Repository |
| --- | --- | --- |
| MetaXuda | CUDA compatibility, Metal, Apple Silicon, GPU runtime | [Repository](https://github.com/Perinban/MetaXuda) |
| Clounar | Rust, local AI tooling, Claude Code / Perplexity bridge | [Repository](https://github.com/Perinban/Clounar) |
| llama.cpp / AXON | KV cache, mmap, Vulkan, LLM runtime work | [AXON branch](https://github.com/Perinban/llama.cpp/tree/axon-dev) |
| TalentBliss | Full-stack job platform and ingestion pipelines | [Repository](https://github.com/Perinban/TalentBliss) |
| ReviewXtract | Web scraping, NLP, topic and sentiment analysis | [Repository](https://github.com/Perinban/ReviewXtract) |

The portfolio also includes selected academic/data projects in trade analysis, weather ML, sports analytics, and relational database design.

## Tech stack

The site itself is built with:

- React 18
- Vite
- Three.js / React Three Fiber / Drei
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

Production build:

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` run the GitHub Actions deployment workflow. Vite uses the `/portfolio/` base path so generated assets resolve correctly on GitHub Pages.
