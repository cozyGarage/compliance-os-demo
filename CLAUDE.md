# Compliance - AI RegTech Frontend

## Project Overview
A frontend compliance platform inspired by [verdea.app](https://verdea.app) — an AI-powered RegTech platform for EU regulatory compliance. Built with HTML, CSS (Tailwind), and vanilla JavaScript.

## Tech Stack
- **HTML5** — semantic markup
- **Tailwind CSS** (via CDN) — utility-first styling
- **Vanilla JavaScript** — interactivity, no frameworks
- **No build step** — open `index.html` directly in browser

## Architecture
```
/
├── index.html          # Homepage / landing page
├── features.html       # Features overview
├── frameworks/
│   ├── csrd.html       # CSRD framework page
│   ├── aifmd.html      # AIFMD framework page
│   └── nis2.html       # NIS2 framework page
├── about.html          # About page
├── contact.html        # Contact page
├── signup.html         # Signup page
├── dashboard.html      # App dashboard (demo/mock)
├── css/
│   └── custom.css      # Custom styles beyond Tailwind
├── js/
│   └── main.js         # Shared JS (nav, interactions)
└── assets/
    └── (icons, images)
```

## Design Principles
- Clean, professional, enterprise SaaS aesthetic
- Dark navy / green / white color palette (compliance + sustainability theme)
- Mobile-responsive
- Accessible (WCAG AA)

## Supported Compliance Frameworks
| Framework | Full Name | Domain |
|-----------|-----------|--------|
| CSRD | Corporate Sustainability Reporting Directive | ESG/Sustainability |
| AIFMD | Alternative Investment Fund Managers Directive | Financial regulation |
| NIS2 | Network and Information Security Directive 2 | Cybersecurity |
| CSDD | Corporate Sustainability Due Diligence Directive | Supply chain |
| GDPR | General Data Protection Regulation | Data privacy |

## Commands
- Open in browser: `open index.html`
- Live server (if installed): `npx serve .` or `python3 -m http.server 8000`
