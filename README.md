# EventPulse

> **Discover what moves you.** EventPulse is a responsive event-discovery and booking experience designed around a warm, editorial festival identity.

[Live website](https://anon-443.github.io/eventpulse/) · [Source code](https://github.com/anon-443/eventpulse) · [Report an issue](https://github.com/anon-443/eventpulse/issues)

## Overview

EventPulse helps visitors discover curated events, explore event details, book a simulated ticket, and keep saved passes close at hand. The interface pairs warm paper surfaces, coral actions, cobalt wayfinding, ticket-stub details, motion that respects reduced-motion preferences, and layouts tailored for mobile, tablet, and desktop screens.

The repository includes both the browser application and a full-stack development setup. The public GitHub Pages site is a static presentation of the experience, while the managed application can use the Express/tRPC server for server-backed features.

## Live site

The public static site is available at:

**https://anon-443.github.io/eventpulse/**

| Environment | URL | Purpose |
| --- | --- | --- |
| GitHub Pages | [anon-443.github.io/eventpulse](https://anon-443.github.io/eventpulse/) | Public, static portfolio and project preview |
| Repository | [anon-443/eventpulse](https://github.com/anon-443/eventpulse) | Source code, workflow configuration, and project documentation |

## Features

| Area | Included experience |
| --- | --- |
| Discovery | Search, category chips, price, date, and event-type filters with responsive event cards |
| Event details | Agenda, venue information, countdown timer, map presentation, and share controls |
| Booking | Multi-step demo booking flow, ticket confirmation, QR presentation, and ticket download |
| Wallet | Saved passes, expiry filters, pass reminders, 3D flip cards, visual barcode, entry rules, quick share, and a clearly labelled mock ticket transfer |
| Profile | Local account preview, notification preferences, referral insights, CSV export, and account-scoped rewards |
| Organizer Hub | Event management UI, auto-saved event drafts, live preview, ticket theme/logo customization, and AI-description workflow for the server-enabled app |
| Polish | Light and dark modes, reduced-motion support, responsive navigation, accessible focus states, and toast feedback |

## Technology

EventPulse uses **React 19**, **TypeScript**, **Vite**, **Tailwind CSS 4**, **Framer Motion**, **Wouter**, **Sonner**, **tRPC**, **Express**, **Drizzle**, and **Vitest**. The browser UI uses local storage for the clearly labelled account-preview, wallet, referral, rewards, and organizer-draft examples.

## Run locally

### Requirements

Install a current LTS release of Node.js and use [pnpm](https://pnpm.io/). The project pins its package-manager version in `package.json`.

### Installation

```bash
git clone https://github.com/anon-443/eventpulse.git
cd eventpulse
pnpm install
pnpm dev
```

The local app will start on the port assigned by the development environment. Open the address shown in your terminal.

### Useful commands

| Command | What it does |
| --- | --- |
| `pnpm dev` | Starts the full local development server |
| `pnpm test` | Runs the Vitest suite |
| `pnpm check` | Runs TypeScript checking without emitting files |
| `pnpm build` | Builds the client and server bundles for the managed full-stack deployment |
| `pnpm build:pages` | Builds the static GitHub Pages site under the `/eventpulse/` base path |

## GitHub Pages deployment

The repository deploys to GitHub Pages through [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). The workflow runs whenever `main` is updated and builds the project using the `/eventpulse/` base path.

To maintain the live site, keep **Settings → Pages → Build and deployment → Source** set to **GitHub Actions**. Static deep links are supported through the included `404.html` client-router fallback.

## Static-site limitations

GitHub Pages serves static files only, so it does **not** run the Express/tRPC server, database, authentication, or server-side AI procedure. The Pages version continues to support browser-based discovery, filters, demo booking, locally stored wallet/profile experiences, referral views, organizer UI, and theme preferences. The AI description generator is intentionally shown as unavailable on the static deployment rather than presenting a misleading result.

Use a server-enabled deployment for live AI generation, real user accounts, ticket validation, or any feature that requires a private API key or database.

## Important demo notes

The booking payment, Apple Wallet handoff, ticket transfer, ticket barcode validation, local account preview, referral analytics, and loyalty rewards are **demonstration interfaces**. They are designed to show interaction patterns and do not transfer ticket ownership, process payments, validate venue entry, or store personal data on a remote server.

## Project structure

```text
client/
  src/pages/          # Home, Organizer Hub, Profile, and fallback page
  src/components/     # Ticket, wallet, notification, map, and UI components
  src/lib/            # Local identity, storage, routing, and rewards helpers
server/
  routers.ts          # tRPC procedures, including the server-side AI workflow
  db.ts               # Database helpers
.github/workflows/    # GitHub Pages deployment workflow
GITHUB_PAGES.md       # Detailed static-hosting notes
```

## Quality checks

Before publishing changes, run:

```bash
pnpm test
pnpm check
pnpm build:pages
```

The project also uses responsive visual checks for the public routes and verifies direct navigation on the GitHub Pages version.

## Next enhancements

The strongest next implementation steps are a secure public API backend for live AI generation, authenticated ticket ownership with signed QR validation, and an event-specific organizer branding model backed by a database.

---

Built as an EventPulse course project and portfolio-ready event booking platform.
