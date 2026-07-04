# Mykhailo Yartsun — Portfolio

[![CI](https://github.com/yartsun-m/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/yartsun-m/portfolio/actions/workflows/ci.yml)

Personal portfolio website showcasing backend development, AI/ML projects, and academic work.

**Live site:** [yartsun.dev](https://yartsun.dev) (deployed on Vercel)

## Highlights

- **AI Data Analyst App** — Full-stack data platform ([live demo](https://ai-data-analyst-app-sigma.vercel.app))
- **FinTrack** — Personal finance app (backend lead on team project)
- **AI SQL Assistant** — Natural-language PostgreSQL query tool
- Academic projects in Java/RMI, PostgreSQL database design, and OOP

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS + shadcn/ui
- Lucide icons
- GitHub Actions CI

## Getting Started

```bash
npm install
cp .env.example .env   # then set VITE_FORMSPREE_FORM_ID
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Before Deploying

1. **Add your resume** — Place your CV at `public/resume.pdf` (linked from hero and navigation).
2. **Site URL** — Already set to `https://yartsun.dev` in `src/data/portfolio.js` and `index.html`.
3. **Formspree** — Set `VITE_FORMSPREE_FORM_ID` in `.env` (see Contact Form section below).
4. **GitHub profile** — Pin 4–6 repos that match this portfolio (`ai-data-analyst-app`, `portfolio`, FinTrack, etc.).

## Contact Form (Formspree)

The contact form uses [Formspree](https://formspree.io) for direct inbox delivery.

### Setup (one time)

1. Create a free account at [formspree.io](https://formspree.io)
2. **+ New Form** → set notification email to `yartsun.m@gmail.com`
3. Copy your form ID from the integration URL: `https://formspree.io/f/`**`xyzabcde`**
4. Create `.env` in the project root:

```bash
cp .env.example .env
```

5. Set your form ID:

```
VITE_FORMSPREE_FORM_ID=xyzabcde
```

6. Restart the dev server (`npm run dev`)

### Deploy (Vercel / Netlify)

Add the same environment variable in your hosting dashboard:

| Key | Value |
|-----|-------|
| `VITE_FORMSPREE_FORM_ID` | your Formspree form ID |

Redeploy after saving — env vars are baked in at build time.

> **Note:** Formspree may ask you to confirm your email on the first submission from a new domain.

## Contact Form Setup (legacy options)

<details>
<summary>Other providers (optional)</summary>

| Service | Setup |
|---------|-------|
| **Web3Forms** | Set `VITE_CONTACT_FORM_URL=https://api.web3forms.com/submit` |
| **FastAPI endpoint** | Set `VITE_CONTACT_FORM_URL` to your API URL |

</details>

## Project Structure

```
src/
├── data/portfolio.js       # Site config, skills, experience, projects
├── components/portfolio/   # Page sections (Hero, Skills, Experience, …)
├── components/ui/          # shadcn/ui primitives
└── pages/Home.jsx          # Main page layout
.github/workflows/ci.yml    # Lint + build on push/PR
```

## Contact

- **Email:** yartsun.m@gmail.com
- **GitHub:** [yartsun-m](https://github.com/yartsun-m)
- **LinkedIn:** [Mykhailo Yartsun](https://www.linkedin.com/in/mykhailo-yartsun-340679367/)
