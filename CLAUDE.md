# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Esharq Digital — an AI-focused IT agency website. Single-page marketing site with trilingual support (English, Uzbek, Russian).

## Commands

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm start` — Serve production build

## Tech Stack

- **Next.js 15** (App Router) with TypeScript
- **Tailwind CSS v4** (via `@tailwindcss/postcss`, uses `@import "tailwindcss"` syntax, not v3 config)
- **shadcn/ui** components in `src/components/ui/`
- **GSAP** + **Framer Motion** for animations
- **Lenis** for smooth scrolling (`SmoothScrollProvider`)
- **Gemini API** (`@google/genai`) — key set via `GEMINI_API_KEY` env var

## Architecture

### Routing & i18n

All pages live under `src/app/[lang]/` whe re `lang` is `en`, `uz`, or `ru`. Middleware (`src/middleware.ts`) redirects bare paths to the user's preferred locale. Default locale is `en`.

Translations are **not** in separate JSON files — they are defined inline in `src/lib/dictionaries.ts` as a single exported object. The `getDictionary` function (`src/lib/getDictionary.ts`) is server-only and returns the locale's dictionary (falling back to `en`). Dictionary sections are passed as props to each section component.

### Page Structure

The single page (`src/app/[lang]/page.tsx`) composes these sections in order:
Showcase (hero) → WhyAI → Services → Workflow → Portfolio → Contact

Layout (`src/app/[lang]/layout.tsx`) wraps everything in: Preloader → SmoothScrollProvider → Navbar + children + Footer.

### Key Directories

- `src/components/sections/` — Page section components (receive dict props)
- `src/components/layout/` — Navbar, Footer, Preloader
- `src/providers/` — Client-side providers (Lenis smooth scroll)
- `constants/partfoliyo.json` — Portfolio project data (trilingual)

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

### Styling

Dark theme by default. Brand colors defined as CSS custom properties in `src/app/globals.css` under `@theme inline`. Primary neon: `#27DFE9`, background: `#151616`.

### Images

Remote images from `images.unsplash.com` are allowed in `next.config.ts`. Static assets go in `public/images/` and `public/svg/`.
