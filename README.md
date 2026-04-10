# Hiso Dienstleistungen — Corporate Website

A conversion-focused, premium web presence for a German B2B service company operating in security, construction, and facility management. Built to establish credibility, attract qualified leads, and support business development through a professional digital presence.

---

## Overview

Many service companies in Germany still operate without a digital presence that reflects the quality of their work. Hiso Dienstleistungen is positioned as a reliable, professional partner for corporate clients — yet lacked a website capable of communicating that positioning.

This project addresses that gap directly. The result is a modern, performance-optimized website designed with one goal in mind: converting visitors into business inquiries. Every design decision, content structure, and interaction is built around trust-building and lead generation for B2B audiences.

---

## Features

- **Premium UI Design** — Clean, corporate visual language aligned with the German B2B market
- **Conversion-Focused Layout** — Strategic placement of CTAs, trust signals, and contact entry points throughout the page
- **Service-Specific Landing Sections** — Dedicated sections for Security, Construction, and Cleaning services with tailored messaging
- **Framer Motion Animations** — Subtle, professional motion design that enhances perceived quality without distraction
- **Fully Responsive** — Optimized across all screen sizes, with mobile-first layout considerations
- **Performance Optimized** — Built on Next.js App Router with static rendering where applicable for fast load times
- **Type-Safe Codebase** — Full TypeScript coverage across components, data models, and page logic
- **Accessible Markup** — Semantic HTML structure and appropriate ARIA usage throughout

---

## Site Structure

| Section | Purpose |
|---|---|
| **Hero** | High-impact headline, subheadline, and primary CTA — establishes positioning immediately |
| **Services Overview** | Three-column layout presenting Security, Construction, and Cleaning with brief value propositions |
| **Why Hiso** | Trust-building section: years of experience, certifications, client count, and reliability signals |
| **Security Detail** | Dedicated section for security services with expanded service list and sector coverage |
| **Construction Detail** | Project capability overview with scope of work and key differentiators |
| **Cleaning Detail** | Facility management and cleaning offerings, targeting commercial and industrial clients |
| **CTA Section** | Direct contact prompt with phone, email, and inquiry form |
| **Footer** | Legal links, address, and secondary navigation |

---

## Tech Stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Animations** — Framer Motion
- **Deployment** — Vercel

---

## Project Structure

```
hiso-website/
├── app/
│   ├── layout.tsx          # Root layout, metadata, font config
│   ├── page.tsx            # Home page — composes all sections
│   └── globals.css         # Global styles, Tailwind base
├── components/
│   ├── ui/                 # Reusable primitives (Button, Card, Badge)
│   ├── sections/           # Page sections (Hero, Services, CTA, etc.)
│   └── layout/             # Header, Footer, Navigation
├── lib/
│   └── constants.ts        # Site-wide content, service data, contact info
├── public/
│   └── images/             # Optimized assets, logos, service imagery
├── types/
│   └── index.ts            # Shared TypeScript interfaces
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/FerasHB/hiso-website.git
cd hiso-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Status

| Area | Status |
|---|---|
| Hero Section | Complete |
| Services Overview | Complete |
| Security Detail Section | Complete |
| Construction Detail Section | Complete |
| Cleaning Detail Section | Complete |
| Why Hiso / Trust Section | Complete |
| Contact / CTA Section | Complete |
| Animations (Framer Motion) | Complete |
| Mobile Responsiveness | Complete |
| Contact Form with Backend | In Progress |
| SEO Metadata & Structured Data | In Progress |
| Cookie Consent / Imprint / DSGVO | Planned |
| Multi-language Support (DE/EN) | Planned |

---

## Business Context

This project was developed for real-world deployment, not as a demonstration. The primary objectives are:

- **Client Acquisition** — Drive inbound inquiries from commercial and industrial decision-makers
- **Brand Credibility** — Establish Hiso as a trustworthy, established service provider in a competitive market
- **B2B Conversion** — Reduce friction in the inquiry process and move prospects toward direct contact
- **Long-Term Asset** — Serve as the company's primary digital touchpoint for partnerships, tenders, and referrals

The site is designed with the German B2B buyer in mind — a demographic that values clarity, reliability, and professionalism above all else.

---

## License

Private project. All rights reserved.
