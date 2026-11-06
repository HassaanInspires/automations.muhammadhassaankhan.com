# AutoPost — AI-Powered Facebook Automation Portal

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-ff0055?style=flat&logo=framer)](https://www.framer.com/motion/)

A production-grade, Awwwards-tier web portal for a personal Facebook automation engine. Designed with a "weightless" glassmorphic aesthetic, strict light/dark semantic theming, fluid Framer Motion transitions, and a dynamic legal documentation layout with an auto-generating Table of Contents.

🌐 **Production Domain:** [automations.muhammadhassaankhan.com](https://automations.muhammadhassaankhan.com)

---

## ✨ Features

- **Awwwards SOTD Design System**:
  - Two-part stacked shadow physics (`contact` + `ambient` shadows).
  - GPU-accelerated cursor spotlight border tracking (`SpotlightCard`).
  - Subtle frosted glassmorphism (`backdrop-blur-xl`, double-bezel borders).
  - Single refined accent palette with high-contrast typography.
- **Dynamic Legal Suite & TOC**:
  - Fully compliant with Meta Graph API developer requirements.
  - Two-column responsive desktop layout (`LegalLayout`).
  - Client-side Table of Contents (`TOC`) that auto-scans `<h2>` tags, sets anchor slugs, and tracks active scroll position via `IntersectionObserver`.
- **Pages Included**:
  - `/` — Homepage hero with live automation telemetry preview.
  - `/privacy` — Privacy Policy (Meta Graph API & DeepSeek API compliance).
  - `/terms` — Terms of Service (personal use & liability provisions).
  - `/data-deletion` — User Data Deletion callback & settings revocation guide.
- **Micro-Interactions & Accessibility**:
  - Tactile theme switcher (`next-themes`) with rotating Sun/Moon glyphs.
  - Floating pill navigation (`Navbar`) with persistent `layoutId` indicator.
  - Strict adherence to `prefers-reduced-motion`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+

### Installation
```bash
# Clone the repository
git clone https://github.com/HassaanInspires/automations.muhammadhassaankhan.com.git
cd automations.muhammadhassaankhan.com

# Install dependencies
npm install

# Run the local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router, React 18, Server Components)
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Motion:** Framer Motion + GSAP
- **Theming:** next-themes
- **Icons:** Lucide React

---

## 📄 Contact & Ownership

- **Author:** Muhammad Hassaan Khan
- **Email:** [m.hassaankhan.official@gmail.com](mailto:m.hassaankhan.official@gmail.com)
- **Domain:** [automations.muhammadhassaankhan.com](https://automations.muhammadhassaankhan.com)
